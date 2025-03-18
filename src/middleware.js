import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";


export const middleware = async (req) => {
    const token = await getToken({req});
    const isTokenOk = Boolean(token)
    const isAdminUser = token?.role == "admin"
    const isAdminSpacificRoute = req.nextUrl.pathname.startsWith('/products')

    if(isAdminSpacificRoute && !isAdminUser){
        const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url));

    }

    return NextResponse.next()
}
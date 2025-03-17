"use client"
import { SessionProvider } from "next-auth/react"

export default function NextAuthSeassionProvider({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
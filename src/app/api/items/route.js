import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export async function GET() {
    
    const data = await dbConnect("users").find({}).toArray()
   
    return Response.json(data)
  }

  export async function POST(req) {
    
    const postedData = await req.json()
    const result = await dbConnect("users").insertOne(postedData)
    revalidatePath("/products")
    return Response.json(result)
  }
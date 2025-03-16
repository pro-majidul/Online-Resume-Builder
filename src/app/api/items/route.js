import dbConnect from "@/lib/dbConnect"

export async function GET() {
    
    const data = await dbConnect("embedded_movies").find({}).toArray()
   
    return Response.json(data)
  }

  export async function POST(req) {
    
    const postedData = await req.json()
    const result = await dbConnect("embedded_movies").insertOne(postedData)
    return Response.json(result)
  }
import clientPromise from "@/app/api/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio_db");
    const data = await db.collection("attributes").findOne({});
    return Response.json(data);
  } catch (error) {
    return new Response("Error fetching data", { status: 500 });
  }
}
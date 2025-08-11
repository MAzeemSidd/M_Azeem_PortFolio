import dbConnect from "@/app/api/mongodb/lib/dbConnect";
import Product from "@/app/api/mongodb/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({});
    console.log("P r o d u c t s  ========>  ", products)
    return NextResponse.json(products);
  } catch(err: any) {
    return NextResponse.json({ error: err.message });
  }
}
import clientPromise from "@/app/api/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// Optional: Define allowed collections for security
const ALLOWED_COLLECTIONS: string[] = ['attributes', 'working_exp', 'academic_info', 'certifications', 'skills', 'contact_details'];

interface Params {
  collection: string;
  multiple?: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  try {
    const { collection } = params;
    const { searchParams } = new URL(request.url);
    const multiple = searchParams.get('multiple');

    const client = await clientPromise;
    const db = client.db("portfolio_db");

    if(multiple) {
      // Creating the array of strings by splitting string through comma..
      //.. and trimming once during splitting
      const collections = collection.split(',').map(col=>col.trim());

      for (const col of collections) {
        // Validate all collection name
        if (!ALLOWED_COLLECTIONS.includes(col)) {
          return new NextResponse("Invalid collection name", { status: 400 });
        }
      }

      const promises = collections.map(async (col) => {
        const data = await db.collection(col).find({}).toArray();
        return { [col]: data };
      });

      const collectionResults = await Promise.all(promises);
      const results: {} = collectionResults.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      
      // Lastly send all the responses.
      return NextResponse.json(results, { status: 200 });
    }

    // Validate collection name
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return new NextResponse("Invalid collection name", { status: 400 });
    }
    
    // If validation successfull, then find and send the data.
    const data = await db.collection(collection).find({}).toArray();
    return NextResponse.json(data, { status: 200 });
  }
  catch (error) {
    console.error("Database error:", error);
    return new NextResponse("Error fetching data", { status: 500 });
  }
}
// import { NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs";

// export async function POST(
//     req: Request,

// ) {
//     try{
//         const { userId } = auth();
//         const { title } = await req.json();

//         if (!userId) {
//             return new NextResponse("Unauthorized", { status: 401 });
//         }

//         const course = await  

//     } catch (error) {
//         console.log("[COURSES]", error);
//         return new NextResponse("Internal Error", { status: 500 });
//     }
// }
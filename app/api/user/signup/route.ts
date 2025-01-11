import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()

export async function POST(req: NextRequest){
    try {
        const body = await req.json();
        await client.user.create({
            data: {
                username: body.userName,
                email: body.email,
                password: body.password
            }
        })
        return Response.json({
            success: true,
            message: "user registered successfully",
        });
    } catch (error) {
        return Response.json({
            success: false,
            message: "500 internal server error",
        });
    }
}

import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Find user by email
        const user = await client.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            },
        });

        if (!user) {
            return Response.json(
                {
                    success: false,
                    message: "User not found",
                },
                { status: 404 }
            );
        }

        return Response.json({
            success: true,
            user: {
                name: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        return Response.json({
                success: false,
                message: "500 internal server error",
            },{ status: 500 
        });
    }
}
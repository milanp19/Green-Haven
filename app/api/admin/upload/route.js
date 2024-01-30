import multer from "multer";
import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { buffer } from "node:stream/consumers";
import prisma from "../../../lib/prismaClient.js";
import s3 from "../../../lib/s3client.js";

export const config = {
  api: {
    bodyParser: false,
  },
};

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

export async function POST(request) {
  const formData = await request.formData();
  const image = formData.get("image");
  const buffer = new Response(image).arrayBuffer();
  buffer.then(async (buff) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: image.name,
      Body: buff,
      ContentType: image.type,
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    await prisma.images.create({
      data: { id: crypto.randomUUID(), image: image.name },
    });
  });

  return Response.json("d");
}

export async function GET(req) {
  return NextResponse.json("drg");
}

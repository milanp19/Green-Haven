import { NextResponse } from "next/server.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import prisma from "../../../lib/prismaClient.js";
import s3 from "../../../lib/s3client.js";
process.noDeprecation = true;

export async function POST(request) {
  const formData = await request.formData();
  const image = formData.get("image");
  const buffer = await new Response(image).arrayBuffer();
  const buff = Buffer.from(buffer);
  console.log(buff);

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

  return Response.json("d");
}

export async function GET(req) {
  return NextResponse.json("drg");
}

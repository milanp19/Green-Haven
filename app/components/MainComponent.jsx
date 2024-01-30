import Image from "next/image";
import Link from "next/link";
import prisma from "../../app/lib/prismaClient";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../../app/lib/s3client.js";

const MainComponent = async () => {
  const images = await prisma.images.findMany();
  for (const img of images) {
    const getObjectParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: img.image,
    };
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    img.imageUrl = url;
  }
  // console.log(images);
  return (
    <main className="px-24 pt-10" id="main">
      <h1 className="text-3xl">Designs you might love...</h1>
      <div className="grid grid-cols-4 mt-4 gap-4">
        {images.map((img, i) => (
          <div
            className="relative h-60 w-80 overflow-hidden hover:brightness-75 rounded-xl shadow-2xl"
            key={i}
          >
            <Link
              href={{
                pathname: `/design/${i + 1}`,
                query: {
                  src: img.imageUrl,
                  redirectURL: "/",
                },
              }}
            >
              <Image
                alt="image"
                src={img.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="hover:scale-110 transition-all"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;

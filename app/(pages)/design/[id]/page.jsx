import { signIn } from "next-auth/react";
import prisma from "../../../lib/prismaClient";
import HeroSection from "../../../components/HeroSection";
import {} from "next/navigation";

const DesignPage = ({ params, searchParams }) => {
  const handleClick = async (session) => {
    "use server";
    if (session) {
      const liked = await prisma.user.findFirst({
        email: session.user.mail,
      });
      await prisma.user.update({
        where: {
          email: session.user.email,
        },
        data: {
          likedImages: [...liked.likedImages, searchParams.src],
        },
      });
    } else
      await signIn("callback" || "google", {
        redirect: searchParams.redirectURL,
      });
  };

  return (
    <div className="px-20 pt-6 ">
      <HeroSection handleClick={handleClick} searchParams={searchParams} />
    </div>
  );
};

export default DesignPage;

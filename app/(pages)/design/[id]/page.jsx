import prisma from "../../../lib/prismaClient";
import HeroSection from "../../../components/HeroSection";

const DesignPage = ({ params, searchParams }) => {
  const handleClick = async (session, liked) => {
    "use server";

    if (session) {
      const likedDesign = await prisma.user.findFirst({
        email: session.user.mail,
      });
      if (liked) {
        await prisma.user.update({
          where: {
            email: session.user.email,
          },
          data: {
            likedImages: [...likedDesign.likedImages, searchParams.src],
          },
        });
      } else {
        const updatedArray = likedDesign.likedImages.splice(
          likedDesign.likedImages.indexOf(searchParams.src),
          1
        );

        await prisma.user.update({
          where: {
            email: session.user.email,
          },
          data: {
            likedImages: updatedArray,
          },
        });
      }
    }
  };
  return (
    <div className="px-20 pt-6 ">
      <HeroSection handleClick={handleClick} searchParams={searchParams} />
    </div>
  );
};

export default DesignPage;

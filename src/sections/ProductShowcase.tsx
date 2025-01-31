import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress.
          </h2>
          <p className="text-center text-[22px] leading-[30px] -tracking-tight text-[#010D3E] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <Image
            src={PyramidImage}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
          />
          <Image
            src={TubeImage}
            alt="Tube Image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={242}
          />
        </div>
      </div>
    </section>
  );
};

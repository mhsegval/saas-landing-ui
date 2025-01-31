import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_var(--tw-gradient-stops))] from-[#183EC2] to-[#EAEEFE] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Start free trial</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
            />
            <Image
              src={CylinderImage}
              width={220}
              height={220}
              alt="Cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={NoodleImage}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] lg-left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

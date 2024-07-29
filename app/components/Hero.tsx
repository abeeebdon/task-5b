// components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  const userImages = [
    "/User2.png",
    "/User1.png",
    "/Photo1.png",
    "/Photo1.png",
    "/User1.png",
    "/Photo1.png",
  ];

  return (
    <section className="w-full max-w-[1440px] h-auto bg-gradient-to-b from-white to-[#FEEEFF] flex flex-col items-center px-4 md:px-8">
      <div className="relative top-[180px] gap-[24px] w-full max-w-[1068px] flex flex-col items-center justify-center">
        <div className="gap-[16px] flex flex-col items-center">
          <h1 className="font-inter text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[58.09px] text-center text-[#101010]">
            Unlock the Power of{" "}
            <span className="text-[#770080]">Your Content with AI</span>
          </h1>
          <p className="font-manrope text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[27.32px] text-center text-[#1F1F1F]">
            From text to video, audio to summaries, create engaging media in
            seconds.
          </p>
          <button className="w-[135px] h-[48px] px-[16px] py-[8px] rounded-[6px] bg-[#770080] text-white">
            Get Started
          </button>
        </div>
        <div className="gap-[12px] flex flex-col md:flex-row items-center">
          <div className="flex gap-[8px]">
            {userImages.map((src, index) => (
              <div
                key={index}
                className="w-[31px] h-[31px] rounded-full border border-white"
              >
                <img
                  src={src}
                  alt={`user ${index + 1}`}
                  className="w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
          <p className="font-manrope text-[12px] font-medium leading-[16.2px] text-left text-[#1F1F1F]">
            Loved by 12,000 users
          </p>
        </div>
      </div>
      <div className="w-auto h-auto max-w-[986px]  mt-[281px]   border-[#FFF9FF] ">
        <img
          src="/Uploaded video - Transcript 2.png"
          alt="Hero"
          className="w-full h-full rounded-[36px]"
        />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "../app/globals.css";
import Image from "next/image";

const FounderSection: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center bg-[#191970] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:mr-10 md:w-auto md:items-start">
            <Image
              src="/founder-image.png"
              alt="[[Founder]]"
              width={400}
              height={400}
              className="mb-4 h-auto"
            />
            <div className="text-center md:text-left">
              <h3 className="mb-2 mt-6 text-lg font-bold">Label White</h3>
              <p className="mb-2 text-[#BABAD4]">Owner and Your Guide</p>
            </div>
          </div>
          <div className="text-top flex w-full flex-col  md:w-auto md:items-start md:text-left">
            <h2 className="mb-6 text-6xl font-medium">Meet the Founder</h2>
            <p className="max-w-lg text-xl font-light text-[#BABAD4]">
              Label White brings a decade of experience in computer hardware and
              datacenter operations, AI infrastructure development, and a passion for
              AI compute solutions. His comprehensive background and hands-on approach
              in hardware and infrastructure and customer obsession have been the
              driving force behind White Label CSP success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;

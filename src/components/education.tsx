import React from "react";
import Image from "next/image";
import { prefix } from "@/app/prefix";

const Education = () => {
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Education
      </h2>
      <div className="flex gap-6 items-center">
        <Image
          src={`${prefix}/unc.png`}
          alt="Logo of the University of North Carolina at Chapel Hill"
          className="rounded-lg"
          width={100}
          height={100}
        />
        <div>
          <h3 className="text-lg font-semibold">University of North Carolina at Chapel Hill</h3>
          <p className="text-med text-gray-500">B.S. Business Administration, Computer Science</p>
          <p className="text-med text-gray-500 italic">August 2018 - May 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

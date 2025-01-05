/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import WorkHistory from "@/components/work-history";
import Education from "@/components/education";
import Headshot from "../components/images/headshot.jpeg";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi! I'm Chetan 👋
        </h1>
        <div className="flex justify-start flex-col gap-2">
          <p className="text-left">currently working on:</p>
          <ul className="list-disc">
            <li>
              <p>engineering in the card tech space at capital one</p>
            </li>
            <li>
              <p>training for my first half-marathon</p>
            </li>
            <li>
              <p>traveling and taking photos</p>
            </li>
            <li>
              <p>building this site 🚧</p>
            </li>
          </ul>
        </div>

        <Image
          src={Headshot}
          alt="A headshot of Chetan"
          width={300}
          className="rounded-xl"
        />
      </div>

      <WorkHistory />
      <Education />
    </div>
  );
}

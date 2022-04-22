import React from "react";
import { SocialIcon } from "react-social-icons";
import { ChevronUpIcon } from "@heroicons/react/outline";
import Link from "react-scroll/modules/components/Link";
export default function Footer() {
  return (
      <section className="footer h-fit bg-black pt-5 mt-5">
    <div className="w-fit lg:w-1/2  align-center m-auto place-content-center">
      <div className="w-full lg:w-1/2 align-center m-auto">
        <Link to="about" smooth="true" className="">
          <ChevronUpIcon
            className="border w-60 h-60  lg:w-32 lg:h-32 rounded-full border-gray-800 m-auto hover:opacity-70  cursor-pointer"
            height={70}
            width={70}
          />
        </Link>
        <ul className="flex m-auto justify-center">
          <li className="mt-5 lg:w-32 lg:h-32 mb-5 mx-3 justify-center hover:opacity-70">
            <SocialIcon url="https://www.linkedin.com/in/shalev-gerbi/"/>
          </li>
          <li className="mt-5 mb-5 mx-3  justify-content brightness-200 hover:opacity-70">
            <SocialIcon url="https://github.com/shalevgerbi"/>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    </section>
  );
}

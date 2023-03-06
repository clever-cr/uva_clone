import Image from "next/image";
import React from "react";
import FooterContact from "../ui/FooterContact";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "/public/images/black.png";
import Wrapper from "./Wrapper";
const Footer = () => {
  return (
    <div className="bg-[#1F1D20] px-[68px] sm:px-0">
      <Wrapper>
        <div className=" pt-[36px]">
          <div className=" sm:px-3">
            <Image
              className="w-[317px] h-[35px] object-cover"
              src={logo}
              alt=""
            />
            <div className="grid grid-cols-4 pt-[48px] pb-[53px] sm:grid-cols-1">
              <FooterContact
                titles={["Education & Research"]}
                links={[
                  "Bachelor's programmes",
                  "Minors",
                  "Master's programmes",
                  "Professional development",
                  "Exchange",
                  "Summer School",
                  "PhD at UvA",
                  "Research at UvA",
                ]}
              />
              <FooterContact
                titles={["Go to"]}
                links={[
                  "Webmail for UvA staff",
                  "Webmail UvA students",
                  "Library",
                  "Canvas",
                  "SIS",
                  " Timetable",
                  "Course Catalogue",
                  " Vacancies",
                  "  UvAshop.nl (Merchandise store)",
                ]}
              />
              <FooterContact
                titles={["Informartion for"]}
                links={[
                  "Prospective students",
                  "Current students",
                  "Staff",
                  "Journalists",
                  "Alumni",
                  "Donors",
                  "Employers",
                  "External suppliers",
                ]}
              />
              <FooterContact
                titles={["Contact"]}
                links={[
                  "Contact information",
                  "Locations",
                  "Contact Student Services",
                  "The UvA and social media",
                ]}
              />
            </div>
          </div>

          <div className="flex items-center justify-between border-t px-[68px]- py-[33px] sm:flex-col-reverse sm:px-5 sm:border-none sm:pt-0 sm:pb-24px sm:gap-y-[25px]">
            <div className="text-[#d6d6d6] flex gap-x-[15px]  ">
              <p>Copyright UvA 2023</p>
              <div className="flex items-center gap-x-[12px]">
                {["About this site", "Privacy", "Cookie settings"].map(
                  (i, index) => {
                    return <div key={index}>{i}</div>;
                  }
                )}
              </div>
            </div>
            <div className="flex items-center text-[#d6d6d6] gap-[12px] sm:flex-col">
              <p className="">Follow UvA on social media</p>
              <div className="flex gap-x-[12px] items-center sm:gap-x-[45px] ">
                <FaFacebookF className="w-5 h-6" />
                <FaTwitter className="w-5 h-6" />
                <FaLinkedinIn className="w-5 h-6" />
                <FaInstagram className="w-5 h-6" />
                <FaWhatsapp className="w-5 h-6" />
                <FaYoutube className="w-5 h-6" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;

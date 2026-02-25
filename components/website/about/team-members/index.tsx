import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";

const TeamMembersSection = () => {
  return (
    <section className="py-18 min-h-[80vh] bg-white border-y border-dashed border-[#808080]">
      <div className="container mx-auto px-4">
        <h2 className="text-[2.6rem] font-medium mb-8">
          Meet the Minds Behind Rideflow
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/founder.jpg"
                alt="Michael Idris"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Michael Idris</p>
              <p className="text-rideflow-text font-light">Founder & CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/hr.jpg"
                alt="HR Manager"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Ajibola Akinsola</p>
              <p className="text-rideflow-text font-light">
                Executive Assistant / HR Manager
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/bus-man.jpg"
                alt="Business Development Manager"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Toriola Oladeji</p>
              <p className="text-rideflow-text font-light">
                Business Development Manager
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/soc-man.png"
                alt="Social Media Manager"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Stephanie Okudo</p>
              <p className="text-rideflow-text font-light">
                Social Media Manager
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/pro-des.jpg"
                alt="Product Designer"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Nazeer Adeniji</p>
              <p className="text-rideflow-text font-light">Product Designer</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/bac-eng.jpg"
                alt="Backend Engineer"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Precious Abegunde</p>
              <p className="text-rideflow-text font-light">Backend Engineer</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/fro-eng.jpg"
                alt="Frontend Engineer"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Tooni Olaniyan</p>
              <p className="text-rideflow-text font-light">Frontend Engineer</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/mob-dev.jpg"
                alt="Mobile Developer"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Nkpozi Kelechi</p>
              <p className="text-rideflow-text font-light">Mobile Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/mot-des.jpg"
                alt="Motion Designer"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Richard Amune</p>
              <p className="text-rideflow-text font-light">
                Motion Graphics Designer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] overflow-hidden aspect-square relative">
              <Image
                src="/about/director.jpg"
                alt="Director"
                fill
                className="object-cover"
              />
              <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 hover:opacity-100 transition-opacity items-center justify-center">
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-body-gray p-2 rounded-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium text-[22px]">Olayiwola Mariam</p>
              <p className="text-rideflow-text font-light">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;

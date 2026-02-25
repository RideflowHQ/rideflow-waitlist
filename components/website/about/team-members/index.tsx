import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Michael Idris",
    role: "Founder & CEO",
    image: "/about/founder.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Ajibola Akinsola",
    role: "Executive Assistant / HR Manager",
    image: "/about/hr.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Toriola Oladeji",
    role: "Business Development Manager",
    image: "/about/bus-man.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Stephanie Okudo",
    role: "Social Media Manager",
    image: "/about/soc-man.png",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Nazeer Adeniji",
    role: "Product Designer",
    image: "/about/pro-des.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Precious Abegunde",
    role: "Backend Engineer",
    image: "/about/bac-eng.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 7,
    name: "Tooni Olaniyan",
    role: "Frontend Engineer",
    image: "/about/fro-eng.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 8,
    name: "Nkpozi Kelechi",
    role: "Mobile Developer",
    image: "/about/mob-dev.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 9,
    name: "Richard Amune",
    role: "Motion Graphics Designer",
    image: "/about/mot-des.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 10,
    name: "Olayiwola Mariam",
    role: "Director",
    image: "/about/director.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const TeamMembersSection = () => {
  return (
    <section className="py-18 min-h-[80vh] bg-white border-y border-dashed border-[#808080]">
      <div className="container mx-auto px-4">
        <h2 className="text-[2.6rem] font-medium mb-8">
          Meet the Minds Behind Rideflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="rounded-[20px] overflow-hidden aspect-square relative group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
                  <a
                    href={member.socials.facebook}
                    className="bg-body-gray p-2 rounded-lg hover:bg-gray-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="bg-body-gray p-2 rounded-lg hover:bg-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="bg-body-gray p-2 rounded-lg hover:bg-gray-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              <div>
                <p className="font-medium text-[22px]">{member.name}</p>
                <p className="text-rideflow-text font-light">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;

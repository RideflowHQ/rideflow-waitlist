import Badge from "@/components/custom/badge";
import Image from "next/image";
import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import { aboutTeam } from "@/lib/content/about";

const TeamMembersSection = () => {
  return (
    <section className="py-12 md:py-18 min-h-[80vh] bg-white border-y border-dashed border-[#808080]">
      <div className="container mx-auto px-6">
        <Badge text="The People Behind Rideflow" color="bg-body-gray" />
        <TextAnimate
          animation="blurIn"
          by="word"
          startOnView
          once
          className="text-2xl sm:text-3xl md:text-[2.6rem] font-medium mb-2"
        >
          Experienced Team. Hands-On Builders.
        </TextAnimate>
        <p className="text-rideflow-text-light mb-8 md:mb-10 max-w-2xl">
          We&apos;re a small, focused team of engineers, designers, and
          operators, building fast and staying close to the problem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aboutTeam.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="rounded-[20px] overflow-hidden aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                {member.socials && (
                  <div className="absolute bg-white flex flex-col gap-3 top-0 left-0 rounded-tl-[20px] rounded-br-[20px] p-3 items-center justify-center">
                    <a
                      href={member.socials.facebook}
                      className="bg-body-gray p-2 rounded-lg hover:bg-gray-300 transition-colors"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/about/founder-facebook.svg"
                        alt="facebook"
                        width={18}
                        height={18}
                      />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="bg-body-gray p-2 rounded-lg hover:bg-gray-300 transition-colors"
                      aria-label="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/about/founder-linkedin.svg"
                        alt="linkedin"
                        width={18}
                        height={18}
                      />
                    </a>
                    <a
                      href={member.socials.x}
                      className="bg-body-gray p-2 rounded-lg hover:bg-gray-300 transition-colors"
                      aria-label="x"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/about/founder-x.svg"
                        alt="x"
                        width={18}
                        height={18}
                      />
                    </a>
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium text-[22px]">{member.name}</p>
                <p className="text-rideflow-text font-light">{member.role}</p>
                <p className="mt-2 text-sm leading-6 text-rideflow-text-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;

import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <div className="flex justify-center text-left mt-16">
      <div className="w-[60%] space-y-8">
        <p className="font-light mb-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu.
        </p>
        <div>
          <h2 className="text-[1.8rem] font-medium text-foreground mb-4">
            Heading
          </h2>
          <p className="font-light mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
          <p className="font-light">
            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
            massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
            semper vel class aptent taciti sociosqu.
          </p>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-medium text-foreground mb-4">
            Sub Heading
          </h2>
          <p className="font-light mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu.
          </p>
          <p className="font-light mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu.
          </p>
          <div className="aspect-[16/5] relative">
            <Image
              src="/service/service-handshake.webp"
              alt="Service Handshake"
              fill
              className="mx-auto rounded-[25px] object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-medium text-foreground mb-4">
            Final Thoughts
          </h2>
          <p className="font-light mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

import Image from "next/image";
import React from "react";
import Data from "../Assets/Data.png";

const Vision = () => {
  return (
    <div id="vision">
      <h1 className="text-2xl sm:text-3xl md:text-4xl my-8 lg:text-5xl font-bold text-center text-black dark:text-white">
        Our Vision
      </h1>
      <div
        className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9"
        data-aos="fade-up"
      >
        <div className="relative rounded-md">
          <Image
            src={Data}
            width={2000}
            height={800}
            placeholder="blur"
            alt="Ravian"
            className="w-full h-full rounded-md object-center object-fill absolute blur-[3px]  block "
          />

          <div
            className="text-xl relative w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md "
            style={{
              background:
                "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(99, 102, 241, 0.6) 49.66%, rgba(168, 85, 247, 0.6) 49.66%, rgba(204, 171, 238, 0) 92.38%)",
            }}
          >
            <div>
              <h1
                className="md:text-3xl text-lg font-bold md:leading-10 leading-9 text-white sm:w-auto w-64"
                data-aos="fade-down"
              >
                At RAVIAN AI, our vision is to redefine the frontiers of data
                science by integrating artificial intelligence with human
                ingenuity.
              </h1>
              <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-11/12  2xl:pr-10 mt-4">
                {" "}
                We strive to develop AI-driven solutions that not only solve
                complex business problems but also cultivate a deeper
                understanding of the data that shapes our world. We envision a
                future where every organization, regardless of its size or
                sector, has access to the power of advanced data analytics,
                enabling them to make smarter decisions, innovate faster, and
                drive meaningful progress. Our goal is to become the cornerstone
                for transformative analytics that empower businesses to lead
                with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

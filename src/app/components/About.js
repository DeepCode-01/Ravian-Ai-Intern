import Image from "next/image";
import Ravian from "../Assets/data analytics.png"


const About = () => {
  return (
    <div className="text-[#03989e] dark:text-[#00c2cb] w-full flex flex-col mt-4 items-center justify-center gap-2 md:gap-4 p-5 " id="about">
      <h1 className="text-2xl sm:text-3xl md:text-4xl my-8 lg:text-5xl font-bold text-center text-black dark:text-white" >
        About Us
      </h1>
      <section className="mb-20">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <Image
                width={800}
                height={500}
                src={Ravian}
                alt="Ravian ai"
                placeholder="blur"
                className="w-full rounded-xl shadow-xl dark:shadow-black/20 lg:ml-[50px] z-[10] bg-gray-300 dark:bg-gray-800" data-aos="fade-right"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12" data-aos="fade-left">
            <div className="flex h-full items-center rounded-xl bg-gray-300 shadow-2xl dark:bg-gray-800 p-6 text-center  lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-2 text-2xl font-bold bg-clip-text text-center my-2 text-transparent bg-gradient-to-r  from-[#00c2cb] to-green-600  dark:from-indigo-500 dark:to-purple-500">
                At RAVIAN, we are dedicated to transforming the
                  landscape of data analytics through
                  innovation and cutting-edge technology
                </h2>
                <span className="mb-2 pb-2 lg:pb-0 text-[0.9rem] text-gray-700 font-semibold dark:text-gray-200">
                As pioneers in the field, we have developed the
                world leading AI data scientist—an intelligent platform that leads the way in crafting
                machine learning and deep learning models, conducting comprehensive data analysis,
                and delivering actionable insights through intuitive visualizations.

                <br />
                <br />

                Our journey began with a vision to empower businesses with the tools they need
                to
                harness the power of their data and make informed decisions that drive success. With a
                team of passionate experts and a commitment to excellence, we have turned that vision
                into reality.
                </span>
                <br />
                <br />
                <span className="mb-2 pb-2 lg:pb-0 text-[0.9rem] text-gray-700 font-semibold dark:text-gray-200">
                  EToday, RAVIAN stands at the forefront of AI-driven analytics, helping
                businesses of all
                sizes unlock the full potential of their data assets. Whether you are uncovering hidden
                patterns, predicting future trends, or optimizing operations, RAVIAN AI is your trusted
                partner in navigating the complexities of data-driven decision-making.
                Join us on this journey as we continue to push the boundaries of what is possible in the
                realm of data analytics. Welcome to RAVIAN AI—where innovation meets intelligence.
                </span>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
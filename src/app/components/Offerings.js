"use client";
import { LockOpen, Tv2 } from "lucide-react";
import { useState, useEffect } from "react";



const Data = [
  {
    title: "AI Data Analyst",
    des: "I Data Analyst Meet Your AI Data Analyst Unlock the full potential of your data with RAVIAN AI’s Data Analyst—an intelligent platform designed to transform raw data into actionable insights. Our AI Data Analyst is equipped with the latest machine learning algorithms and cutting-edge technologies to analyze, interpret, and visualize data with precision and speed.",
    icon: <Tv2 />,
  },
  {
    title: "Gen AI Vision Analyst",
    des: "Introducing the Gen AI Vision Analyst: Redefining Visual Intelligence At RAVIAN AI, we are excited to introduce our revolutionary Gen AI Vision Analyst—a next-generation solution that sets a new standard for visual intelligence and data analysis.",
    icon: <LockOpen />,
  },
];

const Offerings = () => {
  const [color, setColor] = useState("#3b82f6");

  useEffect(() => {
    const colors = [
      "#ef4444",
      "#f59e0b",
      "#10b981",
      "#3b82f6",
      "#6366f1",
      "#8b5cf6",
      "#ec4899",
    ];
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl my-4 font-semibold text-black dark:text-white mb-6 uppercase text-center ">
          Our Offerings
        </h1>

        <div className="mt-12 w-full flex items-center justify-center">
          <ul className="grid md:grid-cols-2  gap-8 grid-cols-1 ">
            {Data.map((item, index) => (
              <li
                key={index}
                className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] border-4 dark:border-2"
                style={{
                  background: "linear-gradient(90deg, #1f2937 0%, #111827 100%)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderColor: color,
                }}
              >
                <blockquote>
                  <div className="relative z-20 mb-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1 text-white">
                      {item.icon}
                      <span className="text-xl leading-[1.6] font-semibold text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                  <span className="relative z-20 text-base leading-[1.6] text-gray-100 font-normal">
                    {item.des}
                  </span>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
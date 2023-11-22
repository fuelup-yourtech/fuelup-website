import React, { useEffect, useRef } from "react";
import modelData from "@/data/modelData";
import { motion, useAnimation } from "framer-motion";
import { Text } from "@chakra-ui/react";
import Models from "@/utils/models";

const WhyOurCompany = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > containerTop) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div ref={containerRef} className="p-10 font-sans">
        <div className="lg:pl-25 md:20">
          <Text fontSize={"35px"} fontWeight={"semibold"}>
            Why Our Company
          </Text>
          <Text
            className="pt-5"
            fontSize="2.125rem"
            lineHeight="1.235"
            fontWeight="400"
            fontFamily="roboto"
          >
            We follow Modern Iterative Process to <br />
            publish your website LIVE
          </Text>
        </div>
        <motion.div
          className="lg:pl-25 md:20 pt-5 flex flex-wrap"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {modelData.map((data, index) => (
            <motion.div
              className="border-l-2 border-black border-dotted w-full md:w-1/2 lg:w-1/4"
              key={index}
              variants={item}
            >
              <Models data={data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WhyOurCompany;

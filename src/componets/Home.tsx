import HomePageText from "@/assets/HomePageText.png";
// import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import GymDesign from "@/assets/gymdesign.webp";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

function Home() {
  let matches = useMediaQuery("(min-width:1023px)");
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-gray-20">
      <div className="home mx-auto flex w-5/6 flex-1 justify-center py-8">
        <div className="flex flex-col-reverse items-end sm:flex-row  sm:gap-10 md:items-center md:gap-20 lg:justify-between ">
          <div className="z-10 flex  basis-2/5 flex-col">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            >
              <div className="-left-20 -z-50 md:absolute md:-top-10 md:before:content-evolvetext"></div>
              <img alt="home-page-text" src={HomePageText} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 100, duration: 0.7 }}
            >
              <p className="mt-2 text-sm lg:mt-8">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 100, duration: 0.9 }}
              className="mt-2 flex items-center gap-8 lg:mt-8"
            >
              <button className="rounded bg-orange-500 p-2 capitalize text-white shadow">
                Join Now
              </button>
              <a href="#">learn more</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="z-20 flex basis-[40%] items-center justify-end sm:basis-1/2"
          >
            <img
              alt="home-pageGraphic"
              src={GymDesign}
              className="rounded shadow"
            />
          </motion.div>
        </div>
      </div>
      {matches && (
        <div className="mt-auto h-[100px] w-full bg-primary-300 pt-7">
          <div className="mx-auto w-5/6">
            <div className="flex items-center gap-8">
              <motion.img
                alt="redbull-sponsor"
                src={SponsorRedBull}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                width={80}
              />
              <motion.img
                alt="forbes-sponsor"
                src={SponsorForbes}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                width={80}
              />
              <motion.img
                alt="fortune-sponsor"
                src={SponsorFortune}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                width={80}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

import { SelectedPage } from "./Types";
import MainButton from "./MainButton";
import useMedia from "./useMedia";
import "../index.css";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "motion/react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMedia("(min-width:1060px");
  return (
    <>
      <section id="home" className="py-10 gap-16 md:h-full md:pb-0 bg-[F8F4EB]">
        <motion.div
          className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <div className="z-10 mt-32 md:basis-3/5">
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetex custom-before">
                  <img src={HomePageText} alt="" />
                </div>
              </div>
              <p className="mt-8 text-sm">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the <br /> Body Shapes That you Dream of..
                Get Your Dream Body Now.
              </p>
            </motion.div>
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <MainButton setSelectedPage={setSelectedPage}>
                Join Now
              </MainButton>
              <AnchorLink className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFC132] cursor-pointer">
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
          <div className="flex basis-3-5 justify-center md:z-10 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="" className="home-page-graphic" />
          </div>
        </motion.div>
        {isAboveMediumScreen && (
          <div className="h-[150px] w-full bg-[#FFE1E0] py-10">
            <div className="mx-auto w-5/6">
              <div className="flex items-center justify-between gap-8 w-3/5">
                <img src={SponsorRedBull} alt="" />
                <img src={SponsorForbes} alt="" />
                <img src={SponsorFortune} alt="" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;

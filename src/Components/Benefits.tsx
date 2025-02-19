import MainText from "./MainText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitPageGraphic from "../assets/BenefitsPageGraphic.png";
import { motion } from "motion/react";
import { SelectedPage } from "./Types";
import { BenefitsType } from "./Types";
import BenefitCard from "./BenefitCard";
import "../index.css";
import MainButton from "./MainButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const anim = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const BenefitInfo: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    desc: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    desc: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    desc: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section id="benefits" className="mx-auto min-h-full py-20 w-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
          >
            <MainText>MORE THAN JUST A GYM.</MainText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </motion.div>
          <motion.div
            className="md:flex items-center mt-5 justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={anim}
          >
            {BenefitInfo.map((benefit: BenefitsType) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                desc={benefit.desc}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          <div className="mt-16 md:flex items-center justify-between gap-20 md:mt-28">
            <img src={BenefitPageGraphic} className="mx-auto" alt="" />
            <div>
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] custom-before-2 before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { x: 50, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                  >
                    <MainText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className="text-[#FF6B66]">FIT</span>
                    </MainText>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  hidden: { x: 50, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              >
                <p className="my-5">
                  Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                  egestas ultrices consectetur adipiscing ultricies enim.
                  Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt
                  at in nulla nec. Consequat sed facilisis dui sit egestas
                  ultrices tellus. Ullamcorper arcu id pretium sapien proin
                  integer nisl. Felis orci diam odio.
                </p>
                <p className="my-5">
                  Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel
                  est tellus quam porttitor. Mauris velit euismod elementum arcu
                  neque facilisi. Amet semper tortor facilisis metus nibh.
                  Rhoncus sit enim mattis odio in risus nunc.
                </p>
              </motion.div>
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <MainButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </MainButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Benefits;

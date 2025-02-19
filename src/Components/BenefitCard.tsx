import { JSX } from "react";
import { SelectedPage } from "./Types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "motion/react";

type Props = {
  icon: JSX.Element;
  title: string;
  desc: string;
  setSelectedPage: (value: SelectedPage) => void;
};
const cardAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitCard = ({ icon, title, desc, setSelectedPage }: Props) => {
  return (
    <>
      <motion.div className="mt-5 rounded-md border-2  border-[#DFCCCC]  px-5 py-16 text-center"
        variants={cardAnim}
      >
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-[#DFCCCC] p-4 bg-[#FFE1E0]">
            {icon}
          </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{desc}</p>
        <AnchorLink
          className="text-sm font-bold text-[#FF6B66] underline hover:text-[#FFC132] cursor-pointer"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
    </>
  );
};

export default BenefitCard;

import { SelectedPage } from "./Types";
import { motion } from "motion/react";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import { useForm, SubmitHandler } from "react-hook-form";
import "../index.css";
import MainText from "./MainText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type FormValues = {
  Name: string;
  Email: string;
  Message: string;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-[#FFA6A3] placeholder-white px-5 py-3`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <>
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <MainText>
              <span className="text-[#FF6B66]">JOIN NOW</span> TO GET IN SHAPE
            </MainText>
            <p className="my-5">
              Congue adipiscing risus commodo placerat. Tellus et in feugiat
              nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
              adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>
          </motion.div>
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 md:mt-0 basis-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form action="" target="_blank" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Name"
                  {...register("Name", { required: true, maxLength: 20 })}
                />
                {errors.Name && (
                  <p className="mt-1 text-[#FF6B66]">
                    {errors.Name.type === "required" &&
                      "This Field is Required"}
                    {errors.Name.type === "maxLength" &&
                      "Max Length is 20 characters!"}
                  </p>
                )}
                <input
                  type="email"
                  className={inputStyles}
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.Email && (
                  <p className="mt-1 text-[#FF6B66]">
                    {errors.Email.type === "required" &&
                      "This Field is Required"}
                    {errors.Email.type === "pattern" && "Invalid Pattern!"}
                  </p>
                )}
                <textarea
                  className={inputStyles}
                  rows={4}
                  cols={50}
                  placeholder="Message"
                  {...register("Message", { required: true, maxLength: 300 })}
                />
                {errors.Message && (
                  <p className="mt-1 text-[#FF6B66]">
                    {errors.Message.type === "required" &&
                      "This Field is Required"}
                    {errors.Message.type === "maxLength" &&
                      "Max Length is 300 characters!"}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-5 bg-[#FFC132] px-20 py-3 rounded-lg transition duration-500 hover:text-white cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </motion.div>
            <motion.div
              className="relative md:mt-0 mt-16 basis-2/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img src={ContactUsPageGraphic} className="w-full" alt="" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactUs;

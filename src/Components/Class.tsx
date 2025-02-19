type Props = {
  name: string;
  desc?: string;
  image: string;
};

const Class = ({ name, desc, image }: Props) => {
  const overlay =
    "p-5 absolute flex h-[380px] w-[450px] z-30 flex-col items-center justify-center bg-[#FF6B66] text-white text-center whitespace-normal opacity-0 transition duration-500 hover:opacity-90";
  return (
    <>
      <li className="mx-5 relative inline-block h-[380px] w-[450px]">
        <div className={overlay}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{desc}</p>
        </div>
        <img src={image} alt="" />
      </li>
    </>
  );
};

export default Class;

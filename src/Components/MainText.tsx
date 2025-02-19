import React from "react";
import "../index.css"

type Props = {
  children: React.ReactNode;
};

const MainText = ({ children }: Props) => {
  return (
    <>
      <h1 className="basis-3/5 custom-font text-3xl font-bold">
        {children}
      </h1>
    </>
  );
};

export default MainText;

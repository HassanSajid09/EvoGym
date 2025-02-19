import { useState } from "react";
import Logo from "../assets/Logo.png";
import Link from "./Link";
import useMedia from "./useMedia";
import { SelectedPage } from "./Types";
import MainButton from "./MainButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMedia("(min-width:1060px)");
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBarBg = isTopOfPage ? "" : "bg-[#FFE1E0] drop-shadow";
  return (
    <>
      <nav>
        <div
          className={`${navBarBg} ${flexBetween} fixed top-0 py-6 w-full z-30`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img src={Logo} alt="logo" />
              {isAboveMediumScreen ? (
                <div className={`${flexBetween} w-full `}>
                  <div className={`${flexBetween} text-sm gap-8`}>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Our Classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Contact Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <MainButton setSelectedPage={setSelectedPage}>
                      Become a Member
                    </MainButton>
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full bg-[#FFC132] p-2 cursor-pointer"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
        {!isAboveMediumScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full z-40 w-[300px] drop-shadow-xl bg-[#FFE1E0]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./Types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  return (
    <>
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-[#FF6B66]" : ""
        } transition duration-500 hover:text-[#FFA6A3]`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </>
  );
};

export default Link;

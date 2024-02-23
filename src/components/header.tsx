
import gptLogo  from "../assets/gpt.png";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 py-2 px-6  flex items-center justify-center  w-full z-10 bg-neutral-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
      <img
        src={gptLogo}
        alt=""
        className="w-12 h-12"
      />
      <p className="cursive-font text-2xl ">kay-GPT</p>
    </div>
  );
};

export default Header;

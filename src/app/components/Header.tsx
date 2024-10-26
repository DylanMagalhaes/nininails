import Presentation from "./Presentation";

const Header = () => {
  return (
    <div
      className="flex bg-slate-800 flex-col md:flex-row justify-between items-center h-auto md:min-h-screen pt-16 pb-16 px-4 md:px-32 md:bg-cover md:bg-center"
      style={{
        backgroundImage: "url('/images/nails.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Presentation />
      </div>
    </div>
  );
};

export default Header;

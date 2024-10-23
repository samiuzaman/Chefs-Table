import bannerImg from "../../assets/banner.png";
const Banner = () => {
  const bgImage = {
    background: `url(${bannerImg})`,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backgroundBlendMode: "overlay",
  };
  return (
    <div
      style={bgImage}
      className="text-center h-[600px] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center rounded-3xl mt-10 mb-12"
    >
      <h1 className="w-2/3 mx-auto text-5xl font-bold text-white mb-6 leading-snug">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="w-2/3 mx-auto text-white font-normal text-lg mb-10">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex gap-6">
        <button className="btn btn-color">Explore Now</button>
        <button className="btn btn-outline text-white hover:bg-btnBg hover:text-darkShade">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;

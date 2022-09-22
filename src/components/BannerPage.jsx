import React from "react";

const BannerPage = ({ title }) => {
  return (
    <div className="w-full bg-gradient-to-b from-violetLight to-violetDark text-center pt-10 pb-10 md:pb-20">
      <h1 className="text-orangeLight text-4xl md:text-5xl font-bold font-fontLogo tracking-widest">
        {title}
      </h1>
    </div>
  );
};

export default BannerPage;

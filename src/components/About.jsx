import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-violet-900 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a highly motivated and skilled front-end developer with a passion
          for creating visually stunning and user-friendly websites and
          applications, have been honing my skills and passion for creating
          visually stunning and user-friendly websites and applications for the
          past 1 year.
        </p>
        <br />
        <p className="text-xl">
          Started my journey as a self-taught web developer and quickly fell in
          love with the creative process of bringing designs to life on the web,
          always eager to learn new technologies and stay up-to-date with the
          latest industry trends.
        </p>
        <br />
        <p className="text-xl">
          I am excited to continue my journey in the field of front-end
          development and am eager to bring my skills and experience to a
          company where I can continue to grow and make a meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;

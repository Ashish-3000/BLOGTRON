import React from "react";
import team from "../../assests/team.svg";
import "./About.css";

function About() {
  return (
    <>
      <div className="about1">
        <div>
          This place is on a mission to find out what goes behind the things
          which are affecting our daily lives. We find to find out what are the
          new tech trends in the market. How our future is going to be affected
          by technology. It's the small things that are making a huge impact in
          our lives. We don't realize it but are getting affected by it and when
          we start realizing how the things work what goes behind and how it is
          helping to find the solution in the real world we are going to better
          engineers of our life.
        </div>
        <img src={team} style={{ width: "30rem" }} alt="team image" />
      </div>
    </>
  );
}

export default About;

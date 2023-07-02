import Image from "next/image";
import {
  Selector,
  ScrollButton,
  Experience,
  Contact,
} from "../components/Exports";

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="main-bg">
        <div className="border-home">
          <div className="container-1">
            <div className="heading">Ethan Hansen</div>

            <h3 className="subheading">Development | Design | Data</h3>

            <Image src="https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338779/ellipse_hc8bka.svg" width={8} height={8} alt="Ellipse" />
            <div className="directory">
              <ScrollButton targetId="works" buttonText="works" />
              <ScrollButton targetId="experience" buttonText="experience" />
              <ScrollButton targetId="contact" buttonText="contact" />
            </div>
          </div>

          <div className="container-2">
            <div className="about">
              <h3 className="about-heading">
                Student at the University of British Columbia - double major in
                business & computer science. Passionate about the intersection
                of these fields. Aiming to leverage skills in design, data, and
                technology to inspire others and broaden horizons. Currently
                seeking software, analytics, and marketing internships to
                connect, learn, and gain unique experiences.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="page-bg" id="works">
        <div className="border-info">
          <div className="flex-container-center">
            <h1 className="page-title"> works </h1>
            <Selector />
          </div>
        </div>
      </div>

      <div className="page-bg" id="experience">
        <div className="border-info">
          <div className="flex-container-center">
            <h1 className="page-title"> experience </h1>
            <Experience />
          </div>
        </div>
      </div>

      <div className="main-bg" id="contact">
        <div className="border-contact">
          <div className="flex-container-center">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

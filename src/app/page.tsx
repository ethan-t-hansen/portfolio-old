import Image from "next/image";
import {Selector, ProjectContainer} from "../components/Exports";

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="main-bg">
        <div className="border">
          <div className="container-1">
            <div className="heading">Ethan Hansen</div>

            <h3 className="subheading">Development |   Design | Data</h3>

            <div className="directory">
              <Image src="/ellipse.svg" width={8} height={8} alt="Ellipse" />
              <h2 className="directory-heading">works</h2>
              <h2 className="directory-heading">experience</h2>
              <h2 className="directory-heading">about</h2>
              <h2 className="directory-heading">contact</h2>
            </div>
          </div>

          <div className="container-2">
            <div className="about">
              <h3 className="about-heading">
              As a business and computer science student at the University of British Columbia, 
              I'm passionate about the intersection of these fields. I thrive on blending design, 
              data, and technology to inspire others and broaden my horizons. Currently seeking 
              internships to connect, learn, and gain unique experiences.
              </h3>
            </div>
          </div>
          
        </div>
      </div>
      <div className="work-bg">
        <div className="border">
          <div className="flex-container-center">
            <h1 className="page-title"> works </h1>
            <div>
              <Selector />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


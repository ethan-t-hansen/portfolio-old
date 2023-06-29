import Ellipse from "../assets/ellipse.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="background">
      <div className="border">
        <h1 className="heading">Ethan Hansen</h1>

        <h3 className="subheading">Development | Design | Data</h3>

        <div className="directory">
          <Image src={Ellipse} width={8} height={8} alt="Ellipse" />
          <h2 className="directory-heading">work</h2>
          <h2 className="directory-heading">experience</h2>
          <h2 className="directory-heading">about</h2>
          <h2 className="directory-heading">contact</h2>
        </div>

      </div>
    </div>
  );
}

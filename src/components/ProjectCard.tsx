import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  type: string;
  stack: string;
  imgsrc: string;
  platform: string;
}

const ProjectCard: React.FC<CardProps> = (props) => {
  return (
    <div className="box">
      {props.imgsrc === "" ? (
        <div className="black-box"></div>
      ) : (
        <div className="proj-img">
            <Image
            src={props.imgsrc}
            alt="Project Image"
            width={1000}
            height={0}
            className={'image'}
            />
        </div>
      )}
      <h2 className="proj-title"> {props.title} </h2>
      <p className="p-text"> {props.desc} </p>
      <div>
        <h3 className="proj-stack"> {props.type} </h3>
        <p className="p-text"> {props.stack} </p>
      </div>
      <div>
        <h3> {">"} See more details </h3>
      </div>
    </div>
  );
};

export default ProjectCard;

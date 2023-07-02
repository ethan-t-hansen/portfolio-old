import Image from "next/image";

interface CardProps {
  title: string;
  desc: string;
  type: string;
  stack: string;
  imgsrc: string;
  platform: string;
  link: string;
}

const ProjectCard: React.FC<CardProps> = (props) => {

  function redirect(link: string) {
    if (link !== "") {
      window.open(link);
    }
  }

  return (
    <div className="box">
      <div className="proj-img">
        {props.imgsrc === "" ? (
          <Image
          src={'https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338781/placeholder_qmjfeb.png'}
          alt="Project Image"
          width={800}
          height={800}
          className={'image'}
          style={{objectFit: "contain"}}
        />

        ) : (
              <Image
                src={props.imgsrc}
                alt="Project Image"
                width={800}
                height={800}
                className={'image'}
                style={{objectFit: "contain"}}
              />
        )}
      </div>
      <h2 className="proj-title"> {props.title} </h2>
      <p className="p-text"> {props.desc} </p>
      <div>
        <h3 className="proj-stack"> {props.type} </h3>
        <p className="p-text"> {props.stack} </p>
      </div>
      <div>
        <button onClick={() => redirect(props.link)}> {">"} See more details </button>
      </div>
    </div>
  );
};

export default ProjectCard;

import Image from 'next/image'

export default function ProjectCard() {

    return (
        <div className="box">
            {/* <Image src="" alt="Project Image" width={100} height={100} /> */}
            <div className="black-box"></div>
            <h2 className="proj-title"> PROJECT TITLE </h2>
            <p className="p-text"> Project Description - this project solves this issue in this space </p>
            <div>
                <h3 className="proj-stack"> STACK: </h3>
                <p className="p-text"> TypeScript, Next.js, React</p>
            </div>
            <div>
                <h3> {'>'} See on GitHub</h3>
            </div>
        </div>
    )
}   
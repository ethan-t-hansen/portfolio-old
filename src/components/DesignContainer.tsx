import { ProjectCard } from "../components/Exports";

export default function DesignContainer() {

  return (
    <div className="proj-container">
      <ProjectCard
        title="THE NSCC"
        desc="Founded in 2013, the National Strategy Consulting Competition and Conference is the largest undergraduate case 
        competition and conference at the University of British Columbia. Spearheading design and marketing for 2 consecutive terms,
        I had the privilege of undertaking projects and graphics alike."
        type="Software used:"
        stack="Illustrator, Photoshop, Figma, SquareSpace (HTML + CSS)"
        imgsrc="/nscc.png"
        platform="[UNKNOWN]"
      />
      <ProjectCard
        title="Coming Soon"
        desc="Check back for updates! I'm working on a wide variety of projects at the moment and hope to share them soon!"
        type="Status:"
        stack="Currently in the works!"
        imgsrc=""
        platform="[UNKNOWN]"
      />
        <ProjectCard
        title="Coming Soon"
        desc="Check back for updates! I'm working on a wide variety of projects at the moment and hope to share them soon!"
        type="Status:"
        stack="Currently in the works!"
        imgsrc=""
        platform="[UNKNOWN]"
      />
        <ProjectCard
        title="Coming Soon"
        desc="Check back for updates! I'm working on a wide variety of projects at the moment and hope to share them soon!"
        type="Status:"
        stack="Currently in the works!"
        imgsrc=""
        platform="[UNKNOWN]"
      />
    </div>
  );
}

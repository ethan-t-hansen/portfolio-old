import { ProjectCard } from "../components/Exports";

export default function ProjectContainer() {
  return (
    <div className="proj-container">
      <ProjectCard
        title="U-Trition"
        desc="U-Trition aims to guide users towards making healthier daily dietary choices. 
          Searching and selecting a food item shows all nutritional stats per portion. Additionally,
          users are able to make their own recipes with aggregated nutrition stats for all ingredients
          in the dish."
        type="Stack:"
        stack="TypeScript, Next.js, React, Express, MongoDB Atlas"
        imgsrc="/u-trition.png"
        platform="GitHub"
      />
      <ProjectCard
        title="Workout Manager"
        desc="Workout Manager allows users to create their own customized workout plan to suit their exercise 
          goals. Functionality includes backend routing and fetch requests to the cloud for adding, deleting, 
          and viewing workouts, as well as user authentication with encryption."
        type="Stack:"
        stack="JavaScript, Node.js, React, Express, MongoDB Atlas"
        imgsrc=""
        platform="GitHub"
      />
      <ProjectCard
        title="Tic-Tac-Toe"
        desc="A simple Tic-Tac-Toe web application. This interactive game allows users to play the classic game 
          right in their web browser. The game logic, implemented using TypeScript, calculates winners, losers, and 
          ties based on the players' moves and the game state of the board. Additionally, the board can be reset at 
          the click of a button"
        type="Stack:"
        stack="TypeScript, Next.js, React"
        imgsrc=""
        platform="GitHub"
      />
      <ProjectCard
        title="Pomo-Timer"
        desc="The pomodoro technique is a study method proven to improve student productivity in long study sessions. 
          This 4 month object-oriented programming project involved the story boarding, system designing, class building, 
          and unit testing to create a user-friendly application to boost the efficacy of study sessions."
        type="Stack:"
        stack="Java, JUnit, Swing GUI"
        imgsrc=""
        platform="GitHub"
      />
    </div>
  );
}

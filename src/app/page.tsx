import Image from "next/image";
import { Selector, ProjectContainer } from "../components/Exports";

export default function Home() {
  return (
    <div className="page-wrap">
      <div className="main-bg">
        <div className="border-home">
          <div className="container-1">
            <div className="heading">Ethan Hansen</div>

            <h3 className="subheading">Development | Design | Data</h3>

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
                Student at the University of British Columbia - double major in
                business & computer science. Passionate about the intersection
                of these fields. Aiming to use a blend of design, data, and
                technology to inspire others and broaden horizons. Currently
                seeking software, analytics, and marketing internships to
                connect, learn, and gain unique experiences.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="work-bg">
        <div className="border-info">
          <div className="flex-container-center">
            <h1 className="page-title"> works </h1>
            <div>
              <Selector />
            </div>
          </div>
        </div>
      </div>
      <div className="exp-bg">
        <div className="border-info">
          <div className="flex-container-center">
            <h1 className="page-title"> experience </h1>
            <div>
              <div className="exp-section">
                <h1 className="exp-title"> SKILLS & COMPETENCIES </h1>
                <p className="p-text">
                  <b> Languages: </b> Java, Python, C++, R, SQL, JavaScript /
                  TypeScript, HTML, CSS
                </p>
                <p className="p-text">
                  <b> Software: </b> React, Node.js / Next.js, Swing, Express,
                  MongoDB, Git
                </p>
                <p className="p-text">
                  <b> Technical: </b> Adobe CC{" "}
                  {"(Photoshop,Illustrator, Animate, Premiere)"}, Figma, Excel
                </p>
              </div>
              <div className="exp-section">
                <h1 className="exp-title"> EDUCATION </h1>
                <p className="p-text">
                  <b>
                    {" "}
                    The University of British Columbia, Sauder School of
                    Business{" "}
                  </b>
                </p>
                <p className="p-text">
                  {" "}
                  <b> Program: </b> Combined Major in Business + Computer
                  Science{" "}
                </p>
                <p className="p-text">
                  {" "}
                  <b> Weighted GPA: </b> 89% {"(4.12/4.33)"}, Dean's Honour List
                </p>
              </div>
              <div className="exp-section">
                <h1 className="exp-title"> WORK EXPERIENCE </h1>
                <div className="exp-entry">
                  <p className="exp-text">
                    <b> Data Analytics Intern </b> - Ibbaka, Vancouver, BC
                  </p>
                  <p className="p-text">
                    • Facilitated and led scrum methodologies for
                    cross-functional teams and monitored project progress
                    through Jira, ensuring the effective delivery of
                    high-quality deliverables to clients within reasonable
                    timeframes. <br />
                    • Analyzed and wrangled data through pivot tables to
                    identify patterns, trends, and outliers in large client data
                    sets for Pacific Lake Partners, effectively communicating
                    findings through data-driven insights. <br />• Spearheaded
                    development of an Excel and PowerBI data model, factoring{" "}
                    {">"}150 variables in calculating optimal pricing strategies
                    for Accumulus Synergy and producing a feasible cost
                    reduction of 8% <br />
                    • Produced compelling and visually impactful designs to
                    effectively communicate complex data and insights in slide
                    decks, ensuring engagement and comprehension by large
                    stakeholder audiences. <br />
                  </p>
                </div>
                <div className="exp-entry">
                  <p className="exp-text">
                    <b> Business Analyst Intern </b> - MYND Therapeutics,
                    Vancouver, BC
                  </p>
                  <p className="p-text">
                    • Facilitated and led scrum methodologies for
                    cross-functional teams and monitored project progress
                    through Jira, ensuring the effective delivery of
                    high-quality deliverables to clients within reasonable
                    timeframes. <br />
                    • Analyzed and wrangled data through pivot tables to
                    identify patterns, trends, and outliers in large client data
                    sets for Pacific Lake Partners, effectively communicating
                    findings through data-driven insights. <br />• Spearheaded
                    development of an Excel and PowerBI data model, factoring{" "}
                    {">"}150 variables in calculating optimal pricing strategies
                    for Accumulus Synergy and producing a feasible cost
                    reduction of 8% <br />
                    • Produced compelling and visually impactful designs to
                    effectively communicate complex data and insights in slide
                    decks, ensuring engagement and comprehension by large
                    stakeholder audiences. <br />
                  </p>
                </div>

                <div className="exp-entry">
                  <p className="exp-text">
                    <b> Web Developer </b> - Garibaldi Capital Advisors,
                    Vancouver, BC
                  </p>
                  <p className="p-text">
                    • Collaborated with the team to aid the redesign of the
                    company website using Figma and Adobe Suite, creating
                    responsive wireframes that enhanced user experience and
                    facilitated seamless navigation. <br /> • Supported the
                    implementation of custom-designed website features by
                    efficiently coding and integrating them into the WordPress
                    platform using plugins and JavaScript, resulting in improved
                    functionality and enhanced user engagement. <br /> • Led the
                    successful execution of a comprehensive data migration plan
                    from the old website to the redesigned version, overseeing
                    data mapping, content reformatting, and data validation to
                    ensure accurate and seamless transfer of information. <br />
                    • Ensured data integrity and streamlined content management
                    processes by developing efficient data validation protocols
                    and implementing automated quality checks, resulting in a
                    smooth transition and minimal disruption to website
                    operations. <br /> • Collaborated closely with
                    cross-functional teams, including designers, developers, and
                    content creators, to maintain a cohesive and consistent
                    website design and functionality throughout the migration
                    process, ensuring a unified user experience across all
                    pages.
                  </p>
                </div>
              </div>

              <div className="exp-section">
                <h1 className="exp-title"> EXTRACURRICULAR EXPERIENCE </h1>
                <div className="exp-entry">
                  <p className="exp-text">
                    {" "}
                    <b> Director of Marketing & Design </b> - NSCC, Vancouver,
                    BC{" "}
                  </p>
                  <p className="p-text">
                    • Designed informative promotional material using Figma,
                    Photoshop & Illustrator to increase engagement and ensure
                    stable and open communication with attendees and
                    competitors. <br /> • Designed the UI / UX of NSCC’s website
                    in SquareSpace, designing new visual media. <br /> •
                    Strengthened website SEO through circulation of relevant
                    content and keywords around the site. <br /> • Led a highly
                    collaborative cross-functional team in the development and
                    design of an impactful sponsorship package, targeting
                    potential stakeholders for deals valued at $1000+. <br /> •
                    Implemented a large-scale campaign for our event through
                    various marketing channels including social media, search
                    engine optimization (SEO), and B2B through sponsorship
                    opportunities.
                  </p>
                </div>
                <div className="exp-entry">
                  <p className="exp-text">
                    {" "}
                    <b> IT Development Associate </b> - Commerce Undergraduate
                    Society, Vancouver, BC{" "}
                  </p>
                  <p className="p-text">
                    • Updated and maintained our large code base in TypeScript,
                    React, and Next.js, and managed deployment to Heroku,
                    ensuring accurate information, consistent design, and
                    functional integrations. <br /> • Implemented version
                    control using Git and GitHub to effectively manage code
                    changes and maintain an organized repository. <br /> •
                    Proactively handled a significant number of IT tickets
                    related to GSuite, new member registration, and website
                    updates. Documented progress and resolutions for each IT
                    ticket, ensuring a clear and accessible knowledge base for
                    future reference. <br /> • Demonstrated strong
                    problem-solving skills by quickly resolving technical issues
                    to minimize disruptions for organization members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

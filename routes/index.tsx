/** @jsx h */
import { h } from "preact";

import Skills from "../components/skills.tsx";
import Works from "../components/works.tsx";
import Line from "../components/line.tsx";
import Experience from "../components/experience.tsx";
import cv from "../utils/cv.json" assert { type: "json" };

export default function Home() {
  return (
    <div>
      <div class="wrapper">
        <div class="header">
          <div class="photo" style={{ display: "none" }}></div>
          <h1 class="quote">{cv.name}</h1>
          <h3>- {cv.subName} -</h3>
          <div class="links">
          {cv.links.map(({ title = "", url = "#", icon="fa fa-book" }) => (
               <a title={title} href={url}>
               <i class={icon}></i>
             </a>
            ))}
          
          </div>
        </div>
        <div class="side">
          <div class="photo"></div>
          <div class="info">
            <Line title={cv.info} />
            <p>{cv.age}</p>
            
            <p>{cv.mobile}</p>
            <p>
              {" "}
              <a href={`mailto:${cv.mail}`}>
                {cv.mailbox} <i class="fa fa-link"></i>
              </a>
            </p>
          </div>
          <div class="skills">
            {cv.skills.map(({ name = "", skill = [] }, index) => (
              <Skills key={index} data={{ name, skill }} />
            ))}

            <Line title={"Other"} />
            <p>Git</p>
            <p>Docker</p>
          </div>
        </div>
        <div class="content">
          <Line title={cv?.aboutMe[0]} />
          <p>{cv.aboutMe[1]}</p>

          <Line title={cv?.experiences?.title} />

          {cv.experiences.items.map((item, index) => (
            <Experience key={index} data={item} />
          ))}

          <Line title={"test3"} />
          {cv.works.map((item, index) => (
            <Works key={index} data={item} />
          ))}

          
        </div>
      </div>
    </div>
  );
}

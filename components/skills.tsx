/** @jsx h */
import { h } from "preact";
export default function Skill({ data: { name = "", skill = [] } }) {
  return (
    <div>
      <h2>{name}</h2>
      <div class="line"></div>
      {skill.map(({ name, percent }, index) => {
        const maxDivs = parseInt(percent / 10);
        const minDivs = 10 - maxDivs;

        return (
          <div key={`dv${index}`}>
            <p>
              {name} ［{percent}%］
            </p>
            {[...Array(maxDivs).keys()].map((_, index) => (
              <span key={index} class="box-ck"></span>
            ))}
            {[...Array(minDivs).keys()].map((_, index) => (
              <span key={index} class="box"></span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

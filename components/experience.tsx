/** @jsx h */
import { h } from "preact";

export default function Experience({
  data: { name = "", experience = [], icon = "fa fa-tv" },
}) {
  return (
    <div>
      <h3>
        <i class={icon}></i> {name}
      </h3>

      {experience.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

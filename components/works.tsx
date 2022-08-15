/** @jsx h */
import { h } from "preact";

export default function Works({
  data: { name = "", date = "", items = [], icon = "fa fa-tv" },
}) {
  return (
    <ul class="timeline">
      <div class="event" data-date={date}>
        <h3>{name}</h3>
      </div>
      {items.map(({ name = "", events = [] }, index) => (
        <div>
          {name && <h4 key={index}>{name}</h4>}
          {events.map(({ text = "", link }, index) =>
            link ? (
              <li key={index + 123}>
                <a target="_blank" href={link}>
                  {text}
                  <i class="fa fa-link"></i>
                </a>
              </li>
            ) : (
              <li key={index + 123}>{text}</li>
            )
          )}
        </div>
      ))}
    </ul>
  );
}

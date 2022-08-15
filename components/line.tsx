
/** @jsx h */
import { h } from "preact";

export default function Line({ title = "" }) {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <div class="line"></div>
        </div>
    )
}
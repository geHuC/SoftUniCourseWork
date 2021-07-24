import { html } from "./../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "./../../node_modules/lit-html/directives/if-defined.js"

export const tableRow = ({
    firstName,
    lastName,
    email,
    course,
    selected
}) => html`
<tr class="${ifDefined(selected)}">
    <td> ${firstName} ${lastName} </td>
    <td> ${email} </td>
    <td> ${course} </td>
</tr>`;

export const allRows = (data) => html` ${data.map(x => tableRow(x))} `;
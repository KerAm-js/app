import { WHITE } from "../../consts/colors";

export const commentCornerSvg = (
  color: string = WHITE
) => `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H14V14C14 14 14 8 10 4C6 0 0 0 0 0Z" fill="${color}"/>
</svg>

`;

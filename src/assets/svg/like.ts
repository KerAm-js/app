import { BLACK_DARK } from "../../consts/colors";

export const likeSvg = (
  color: string = BLACK_DARK
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99973 1.64256C15.5472 -4.05994 29.4172 5.91881 9.99973 18.7501C-9.41777 5.92006 4.45223 -4.05994 9.99973 1.64256Z" fill="${color}"/>
</svg>
`;

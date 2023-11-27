import { BLACK_DARK } from "../../consts/colors";

export const likeFillSvg = (
  color: string = BLACK_DARK, fillColor: string = 'none'
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="${fillColor}" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99973 2.64256C15.5472 -3.05994 29.4172 6.91881 9.99973 19.7501C-9.41777 6.92006 4.45223 -3.05994 9.99973 2.64256Z" fill="${color}"/>
</svg>
`;

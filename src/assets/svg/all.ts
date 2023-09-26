import { BLACK_DARK } from "../../consts/colors";

export const allSvg = (
  color: string = BLACK_DARK
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0C0.447715 0 0 0.447715 0 1V8C0 8.55229 0.447715 9 1 9H8C8.55229 9 9 8.55229 9 8V1C9 0.447715 8.55229 0 8 0H1Z" fill="black"/>
<path d="M1 11C0.447715 11 0 11.4477 0 12V19C0 19.5523 0.447715 20 1 20H8C8.55229 20 9 19.5523 9 19V12C9 11.4477 8.55229 11 8 11H1Z" fill="${color}"/>
<path d="M11 1C11 0.447715 11.4477 0 12 0H19C19.5523 0 20 0.447715 20 1V8C20 8.55229 19.5523 9 19 9H12C11.4477 9 11 8.55229 11 8V1Z" fill="${color}"/>
<path d="M12 11C11.4477 11 11 11.4477 11 12V19C11 19.5523 11.4477 20 12 20H19C19.5523 20 20 19.5523 20 19V12C20 11.4477 19.5523 11 19 11H12Z" fill="${color}"/>
</svg>`;

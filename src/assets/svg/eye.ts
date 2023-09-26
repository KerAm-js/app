import { BLACK_DARK } from "../../consts/colors";

export const eyeSvg = (
  color: string = BLACK_DARK
) => `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125C9.1712 13.125 8.37634 12.7958 7.79029 12.2097C7.20424 11.6237 6.875 10.8288 6.875 10C6.875 9.1712 7.20424 8.37634 7.79029 7.79029C8.37634 7.20424 9.1712 6.875 10 6.875C10.8288 6.875 11.6237 7.20424 12.2097 7.79029C12.7958 8.37634 13.125 9.1712 13.125 10Z" fill="${color}"/>
<path d="M0 10C0 10 3.75 3.125 10 3.125C16.25 3.125 20 10 20 10C20 10 16.25 16.875 10 16.875C3.75 16.875 0 10 0 10ZM10 14.375C11.1603 14.375 12.2731 13.9141 13.0936 13.0936C13.9141 12.2731 14.375 11.1603 14.375 10C14.375 8.83968 13.9141 7.72688 13.0936 6.90641C12.2731 6.08594 11.1603 5.625 10 5.625C8.83968 5.625 7.72688 6.08594 6.90641 6.90641C6.08594 7.72688 5.625 8.83968 5.625 10C5.625 11.1603 6.08594 12.2731 6.90641 13.0936C7.72688 13.9141 8.83968 14.375 10 14.375Z" fill="${color}"/>
</svg>`;

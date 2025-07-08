export const mapMarkerASvg = (
  color: string | undefined = "#FF3B30"
) => `<svg width="40" height="54" viewBox="0 0 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C31.0457 0 40 8.95431 40 20C40 23.153 39.2683 26.1346 37.9688 28.7871C32.8836 41.1128 20 54 20 54C20 54 7.11537 41.1129 2.03027 28.7871C0.730797 26.1347 0 23.1528 0 20C0 8.95431 8.95431 0 20 0Z" fill="${color}"/>
<circle cx="20" cy="20" r="15" fill="white"/>
<circle cx="20" cy="20" r="15" fill="${color}" fill-opacity="0.25"/>
<path d="M27.2823 27H23.9823L23.0583 24.228H16.9203L15.9963 27H12.7183L18.1083 11.6H21.8703L27.2823 27ZM20.0003 15.098L17.8883 21.39H22.1123L20.0003 15.098Z" fill="${color}"/>
</svg>
`;

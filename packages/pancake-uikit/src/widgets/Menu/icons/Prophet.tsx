import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" />
    // </Svg>

    <Svg {...props} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M619.242 33.37c-107.88 35.914-192.174 123.451-223.57 233.315 36.401 15.135 79.154.849 98.756-34.432 22.735-40.918 55.938-75.343 96.008-99.565 34.543-20.882 47.254-64.134 30.792-99.958l-1.986.642zm361.432 332.48c-85.04-75.469-202.997-104.7-313.84-76.959 5.095 39.091 38.842 68.973 79.197 68.31 46.803-.77 93.218 10.772 134.23 33.362 35.356 19.474 79.168 8.857 101.962-23.312l-1.55-1.399zm-107.22 479.251c22.837-111.383-10.826-228.15-90.27-310.272-31.309 23.957-40.313 68.124-19.56 102.74 24.068 40.149 37.28 86.115 38.223 132.928.812 40.355 31.913 72.99 71.17 76.646l.437-2.042zM404.8 991.871c107.879-35.913 192.171-123.45 223.568-233.314-36.4-15.134-79.153-.848-98.755 34.433-22.734 40.918-55.938 75.342-96.008 99.565-34.543 20.882-47.254 64.133-30.792 99.958l1.987-.642zM43.369 659.389c85.04 75.471 202.996 104.702 313.84 76.961-5.094-39.091-38.843-68.973-79.197-68.31-46.804.77-93.218-10.772-134.23-33.362-35.356-19.474-79.17-8.857-101.963 23.313l1.55 1.398zM150.59 180.14c-22.838 111.383 10.825 228.15 90.27 310.272 31.308-23.956 40.311-68.123 19.56-102.74-24.069-40.148-37.281-86.114-38.224-132.928-.812-40.355-31.912-72.99-71.17-76.645l-.435 2.041zM511.345 395.458c64.003 0 115.888 51.885 115.888 115.887s-51.885 115.888-115.888 115.888-115.887-51.885-115.887-115.888 51.885-115.887 115.887-115.887zm0 78.568c-20.61 0-37.32 16.708-37.32 37.32s16.71 37.319 37.32 37.319 37.32-16.709 37.32-37.32-16.709-37.32-37.32-37.32z" />
      <path d="M510.691 349.627q39.283 0 39.283 39.283v26.19q0 39.284-39.283 39.284-39.284 0-39.284-39.284v-26.19q0-39.283 39.284-39.283z" />
      <path d="M651.3100000000001 430.813q19.642 34.021-14.379 53.663l-22.68 13.095q-34.021 19.642-53.663-14.38-19.642-34.02 14.379-53.662l22.68-13.095q34.02-19.642 53.663 14.38z" />
      <path d="M651.31 593.186q-19.642 34.022-53.663 14.38l-22.68-13.095q-34.021-19.642-14.38-53.663 19.643-34.02 53.663-14.379l22.681 13.095q34.02 19.642 14.379 53.663z" />
      <path d="M510.69100000000003 674.373q-39.284 0-39.284-39.283V608.9q0-39.284 39.284-39.284 39.283 0 39.283 39.284v26.19q0 39.283-39.283 39.283z" />
      <path d="M370.071 593.187q-19.642-34.021 14.38-53.663l22.68-13.095q34.02-19.642 53.662 14.38 19.642 34.02-14.378 53.662l-22.681 13.095q-34.02 19.642-53.663-14.38z" />
      <path d="M370.071 430.814q19.642-34.022 53.663-14.38l22.68 13.095q34.021 19.642 14.38 53.663-19.642 34.02-53.663 14.379l-22.68-13.095q-34.022-19.642-14.38-53.663z" />
    </Svg>
  );
};

export default Icon;
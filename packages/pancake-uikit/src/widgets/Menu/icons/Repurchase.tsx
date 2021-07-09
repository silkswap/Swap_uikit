import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    //   <path
    //     d="M535.273 380.121H324.267c-9.31 0-15.515-6.206-15.515-15.515s6.206-15.515 15.515-15.515h211.006c9.309 0 15.515 6.206 15.515 15.515s-6.206 15.515-15.515 15.515zm-96.194 114.812H324.267c-9.31 0-15.515-6.206-15.515-15.515s6.206-15.515 15.515-15.515h114.812c9.309 0 15.515 6.206 15.515 15.515s-6.206 15.515-15.515 15.515z"
    //     fill="#fff"
    //   />
    //   <path
    //     d="M487.176 802.133H283.927c-27.927 0-51.2-20.17-51.2-44.994V259.103c0-24.824 23.273-44.994 51.2-44.994h408.049c27.927 0 51.2 20.17 51.2 44.994v248.242c0 9.31-6.206 15.516-15.515 15.516s-15.516-6.206-15.516-15.516V259.103c0-7.758-9.309-13.964-20.17-13.964H283.928c-10.86 0-20.17 6.206-20.17 13.964v498.036c0 7.758 9.31 13.964 20.17 13.964h204.8c9.31 0 15.515 6.206 15.515 15.515s-7.757 15.515-17.066 15.515z"
    //     fill="#fff"
    //   />
    //   <path
    //     d="M494.933 665.6h-1.551c-7.758-1.552-13.964-9.31-13.964-17.067 9.31-72.92 68.267-127.224 141.188-128.775 60.51-1.552 117.915 34.133 141.188 89.987 3.103 7.758 0 17.067-7.758 20.17-7.757 3.103-17.066 0-20.17-7.757-18.618-44.994-63.611-72.922-111.708-71.37-57.406 1.551-103.952 44.994-111.71 102.4 0 6.206-7.757 12.412-15.515 12.412zm131.88 148.945c-60.51 0-116.365-37.236-138.086-94.642-3.103-7.758 1.552-17.067 9.31-20.17 7.757-3.103 17.066 1.552 20.17 9.31 17.066 46.545 63.611 77.575 113.26 74.472 57.406-1.551 103.951-44.994 111.709-102.4 1.551-7.757 9.309-15.515 17.066-13.963 7.758 1.551 13.964 9.309 13.964 17.066-9.309 72.921-68.267 127.224-141.188 128.776-3.103 1.551-4.654 1.551-6.206 1.551z"
    //     fill="#fff"
    //   />
    //   <path
    //     d="M778.86 736.97c-6.205 0-10.86-3.103-13.963-9.31l-12.412-27.927-27.927 12.412c-7.758 3.103-17.067 0-20.17-7.757-3.103-7.758 0-17.067 7.757-20.17l41.891-18.618c7.758-3.103 17.067 0 20.17 7.758l18.618 41.89c3.103 7.758 0 17.067-7.757 20.17-1.552 1.552-3.103 1.552-6.206 1.552zm-285.478-66.715c-6.206 0-10.86-3.103-13.964-9.31l-20.17-41.89c-3.103-7.758 0-17.067 7.758-20.17 7.758-3.103 17.067 0 20.17 7.757l13.963 27.928 27.928-13.964c7.757-3.103 17.066 0 20.17 7.758 3.102 7.757 0 17.066-7.758 20.17l-41.891 20.169c-1.552 0-3.103 1.552-6.206 1.552z"
    //     fill="#fff"
    //   />
    // </Svg>

<Svg  viewBox="0 0 1024 1024" {...props}>
  <path d="M234.071415 404.205268c5.794341-22.677854 13.886439-44.65639 24.376195-65.635902 33.467317-67.534049 88.913171-123.779122 160.942829-157.246439L377.131707 90.91122C245.460293 152.051512 156.247415 272.733659 130.872195 409.000585l-66.335219 3.096976L193.810732 614.00039l110.292292-213.091902-70.031609 3.29678z m378.830048 386.22283c-22.577951 6.193951-45.555512 10.190049-68.932683 11.788487-75.226537 4.795317-151.651902-15.085268-216.788292-60.740683L270.036293 823.196098c118.784 83.418537 267.938341 100.302049 398.610731 54.147122l35.864976 55.945365L814.604488 720.296585l-239.566049 10.989269 37.863024 59.142244z m192.412098-613.001366l30.470244-59.042342-239.566049 10.989269 129.373659 201.902829 32.268487-62.339122c16.583805 16.384 31.669073 34.466341 44.656391 53.847414 41.75922 62.838634 62.838634 138.964293 55.745561 218.087025l99.502829 8.691512c12.787512-144.458927-47.153951-282.024585-152.451122-372.136585z"/>
</Svg>
  );
};

export default Icon;
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SolidzapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SolidzapIcon(props: SolidzapIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 79 79"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M69.06 38.848a3.276 3.276 0 00-2.43-2.538l-22.58-5.648 8.35-19.49a3.285 3.285 0 00-1.043-3.924 3.279 3.279 0 00-4.062.08L11.086 36.951a3.292 3.292 0 001.284 5.74l22.117 5.534-11.01 19.27a3.295 3.295 0 002.856 4.92 3.275 3.275 0 001.975-.658l39.5-29.625a3.291 3.291 0 001.251-3.285z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SolidzapIcon;
/* prettier-ignore-end */

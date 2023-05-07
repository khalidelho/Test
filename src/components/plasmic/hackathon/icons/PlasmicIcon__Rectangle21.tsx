// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle21Icon(props: Rectangle21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 393 588"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 28C0 12.536 12.536 0 28 0h337c15.464 0 28 12.536 28 28v527.372c0 17.158-15.291 30.28-32.25 27.675l-65.468-10.053a27.996 27.996 0 00-8.562.009l-87.443 13.629a39.994 39.994 0 01-17.308-1.108l-75.792-21.994a40 40 0 00-22.35.016l-47.986 13.998C17.921 582.772 0 569.332 0 550.665V28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle21Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CargasStationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CargasStationIcon(props: CargasStationIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 76 76"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M70.743 29.545l-6.333-3.167c-1.172-.57-2.628-.126-3.198 1.045-.602 1.204-.127 2.629 1.045 3.199l5.035 2.501v15.169l-11.875.031v-32.49c0-6.333-4.244-9.5-9.5-9.5H20.583c-5.256 0-9.5 3.167-9.5 9.5v51.459h-4.75a2.392 2.392 0 00-2.375 2.375 2.392 2.392 0 002.375 2.375h53.834a2.392 2.392 0 002.375-2.375 2.392 2.392 0 00-2.375-2.375h-4.75V53.073l14.25-.031a2.372 2.372 0 002.375-2.375v-19c0-.887-.507-1.71-1.299-2.122zM19 21.818c0-4.401 2.692-5.985 5.985-5.985h16.562c3.261 0 5.953 1.584 5.953 5.985v3.895c0 4.37-2.692 5.954-5.985 5.954h-16.53c-3.293 0-5.985-1.584-5.985-5.985v-3.864zm1.583 16.974h9.5a2.392 2.392 0 012.375 2.375 2.392 2.392 0 01-2.375 2.375h-9.5a2.392 2.392 0 01-2.375-2.375 2.392 2.392 0 012.375-2.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CargasStationIcon;
/* prettier-ignore-end */

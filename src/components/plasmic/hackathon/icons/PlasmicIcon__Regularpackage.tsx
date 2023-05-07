// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RegularpackageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RegularpackageIcon(props: RegularpackageIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 114"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M104.5 38c.046-.33.046-.667 0-.998v-.38a3.69 3.69 0 00-.332-.76 1.676 1.676 0 00-.238-.38l-.475-.617-.38-.285-.57-.427-42.75-23.75a4.75 4.75 0 00-4.75 0l-42.75 23.75-.428.332-.522.38c-.138.155-.25.332-.332.523-.153.136-.28.296-.38.474-.124.209-.22.432-.286.666a1.424 1.424 0 000 .474c-.326.282-.6.62-.807.998v38a4.75 4.75 0 002.47 4.132l42.75 23.751c.196.114.403.209.617.284h.475c.78.19 1.595.19 2.376 0h.474l.666-.284 42.749-23.75A4.752 4.752 0 00104.5 76V38zM57 56.383L24.035 38l13.11-7.22 32.443 18.525L57 56.383zm0-36.67L89.965 38l-10.64 5.938-32.443-18.573L57 19.713zM19 46.075l33.25 18.62v26.98L19 73.198V46.075zm42.75 45.6v-26.98L76 56.715V71.25l9.5-4.75V51.395l9.5-5.273v27.076L61.75 91.675z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RegularpackageIcon;
/* prettier-ignore-end */

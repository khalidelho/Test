// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ActionfingerprintIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ActionfingerprintIcon(props: ActionfingerprintIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 73"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M54.092 13.572a1.41 1.41 0 01-.698-.182c-5.83-3.006-10.87-4.281-16.913-4.281-6.012 0-11.72 1.427-16.912 4.281-.729.395-1.64.122-2.065-.607a1.537 1.537 0 01.608-2.065c5.647-3.066 11.841-4.645 18.37-4.645 6.467 0 12.114 1.427 18.308 4.615a1.487 1.487 0 01.638 2.034c-.273.547-.79.85-1.336.85zm-43.45 15.941c-.303 0-.607-.091-.88-.273-.699-.486-.85-1.427-.365-2.126 3.006-4.25 6.832-7.59 11.387-9.928 9.534-4.92 21.74-4.95 31.304-.03 4.555 2.337 8.38 5.647 11.386 9.867a1.52 1.52 0 01-.364 2.126c-.698.485-1.64.334-2.126-.365-2.732-3.825-6.194-6.831-10.293-8.926-8.714-4.464-19.857-4.464-28.541.03-4.13 2.125-7.59 5.162-10.323 8.987-.243.425-.699.638-1.185.638zM29.62 66.161a1.42 1.42 0 01-1.062-.455c-2.642-2.642-4.07-4.342-6.103-8.016-2.096-3.735-3.189-8.29-3.189-13.177 0-9.018 7.713-16.366 17.186-16.366 9.473 0 17.186 7.348 17.186 16.366 0 .85-.668 1.518-1.519 1.518-.85 0-1.518-.668-1.518-1.518 0-7.348-6.346-13.33-14.149-13.33-7.803 0-14.15 5.982-14.15 13.33 0 4.372.972 8.41 2.825 11.69 1.943 3.491 3.279 4.979 5.617 7.347a1.559 1.559 0 010 2.156 1.665 1.665 0 01-1.124.455zm21.77-5.617c-3.613 0-6.8-.91-9.412-2.702-4.524-3.067-7.226-8.046-7.226-13.33 0-.85.668-1.518 1.518-1.518s1.518.668 1.518 1.519c0 4.28 2.186 8.319 5.89 10.809 2.156 1.457 4.676 2.155 7.713 2.155.728 0 1.943-.09 3.157-.303.82-.152 1.61.395 1.762 1.245.151.82-.395 1.61-1.245 1.76-1.731.335-3.25.365-3.674.365zM45.288 66.8a1.79 1.79 0 01-.395-.06c-4.828-1.337-7.986-3.128-11.295-6.377-4.251-4.22-6.589-9.838-6.589-15.85 0-4.918 4.19-8.926 9.352-8.926s9.352 4.008 9.352 8.927c0 3.248 2.824 5.89 6.315 5.89 3.492 0 6.316-2.642 6.316-5.89 0-11.447-9.868-20.739-22.013-20.739-8.624 0-16.518 4.798-20.07 12.237-1.185 2.46-1.792 5.344-1.792 8.502 0 2.368.213 6.102 2.034 10.96.304.79-.09 1.67-.88 1.944a1.506 1.506 0 01-1.943-.88c-1.488-3.978-2.217-7.925-2.217-12.024 0-3.644.699-6.954 2.065-9.838 4.038-8.472 12.995-13.967 22.803-13.967 13.815 0 25.05 10.657 25.05 23.774 0 4.919-4.19 8.927-9.353 8.927-5.161 0-9.352-4.008-9.352-8.927 0-3.249-2.823-5.89-6.315-5.89-3.492 0-6.316 2.641-6.316 5.89 0 5.192 2.004 10.05 5.678 13.694 2.885 2.854 5.648 4.433 9.93 5.617.819.213 1.274 1.063 1.062 1.852a1.481 1.481 0 01-1.427 1.154z"
        }
        fill={"currentColor"}
        opacity={".1"}
      ></path>
    </svg>
  );
}

export default ActionfingerprintIcon;
/* prettier-ignore-end */
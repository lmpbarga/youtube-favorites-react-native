import { Image } from "native-base";
import React from "react";
import { CustomIconsPath, CustomIconsProps } from "./custom-icons-model";

const paths: CustomIconsPath = {
  "youtube-logo": require("../../../assets/youtube-logo.png"),
};

export const CustomIcons = ({
  name,
  alt = "alt",
  size = "xl",
  resizeMode = "contain",
}: CustomIconsProps) => {
  return (
    <Image source={paths[name]} alt={alt} size={size} resizeMode={resizeMode} />
  );
};

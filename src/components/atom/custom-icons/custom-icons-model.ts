import { ImageResizeMode, ImageSourcePropType } from "react-native";

export enum CustomIconsName {
  youtube_logo = "youtube-logo"
};

export type CustomIconsPath = {
  [key in CustomIconsName]: ImageSourcePropType;
};

export interface CustomIconsProps {
    name: CustomIconsName
    alt?: string
    size?: "xl" | "px" | "0" | "sm" | "md" | "lg" | "2xl"
    resizeMode?: ImageResizeMode
}

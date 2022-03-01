import { View } from "native-base";
import React from "react";

interface CustomViewProps {
  children: JSX.Element[] | JSX.Element;
  backgroundColor?: string;
}

export const CustomView = ({
  children,
  backgroundColor = "black",
}: CustomViewProps) => {
  return (
    <View backgroundColor={backgroundColor} display="flex" style={{ flex: 1 }}>
      {children}
    </View>
  );
};

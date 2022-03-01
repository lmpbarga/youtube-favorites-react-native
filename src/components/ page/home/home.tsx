import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { CustomView } from "../../atom/custom-view/custom-view";
import { Header } from "../../organism/header/header";

export const Home = () => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter((prev) => ++prev);
  };

  return (
    <CustomView>
      <Header />
    </CustomView>
  );
};

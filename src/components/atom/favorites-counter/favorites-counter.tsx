import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Text } from "native-base";
import React from "react";
import { FavoritesCounterProps } from "./favorites-counter-model";
import { FavoritesCounterContainer } from "./favorites-counter-styles";

export const FavoritesCounter = ({ quantity }: FavoritesCounterProps) => {
  return (
    <FavoritesCounterContainer>
      <Text color="white" marginRight={1}>
        {quantity}
      </Text>
      <Icon as={MaterialIcons} name="star" color="white" />
    </FavoritesCounterContainer>
  );
};

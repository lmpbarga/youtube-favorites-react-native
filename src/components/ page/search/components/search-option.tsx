import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text, View } from "native-base";
import React from "react";
import styled from "styled-components/native";
import { Routes } from "../../../../constants/routes";
import { searchStore } from "../../../../store/search";

interface SearchOptionProps {
  label: string;
}

const Seila = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchOption = ({ label }: SearchOptionProps) => {
  const navigation = useNavigation();

  return (
    <Button
      marginY={1}
      variant="ghost"
      justifyContent="flex-start"
      color="white"
      colorScheme="gray"
      onPress={() => {
        searchStore.setQuery(label);
        navigation.navigate(Routes.HOME as never);
      }}
    >
      <Seila>
        <Icon as={MaterialIcons} name="arrow-right" color="gray.400" />
        <Text>{label}</Text>
      </Seila>
    </Button>
  );
};

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { IconButton, Input } from "native-base";
import React, { useState } from "react";
import { CustomView } from "../../atom/custom-view/custom-view";
import { SizedBox } from "../../atom/sized-box/sized-box";

export const Search = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState("");

  const handleChange = (text: string) => setValue(text);

  const clearValue = () => setValue("");

  return (
    <CustomView backgroundColor="white">
      <SizedBox height={35} />
      <Input
        InputLeftElement={
          <IconButton
            size={"sm"}
            variant="ghost"
            colorScheme="gray"
            _icon={{
              as: MaterialIcons,
              name: "arrow-back",
              color: "gray.400",
            }}
            onPress={() => navigation.goBack()}
          />
        }
        InputRightElement={
          <IconButton
            size={"sm"}
            variant="ghost"
            colorScheme="gray"
            _icon={{
              as: MaterialIcons,
              name: "close",
              color: "gray.400",
            }}
            onPress={clearValue}
          />
        }
        value={value}
        onChangeText={handleChange}
      />
    </CustomView>
  );
};

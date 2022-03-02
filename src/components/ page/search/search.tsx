import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { IconButton, Input, Text, View } from "native-base";
import React, { Fragment, useEffect, useState } from "react";
import { useDynamicRequest } from "../../../hooks/useDynamicRequest";
import { api } from "../../../http/api";
import { CustomView } from "../../atom/custom-view/custom-view";
import { SizedBox } from "../../atom/sized-box/sized-box";
import { SearchOption } from "./components/search-option";

export const Search = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState("");

  const {
    loading,
    error,
    success,
    data: suggestions,
    tryAgain,
  } = useDynamicRequest(api.getSuggestedQueries, value);

  const handleChange = (text: string) => setValue(text);

  const clearValue = () => setValue("");

  useEffect(() => {
    tryAgain();
  }, [value]);

  const valueIsEmpty = value === "";

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
        marginX={2}
        value={value}
        onChangeText={handleChange}
        onEndEditing={() => console.log("akosdjiopajsidj")}
      />
      <View marginX={3}>
        {!valueIsEmpty && loading && <Text>LOADING</Text>}
        {!loading &&
          success &&
          suggestions[1].map((suggestion: string) => (
            <Fragment key={suggestion}>
              <SearchOption label={suggestion} />
            </Fragment>
          ))}
        {!loading && !valueIsEmpty && error && <Text>Error</Text>}
      </View>
    </CustomView>
  );
};

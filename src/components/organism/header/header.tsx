import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Divider, IconButton } from "native-base";
import React from "react";
import { Routes } from "../../../constants/routes";
import { CustomIcons } from "../../atom/custom-icons/custom-icons";
import { CustomIconsName } from "../../atom/custom-icons/custom-icons-model";
import { FavoritesCounter } from "../../atom/favorites-counter/favorites-counter";
import { SizedBox } from "../../atom/sized-box/sized-box";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderOption,
  HeaderOptionsContainer,
} from "./header-styles";

export const Header = () => {
  const navigation = useNavigation();

  return (
    <Box>
      <SizedBox height={30} />
      <HeaderContainer>
        <HeaderLogoContainer>
          <CustomIcons name={CustomIconsName.youtube_logo} />
        </HeaderLogoContainer>
        <HeaderOptionsContainer>
          <HeaderOption>
            <FavoritesCounter quantity={0} />
          </HeaderOption>
          <HeaderOption>
            <IconButton
              size={"sm"}
              variant="ghost"
              colorScheme="gray"
              _icon={{
                as: MaterialIcons,
                name: "search",
                color: "white",
              }}
              onPress={() => navigation.navigate(Routes.SEARCH as never)}
            />
          </HeaderOption>
        </HeaderOptionsContainer>
      </HeaderContainer>
      <Divider />
    </Box>
  );
};

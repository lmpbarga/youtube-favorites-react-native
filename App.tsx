import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
  Divider,
  Icon,
  Input,
  ScrollView,
  IconButton,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

function SearchBar() {
  return (
    <Input
      placeholder="Search People & asdPlaces"
      width="100%"
      borderRadius="4"
      py="3"
      px="1"
      fontSize="14"
      InputLeftElement={
        <IconButton colorScheme="red" size={20} variant="ghost" _icon={{
          as: MaterialIcons,
          name: "arrow-back"
        }} />
      }
      InputRightElement={
        <Icon
          m="2"
          mr="3"
          size="6"
          color="gray.400"
          as={<MaterialIcons name="mic" />}
        />
      }
    />
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack space={5} alignItems="center" marginTop={100}>
        <SearchBar />
        <NativeBaseIcon />
        <Heading size="lg">Welcome to NativeBase</Heading>
        <HStack space={2} alignItems="center">
          <Text>Edit</Text>
          <Code>App.tsx</Code>
          <Text>and save to reload.</Text>
        </HStack>
        <Link href="https://docs.nativebase.io" isExternal>
          <Text color="primary.500" underline fontSize={"xl"}>
            Learn NativeBase
          </Text>
        </Link>
        <ToggleDarkMode />
      </VStack>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

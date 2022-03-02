import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, View } from "native-base";
import React from "react";
import { Home } from "./src/components/ page/home/home";
import { Search } from "./src/components/ page/search/search";
import { Routes } from "./src/constants/routes";
import { searchStore } from "./src/store/search";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <View backgroundColor={"black"} display="flex" flex={1}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={Routes.HOME}
              component={() => <Home search={searchStore} />}
            />
            <Stack.Screen name={Routes.SEARCH} component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
};

export default App;

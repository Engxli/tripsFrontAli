import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./components/BottomNavigation";
import { default as theme } from "./theme.json"; // <-- Import app theme
import { LogBox } from "react-native";
import authStore from "./stores/authStore";
import Signin from "./components/auth/Signin";
import { observer } from "mobx-react";
import Signinup from "./components/auth/Signinup";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const APP = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      {authStore.user ? <AppNavigator /> : <Signinup />}
      {console.log(authStore.user)}
    </ApplicationProvider>
  </>
);

export default observer(APP);

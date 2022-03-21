import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from "@ui-kitten/components";
// screens
import ProfileScreen from "./Profile";
import Home from "./Home";
import TripCreate from "./TripCreate";
import Settings from "./Settings";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => <Icon name="home" {...props} />;
const SearchIcon = (props) => <Icon name="search" {...props} />;
const PluscircleoIcon = (props) => <Icon name="plus" {...props} />;
const MapIcon = (props) => <Icon name="map" {...props} />;
const UserIcon = (props) => <Icon name="person" {...props} />;
// const HomeIcon = (props) => <Icon name="home" {...props} />;

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    style={{ paddingBottom: "10%" }}
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" icon={HomeIcon} />
    <BottomNavigationTab title="ADD" icon={PluscircleoIcon} />
    <BottomNavigationTab title="PROFILE" icon={UserIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} options={{ headerShown: false }} />

    <Screen
      name="Create"
      component={TripCreate}
      options={{ headerShown: false }}
    />

    <Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Setting"
      component={Settings}
      options={{ headerShown: false }}
    />
    <Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    <Screen name="Signin" component={Signin} options={{ headerShown: false }} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

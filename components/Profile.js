import React from "react";
import {
  Layout,
  Text,
  Card,
  View,
  Divider,
  Avatar,
  Button,
} from "@ui-kitten/components";
import { Image, ScrollView } from "react-native";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { baseUrl } from "../stores/instance";
import Trip from "./Trip";

const Profile = ({ navigation }) => {
  const user = authStore.user;
  const profiles = profileStore.profiles;
  const trips = tripStore.trips;
  const profile = profiles.find((pro) => pro.User == user._id);
  const userTrips = trips.filter((trip) => trip.creater._id == user._id);
  const tripList = userTrips.map((trip) => <Trip trip={trip} />);

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Layout
        style={{
          flex: 1,
          marginTop: "10%",
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          source={{ uri: baseUrl + profile.image }}
        ></Image>
        <Text category="h6" style={{ marginBottom: 2 }}>
          {profile.name}
        </Text>
        <Text style={{ marginBottom: 2, width: "100%", marginRight: "auto" }}>
          {profile.bio}
        </Text>
        <Text style={{ fontWeight: "bold", marginTop: 3 }}>
          Total trips [ {userTrips.length} ]
        </Text>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: 5,
            height: 30,
            marginLeft: "auto",
          }}
          status="danger"
          appearance="outline"
          onPress={() => navigation.navigate("Setting", { profile })}
        >
          Settings
        </Button>
      </Layout>

      <Layout
        style={{
          flex: 2,
          width: "100%",
          marginTop: 30,
        }}
      >
        <Text
          category="h6"
          style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 5 }}
        >
          Trips
        </Text>
        <ScrollView
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          {tripList}
        </ScrollView>
      </Layout>
    </Layout>
  );
};

export default observer(Profile);

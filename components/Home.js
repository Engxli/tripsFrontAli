import React from "react";
import { Layout, Text, Card } from "@ui-kitten/components";
import { Image, ScrollView } from "react-native";
import tripStore from "../stores/tripStore";
import { observer } from "mobx-react";
import Trip from "./Trip";

const Home = () => {
  const trips = tripStore.trips;
  const tripList = trips.map((trip) => <Trip trip={trip} />);
  return (
    <Layout
      style={{
        flex: 2,
        width: "100%",
        paddingTop: "10%",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Text
        category="h5"
        style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 5 }}
      >
        All trips
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
  );
};

export default observer(Home);

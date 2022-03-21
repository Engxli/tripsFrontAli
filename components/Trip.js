import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Layout,
  Text,
  Card,
  Divider,
  Avatar,
  Button,
} from "@ui-kitten/components";
import { baseUrl } from "../stores/instance";
const Trip = ({ trip }) => {
  console.log(trip.image);
  return (
    <Card style={{ width: "100%", marginTop: 5 }}>
      <Layout style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{
            alignSelf: "flex-start",
            width: 70,
            height: 70,
          }}
          source={{ uri: baseUrl + trip.image }}
        ></Image>

        <Layout style={{ flex: 1 }}>
          <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
            {trip.title}
          </Text>

          <Text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
            }}
          >
            Created by: [ {trip.creater.username} ]
          </Text>
        </Layout>
      </Layout>
    </Card>
  );
};

export default Trip;

const styles = StyleSheet.create({});

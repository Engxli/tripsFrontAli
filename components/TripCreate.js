import React, { useState, useEffect } from "react";
import {
  Layout,
  Text,
  Card,
  Divider,
  Avatar,
  Button,
  Input,
} from "@ui-kitten/components";
import {
  Image,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const TripCreate = () => {
  const user = authStore.user;
  const [image1, setImage] = useState(null);
  const [tripCreate, setTripCreate] = useState({
    title: "",
    description: "",
    image: "",
  });
  tripCreate.image = image1;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Layout
        style={{
          flex: 1,
          paddingTop: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text category="h4" style={{ marginBottom: 10 }}>
          Create a trip
        </Text>
        <Pressable onPress={pickImage}>
          {image1 ? (
            <Image
              source={{
                uri: image1.includes("file") ? image1 : baseUrl + image1,
              }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          ) : (
            <Image
              source={require("../assets/imagePlaceholder.png")}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          )}
        </Pressable>
        <Input
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            marginTop: 10,
          }}
          placeholder="Trip Title"
          value={tripCreate.title}
          onChangeText={(nextValue) =>
            setTripCreate({ ...tripCreate, title: nextValue })
          }
        />
        <Input
          style={{ marginLeft: 10, marginRight: 10, marginBottom: 10 }}
          placeholder="Trip Details"
          multiline={true}
          textStyle={{ minHeight: 64 }}
          value={tripCreate.description}
          onChangeText={(nextValue) =>
            setTripCreate({ ...tripCreate, description: nextValue })
          }
        />

        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            width: "90%",
          }}
          status="danger"
          appearance="outline"
          onPress={() => tripStore.createTrip(user._id, tripCreate)}
        >
          Create
        </Button>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default TripCreate;

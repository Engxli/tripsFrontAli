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
import authStore from "../stores/authStore";
import { baseUrl } from "../stores/instance";
import profileStore from "../stores/profileStore";
import { observer } from "mobx-react";
const TripCreate = ({ route, navigation }) => {
  const { profile } = route.params;
  const [image1, setImage] = useState(profile.image);
  const [updateProfile, setUpdateProfile] = useState({
    name: profile.name,
    bio: profile.bio,
  });
  updateProfile.image = image1.uri;
  console.log(updateProfile);
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
          Edit your profile
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
          value={updateProfile.name}
          // value={value}
          onChangeText={(nextValue) =>
            setUpdateProfile({ ...updateProfile, name: nextValue })
          }
        />
        <Input
          style={{ marginLeft: 10, marginRight: 10, marginBottom: 10 }}
          value={updateProfile.bio}
          multiline={true}
          textStyle={{ minHeight: 64 }}
          // value={value}
          onChangeText={(t7rer) =>
            setUpdateProfile({ ...updateProfile, bio: t7rer })
          }
        />
        <Layout style={{ flex: 1, flexDirection: "row" }}>
          <Button
            style={{
              marginLeft: "auto",
              marginRight: 5,
              marginTop: 5,
              width: "45%",
              height: 30,
            }}
            status="danger"
            appearance="outline"
            onPress={() => {
              navigation.navigate("Profile");
              profileStore.updateProfile(profile._id, updateProfile, image1);
            }}
          >
            Update
          </Button>
        </Layout>

        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            width: "90%",
            marginBottom: 50,
          }}
          status="danger"
          appearance="outline"
          onPress={() => authStore.unSetUser()}
        >
          Logout
        </Button>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default observer(TripCreate);

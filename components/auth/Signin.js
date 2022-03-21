import React, { useState, useEffect } from "react";
import {
  Layout,
  Text,
  Card,
  Divider,
  Avatar,
  Button,
  Input,
  Icon,
} from "@ui-kitten/components";
import {
  Image,
  View,
  Platform,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import authStore from "../../stores/authStore";

const Signin = ({ setViewPage }) => {
  const [user, setUser] = React.useState({ username: "", password: "" });
  console.log(user);
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };
  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

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
        <Text category="h1" style={{ marginBottom: 10 }}>
          Signin
        </Text>
        <Input
          value={user.username}
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            marginTop: 10,
          }}
          onChangeText={(nextValue) =>
            setUser({ ...user, username: nextValue })
          }
          placeholder="Username"
          // value={value}
          // onChangeText={(nextValue) => setValue(nextValue)}
        />
        <Input
          value={user.password}
          placeholder="Password"
          caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) =>
            setUser({ ...user, password: nextValue })
          }
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            marginTop: 10,
          }}
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
          onPress={() => authStore.signin(user)}
        >
          Signin
        </Button>
        <Button
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            width: "90%",
          }}
          status="danger"
          appearance="outline"
          onPress={() => setViewPage(false)}
        >
          Not a user? Signup
        </Button>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default Signin;

const styles = StyleSheet.create({
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8F9BB3",
  },
});

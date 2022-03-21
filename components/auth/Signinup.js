import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./Signin";
import Signup from "./Signup";
import { Layout } from "@ui-kitten/components";
const Signinup = () => {
  const [viewPage, setViewPage] = useState(true);
  console.log(viewPage);
  return (
    <>
      {viewPage ? (
        <Signin setViewPage={setViewPage} />
      ) : (
        <Signup setViewPage={setViewPage} />
      )}
    </>
  );
};

export default Signinup;

const styles = StyleSheet.create({});

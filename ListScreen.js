/* 
The Header is from React Native Header View
- https://github.com/WrathChaos/react-native-header-view
The ListView is from Recycler List View --- THIS IS NOT YET WORKING ---
- https://github.com/Flipkart/recyclerlistview
*/

//import React from "react";
import GorgeousHeader from "react-native-gorgeous-header";
import RecycleTestComponent from "./RecyclerListView.js";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  TouchableHighlight,
} from "react-native";
import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DATA } from "./Data.js";

const { width, height } = Dimensions.get("screen");
const menuImage = require("./assets/menu.png");
const searchImage = require("./assets/search.png");
const plusImage = require("./assets/plus.jpg");
const ariImage = require("./assets/ari.jpeg");
DATA.push({
  key: "key1",
  image: ariImage,
  name: "Ari",
  gender: "Female",
  weight: "10lb",
  age: "10",
  description: "description1",
});

export default function ListScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <GorgeousHeader
          menuImageSource={menuImage}
          searchImageSource={searchImage}
          profileImageSource={plusImage}
          title="My Pets ❤️"
          subtitle="List of your pets"
          profileImageOnPress={() => {
            navigation.navigate("AddNewPet");
          }}
        />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              onPress={() => {
                {
                  navigation.navigate("ExamplePetProfile");
                }
              }}
            >
              <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.item_text_view}>
                  <Text style={styles.item_name}>{item.name}</Text>
                  <Text style={styles.item_text}>Gender: {item.gender}</Text>
                  <Text style={styles.item_text}>Weight: {item.weight}</Text>
                  <Text style={styles.item_text}>Age: {item.age}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").height * 0.4,
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "rgba(227, 253, 253, 0.1)",
  },
  item_text_view: {
    marginHorizontal: "10%",
  },
  item_text: {
    marginVertical: 4,
  },
  item_name: {
    fontSize: 30,
    alignSelf: "center",
    paddingBottom: 15,
  },
  image: {
    height: "100%",
    width: "50%",
    borderRadius: 50,
    alignSelf: "flex-start",
  },
});

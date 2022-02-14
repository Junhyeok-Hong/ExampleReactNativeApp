/* 
The Header is from React Native Header View
- https://github.com/WrathChaos/react-native-header-view
The ListView is from Recycler List View --- THIS IS NOT YET WORKING ---
- https://github.com/Flipkart/recyclerlistview
*/

import React from "react";
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
} from "react-native";

const { width, height } = Dimensions.get("screen");
const menuImage = require("./assets/menu.png");
const searchImage = require("./assets/search.png");
const plusImage = require("./assets/plus.jpg");
const ariImage = require("./assets/ari.jpeg");
const pet2Image = require("./assets/pug-2648774_1920.jpeg");
const pet3Image = require("./assets/domestic-dog_thumb_4x3.webp");
const DATA = [
  {
    key: "key1",
    image: ariImage,
    name: "Ari",
    gender: "Female",
    weight: "10lb",
    age: "10",
    description: "description1",
  },
  {
    key: "key2",
    image: pet2Image,
    name: "Flying Dog",
    gender: "Male",
    weight: "2000",
    age: "300",
    description: "description2",
  },
  {
    key: "key3",
    image: pet3Image,
    name: "Pug",
    gender: "Male",
    weight: "12",
    age: "6",
    description: "description3",
  },
];

export default function ListScreen() {
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
        />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.item_text_view}>
                <Text style={styles.item_name}>{item.name}</Text>
                <Text style={styles.item_text}>Gender: {item.gender}</Text>
                <Text style={styles.item_text}>Weight: {item.weight}</Text>
                <Text style={styles.item_text}>Age: {item.age}</Text>
              </View>
            </View>
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

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
} from "react-native";

const menuImage = require("./assets/menu.png");
const searchImage = require("./assets/search.png");
const plusImage = require("./assets/plus.jpg");

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
          data={[
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
            { image: menuImage },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
    borderWidth: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
  },
});

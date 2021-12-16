/* 
The Header is from React Native Header View
- https://github.com/WrathChaos/react-native-header-view
The ListView is from Recycler List View --- THIS IS NOT YET WORKING ---
- https://github.com/Flipkart/recyclerlistview
*/

import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";
import RecycleTestComponent from "./RecyclerListView.js";

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
      </SafeAreaView>
    </>
  );
}

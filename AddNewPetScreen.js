/* 
The Calendar is from react-native-calendars
- https://github.com/wix/react-native-calendars
Table is from react-native-paper
- https://github.com/callstack/react-native-paper
Flexbox is from react-native-easy-grid
- https://github.com/GeekyAnts/react-native-easy-grid#readme
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { DataTable } from "react-native-paper";

export default function AddNewPetScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("./assets/favicon.png")}
          />
        </View>

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Gender"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Birth Date"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <Calendar style={styles.calendarview}> </Calendar>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Animal / Breed"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Weight"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Table of Vaccination Data"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <DataTable style={styles.dataTableView}>
          <DataTable.Header>
            <DataTable.Title>Vaccination</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Location</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Vac1</DataTable.Cell>
            <DataTable.Cell>2022-01-01</DataTable.Cell>
            <DataTable.Cell>Oakville</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Vac2</DataTable.Cell>
            <DataTable.Cell>2021-12-31</DataTable.Cell>
            <DataTable.Cell>Vancouver</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Vac3</DataTable.Cell>
            <DataTable.Cell>2022-01-11</DataTable.Cell>
            <DataTable.Cell>Toronto</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Notes"
            placeholderTextColor="#003f5c"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.lineStyle} />

        <TouchableOpacity style={styles.doneBtn}>
          <Text style={styles.loginText}>DONE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    backgroundColor: "black",
  },

  imageView: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: "center",
    backgroundColor: "black",
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").height * 0.1,
    borderRadius: Math.round(
      (Dimensions.get("window").height + Dimensions.get("window").width) / 2
    ),
  },

  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  inputView: {
    backgroundColor: "#DCDCDC",
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  calendarview: {
    width: "70%",
    marginBottom: 20,
    alignSelf: "center",
  },

  lineStyle: {
    width: "90%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    margin: 10,
  },

  dataTableView: {
    width: "70%",
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "white",
  },

  doneBtn: {
    width: "70%",
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#D3D3D3",
  },
});

/* 
The Calendar is from react-native-calendars
- https://github.com/wix/react-native-calendars
Table is from react-native-paper
- https://github.com/callstack/react-native-paper
Flexbox is from react-native-easy-grid
- https://github.com/GeekyAnts/react-native-easy-grid#readme

Reference website:
- https://www.kindacode.com/article/how-to-implement-tables-in-react-native/
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
import { Col, Row, Grid } from "react-native-easy-grid";

export default function ExamplePetProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Grid>
        <Row size={10} style={styles.row1}>
          <Text style={styles.petName}> Ari </Text>
        </Row>
        <Row size={30} style={styles.row2}>
          <Col>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require("./assets/ari.jpeg")}
              />
            </View>
          </Col>
          <Col>
            <Row>
              <Text>Animal: Dog</Text>
            </Row>
            <Row>
              <Text>Breed: Maltese & Shih Tzu</Text>
            </Row>
            <Row>
              <Text>Gender: Female</Text>
            </Row>
            <Row>
              <Text>Weight: 10lb</Text>
            </Row>
            <Row>
              <Text>Age: 10</Text>
            </Row>
            <Row>
              <Text>Birth Date: 2012-08-01</Text>
            </Row>
          </Col>
        </Row>
        <Row size={3} style={styles.row3}>
          <Text style={styles.vacDescription}> Vaccination Record: </Text>
        </Row>
        <Row size={27} style={styles.row4}>
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
        </Row>
        <Row size={3} style={styles.row5}>
          <Text style={styles.noteDescription}> Notes: </Text>
        </Row>
        <Row size={22} style={styles.row6}>
          <View style={styles.inputView}>
            <TextInput
              multiline
              style={styles.TextInput}
              placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              placeholderTextColor="black"
              secureTextEntry={false}
            />
          </View>
        </Row>
        <Row size={5} style={styles.row7}>
          <TouchableOpacity style={styles.doneBtn}>
            <Text style={styles.loginText}>DONE</Text>
          </TouchableOpacity>
        </Row>
      </Grid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  row1: {
    backgroundColor: "white",
  },

  petName: {
    color: "black",
    fontSize: 36,
    alignSelf: "center",
    marginLeft: "40%",
    marginRight: "40%",
  },

  row2: {
    backgroundColor: "white",
  },

  imageView: {
    marginTop: "5%",
    alignSelf: "center",
    backgroundColor: "black",
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").height * 0.2,
    borderRadius: Math.round(
      (Dimensions.get("window").height + Dimensions.get("window").width) / 2
    ),
  },

  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  row3: {
    backgroundColor: "white",
  },

  row4: {
    backgroundColor: "white",
  },

  vacDescription: {
    color: "black",
    marginLeft: "10%",
  },

  dataTableView: {
    width: "80%",
    alignSelf: "center",
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  row5: {
    backgroundColor: "white",
  },

  noteDescription: {
    color: "black",
    marginLeft: "10%",
  },

  row6: {
    backgroundColor: "white",
  },

  row6: {
    backgroundColor: "white",
  },

  inputView: {
    backgroundColor: "#DCDCDC",
    width: "80%",
    alignSelf: "center",
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  doneBtn: {
    width: "50%",
    alignSelf: "center",
    marginLeft: "25%",
    marginRight: "25%",
    backgroundColor: "black",
    borderRadius: 50,
  },

  loginText: {
    color: "white",
    alignSelf: "center",
  },
});

import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

function App(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
      </View>
      <View style={styles.center_view_container}>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
        <Text>HELLO WORD</Text>
      </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  upper_view_container: {
    flex:1,
    backgroundColor : 'red',
    padding:10,
    borderRadius:5,
  },
  center_view_container: {
    flex:1,
    backgroundColor : 'blue',
    padding:10,
    borderRadius:5,
  },
  bottom_view_container: {
    flex:1,
    backgroundColor : 'green',
    padding:10,
    borderRadius:5,
  },
});
export default App;
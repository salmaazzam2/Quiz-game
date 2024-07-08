import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from "@react-navigation/native";

const Score = ( {navigation, route} ) => {

  const correctAnswers = route.params.numCorrectAnswers;
  const wrongAnswers = 10 - correctAnswers;
  const score = correctAnswers * 10 ; 

  return (
    <SafeAreaView style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style = {styles.container}>  
        <Text style = {styles.textResults}>Results</Text>
        <Text style = {styles.text}>Correct answers: {correctAnswers} </Text>
        <Text style = {styles.text}> Wrong answers: {wrongAnswers}</Text>
        <Text style = {styles.text}> Score: {score} </Text>
        </View>

      <Pressable onPress = {() => {
        navigation.navigate("Home")
      }}>
        <CustomButton text="Play Again" bg= "hsl(226, 83%, 70%)" />
      </Pressable>
    </SafeAreaView>
  )
}

export default Score

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'hsl(226, 83%, 70%)', 
    padding: 30, 
    width: 350, 
    borderRadius: 20, 



  }, 

  textResults: {
    fontSize: 39, 
    fontWeight: 'bold', 
    fontFamily: Platform.OS !== "ios" ? 'sans-serif' : "Cochin", 
  }, 
  text: {
    fontSize: 30, 
    fontFamily: Platform.OS !== "ios" ? 'sans-serif' : "Cochin",
    marginTop: 10, 

  }
})
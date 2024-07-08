import { StyleSheet, Text, Platform, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const windowHeight = Dimensions.get('window').height; 
const windowWidth = Dimensions.get('window').width;

const Answer = ({text, correct, bg, selected}) => {
    const [bgColor, setBgColor] = useState('hsl(278, 36%,78%)')
 
   useEffect(() => {
    setBgColor('hsl(278, 36%,78%)')
   }, [text])

   function allActions() {
    correct ? setBgColor('hsl(120, 61%, 34%)') : setBgColor('hsl(10, 85%, 55%)');
   }
  return (
    
  <TouchableOpacity style={[styles.button, {backgroundColor: bgColor}]}  onPress = {() => {allActions()}} disabled = {selected} > 
  <Text adjustsFontSizeToFit = {true} numberOfLines={2} style={styles.text}>{text}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 350, 
    height: windowHeight * 0.07,
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: windowHeight * 0.02, 
    borderRadius: 10, 
}, 
text: {
    textAlign: "center", 
    fontFamily: Platform.OS !== "ios" ? "sans-serif" : "Cochin", 
    fontSize: 30,
    padding: 5, 
    color: '#19292e'
},

})

export default Answer
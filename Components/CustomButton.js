import { StyleSheet, Text, Platform, Dimensions} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const windowHeight = Dimensions.get('window').height; 

const CustomButton = ({text, bg}) => {
  return (
   <TouchableOpacity style={[styles.button, {backgroundColor: bg}]}> 
    <Text adjustsFontSizeToFit = {true} style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    button: {
        width: 350, 
        height: windowHeight * 0.07,
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 25, 
        borderRadius: 10, 
    }, 
    text: {
        textAlign: "center", 
        fontFamily: Platform.OS !== "ios" ? "sans-serif" : "Cochin", 
        fontSize:35,
        padding: 5, 
        color: '#19292e'

    },

})

export default CustomButton
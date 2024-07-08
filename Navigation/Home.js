import { StyleSheet, Text, View, Image, Pressable, Platform} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homePageContainer}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gpDGkul4kz7YIZ1KQgxQGDjt-bnrYJ1xXg&s",
        }}
        style={styles.homeImage}
      />
      <Text style={styles.text}>Pick difficulty:</Text>
      <View style={styles.buttons}>
        <Pressable
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Quiz", {
              url: "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple&encode=url3986"
            });
          }}
        >
          <CustomButton text="Easy" bg="hsl(278, 36%,78%)" />
        </Pressable>

        <Pressable
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Quiz", {
              url: "https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple&encode=url3986"
            });
          }}
        >
          <CustomButton text="Medium" bg="hsl(278, 36%,78%)" />
        </Pressable>

        <Pressable
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Quiz", {
              url: "https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple&encode=url3986"
            });
          }}
        >
          <CustomButton text="Hard" bg="hsl(278, 36%,78%)" />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Quiz", {
            url: "https://opentdb.com/api.php?amount=50&type=multiple&encode=url3986"
          })}
          style={{ marginTop: 30 }}
        >
          <CustomButton text="Start Now" bg="hsl(226, 83%, 70%)" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homePageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  homeImage: {
    marginVertical: 10,
    width: "95%",
    height: 200,
  },
  text: {
    fontFamily: Platform.OS !== "ios" ? 'sans-serif' : "Cochin",
    fontSize: 40,
    paddingTop: 55,
    paddingBottom: 20,
    color: "hsl(338, 93%, 45%)",
  },
  
});

export default Home;

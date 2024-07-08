import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Platform, 
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import CustomButton from "../Components/CustomButton";
import { BlurView } from "expo-blur";
import Answer from "../Components/Answer";

const windowHeight = Dimensions.get('window').height;

const Quiz = ({ navigation, route }) => {
  const urlUsed = route.params.url;
  const [index, setIndex] = useState(1);
  const arrayRef = useRef([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [restarted, setRestarted] = useState(false);

  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [selected0, setSelected0] = useState(false)
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)


  const image = {
    uri: "https://cdnb.artstation.com/p/assets/images/images/022/323/513/large/mario-aceituno-fondo-pantalla-quiz.jpg?1574978636",
  };
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  async function fetchQuiz() {
    const array = [];
    //console.log(urlUsed)
    const url = urlUsed;

    const response = await fetch(url);
    const json = await response.json();
    const jsonResults = json.results;
    const arr = jsonResults.map((result) => {
      const question = decodeURIComponent(result.question);
      const correctAnswer = decodeURIComponent(result.correct_answer);
      const wrongAnswers = [...result.incorrect_answers];
      const allAnswersFormated = [correctAnswer];
      wrongAnswers.map((wrongAnswer) => {
        allAnswersFormated.push(decodeURIComponent(wrongAnswer));
      });
      const shuffledAnswers = shuffle(allAnswersFormated);
      const formattedQuestion = [question, shuffledAnswers, correctAnswer];
      array.push(formattedQuestion);
    });

    arrayRef.current = array;

    setIsLoading(false);
  }

  useEffect(() => {
    fetchQuiz();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setData(arrayRef.current[index]);
    }
  }, [index, isLoading, restarted]);

  function buttonClicked(i) {
   // console.log("Value", data[1][i]);
    //console.log("correct answer", arrayRef.current[index][2]);
    //console.log("selected before", selected)
    if (data[1][i] === arrayRef.current[index][2]) {
      setNumberOfCorrectAnswers((s) => s + 1);
    }
    //console.log(score);
    switch(i) {
      case 0:
              setSelected2(true)
              setSelected3(true)
              setSelected1(true)
              break;
      case 1: 
              setSelected2(true)
              setSelected3(true)
              setSelected0(true)
              break;
      case 2: 
              setSelected1(true)
              setSelected3(true)
              setSelected0(true)
              break;
      case 3: 
              setSelected2(true)
              setSelected1(true)
              setSelected0(true)
              break;
   
    }
   
  }
  useEffect(() => {
          setSelected0(false)
          setSelected1(false)
          setSelected2(false)
          setSelected3(false)
  }, [index])


  // correct answer: console.log(arrayRef.current[index][2])
  return (
    <View style={styles.quizContainer}>
        {index <= 10 && (
          <>
            <BlurView intensity={15} style={styles.questionView}>
              <Text style={styles.questionText}>
                Q.{index} {data[0]}
              </Text>
            </BlurView>
            <View style={styles.buttons}>
              {data && data[1] && data[2] && (
                <View style={styles.answerView}>
                  <Pressable onPress = {() => buttonClicked(0)} 
                  >
                    <Answer
                      text= {data[1][0]}
                      correct={data[1][0] === data[2]}
                      selected = {selected0}
                    />
                  </Pressable>
                  <Pressable onPress = {() => buttonClicked(1)}
                  >
                    <Answer
                      text={data[1][1]}
                      correct={data[1][1] === data[2]}
                      selected = {selected1}
                    />
                  </Pressable>
                  <Pressable onPress = {() => buttonClicked(2)}
                  >
                    <Answer
                      text={data[1][2]}
                      correct={data[1][2] === data[2]}
                      selected = {selected2}
                    />
                  </Pressable>
                  <Pressable onPress = {() => buttonClicked(3)} 
                  >
                    <Answer
                      text={data[1][3]}
                      correct={data[1][3] === data[2]}
                      selected = {selected3}
                    />
                  </Pressable>
                </View>
              )}
              <Pressable onPress={() => setIndex((i) => i + 1)}>
                <CustomButton text="Next question" bg="hsl(226, 83%, 70%)" />
              </Pressable>
            </View>
          </>
        )}
        {index > 10 && (
          <View style={styles.endGameView}>
            <Pressable
              onPress={() =>
                navigation.navigate("Score", {
                  numCorrectAnswers: numberOfCorrectAnswers
                }) && index == 20
                  ? setIndex(0)
                  : setIndex((i) => i + 1) && setRestarted(true)
              }
              style={{ alignItems: "center" }}
            >
              <CustomButton text="End Game" bg="hsl(226, 83%, 70%)" />
            </Pressable>
          </View>
        )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  quizContainer: {
    display: "flex",
    height: "100%",
    backgroundColor: 'hsl(45, 29%, 97%)', 
  },

  questionView: {
    marginTop: windowHeight * 0.04,
    padding: 20,
    
  },
  buttons: {
    display: "flex",
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    color: '#19292e', 
    fontSize: windowHeight * 0.04,
    fontFamily: Platform.OS !== "ios" ? 'sans-serif' : "Cochin",
    fontWeight: "bold",
  },
  answerView: {
    marginTop: 10, 
   
  }, 
  endGameView: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    height: '100%',
  }
});

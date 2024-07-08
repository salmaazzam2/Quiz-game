import { createStackNavigator } from "@react-navigation/stack";
import Quiz from "./Quiz";
import Home from "./Home";
import Score from "./Score";

const Stack = createStackNavigator();

function MyStack() {
  return (
  
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Score"
          component={Score}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}

export default MyStack;

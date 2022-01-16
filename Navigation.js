import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./App";
import Home from "./Home";
import Reminders from "./Reminders";
import Planner from "./Planner";
import NotPlanner from "./NotPlanner";
import Expenses from "./Expenses";
import Meters from "./Meters";
import AddReminder from "./AddReminder";
import PlannerAdder from "./PlannerAdder";
import NotPlannerAdder from "./NotPlannerAdder";
import Tips from "./Tips";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={App} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Przypomnienia" component={Reminders} />
        <Stack.Screen name="Planer" component={Planner} />
        <Stack.Screen name="NiePlaner" component={NotPlanner} />
        <Stack.Screen name="Wydatki" component={Expenses} />
        <Stack.Screen name="Porady" component={Tips} />
        <Stack.Screen name="Liczniki" component={Meters} />
        <Stack.Screen name="Dodaj przypomnienie" component={AddReminder} />
        <Stack.Screen name="Dodaj todo" component={PlannerAdder} />
        <Stack.Screen name="Dodaj nietodo" component={NotPlannerAdder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../view/Home/Home";
import Skills from "../view/Skills/Skills";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* Para adicionar outra rota, descomente ou adicione abaixo: */}
      <Stack.Screen name="Skills" component={Skills} />
    </Stack.Navigator>
  );
}

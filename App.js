import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Controller from './src/Screens/Controller';
import Home from './src/Screens/Home';
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{ header: () => null }} />
        <Stack.Screen
          name="controller"
          component={Controller}
          options={{
            headerTitle: "Controller", headerRight: () => (
              <TouchableOpacity>
                <Text style={{ color: "gray" }}>Tutorial</Text>
              </TouchableOpacity>
            )
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
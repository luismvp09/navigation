import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => navigation.navigate("Detalle")}
      />
    </View>
  );
};

const DetalleScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>DetalleScreen</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};


const AppNavigator = createNativeStackNavigator();

const CreateNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="Home">
        <AppNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
            <Button
              onPress={() => alert('soy un btn')}
              title="soy btn"
              color="#f4511e"
            />
          )
          }}
        />
        <AppNavigator.Screen name="Detalle" component={DetalleScreen} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};
export default CreateNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

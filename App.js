import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/home';
import listRecipeCategory from './pages/listRecipecategories';
import listRecipeSubCat from './pages/listRecipeSubCat.js';
import Deets from './pages/deets.js';

import Receptai from './Receptai.json';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipes" component={listRecipeCategory} />
        <Stack.Screen name="SubRecipes" component={listRecipeSubCat} />
        <Stack.Screen name="Deets" component={Deets}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Receptai from '../Receptai.json';

import listRecipeSubCategory from './listRecipeSubCat.js';
import HomeScreen from './home.js';



function RecipesScreen({navigation}) {
    /* 2. Get the param */

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Recipes Screen</Text>
        <View style={styles.container}>
            {Object.keys(Receptai).map((item)=>(
                <View>
                    <Button title={item} onPress={()=>navigation.navigate('SubRecipes', { kategorija: item })}/>
                </View>
            ))}
        </View>

        <Button title="Go to Home" onPress={() => navigation.navigate('Home', {HomeScreen})} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default RecipesScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
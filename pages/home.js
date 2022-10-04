import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ListRecipeCategories} from './listRecipecategories.js';


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Recipes"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Recipes', {ListRecipeCategories});
          }}
        />
      </View>
    );
  }

  export default HomeScreen
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Receptai from '../Receptai.json';

import HomeScreen from './home.js';


function ListScreen ({navigation, route}) {


      const {receptas} = route.params;

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}>
              <View>
                <Button title='Comment' onPress={()=> navigation.navigate('Comments', 
                {itemname: route.params.itemname})}/>
              </View>

              <Text>
            {route.params.itemname.paruosimas}
            {route.params.itemname.ingridientai}
            
          </Text>
          </View>

          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home', {HomeScreen})}
          />
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
          />
      </View>
      );
    }
  
export default ListScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
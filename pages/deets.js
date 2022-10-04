import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receptai from '../Receptai.json';

import HomeScreen from './home.js';



function DeetsScreen({navigation, route}){



    const {receptas} = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <View style={styles.container}>
          {Receptai[receptas].map((item)=>(
            <View>
              <Button title={item.name}/>
            </View>
          ))}

        </View> */}
        <Text>
          RecipesSubScreen {route.params.itemname.paruosimas}
        </Text>
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
  
    export default DeetsScreen
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });



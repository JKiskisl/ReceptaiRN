import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, Input, FlatList, SafeAreaView, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receptai from '../Receptai.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import CommentCard from './CommentCard';


function DeetsScreen({navigation, route}){

    const storageKey = 'storageKey_' + route.params.itemname.id;
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [initialElements, setInitialElements] = useState([]);
    const [retrieve, setRetrieve] = useState(true);
    console.log(route.params.itemname.paruosimas);
    console.log(route.params.itemname.ingridientai);

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const valueString = await AsyncStorage.getItem(storageKey);
                const value = JSON.parse(valueString);
                console.log('retrieve: ', valueString);
                value === null ? setInitialElements([]) : setInitialElements(value);
            } catch (error) {
                console.log(error);
            }
        }
        if (retrieve)
            retrieveData();
        setRetrieve(false);
    }, [retrieve])


    const saveData = async (user, comment, time) => {
        try {
            console.log('user: ', user);
            const newObj = {
                id: uuid.v4(),
                user: user,
                comment: comment,
                time: time
            }
            const jsonValue = JSON.stringify([...initialElements, newObj]);
            await AsyncStorage.setItem(storageKey, jsonValue);
            setInitialElements(JSON.parse(jsonValue));
            console.log('New comment saved.');
        } catch (e) {
            console.log('Could not save comment. ' + e);
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(storageKey);
            console.log('Get data: ', jsonValue);
            setInitialElements(JSON.parse(jsonValue));
        } catch (e) {
            console.log('Could not get comments. ' + e);
        }
    }

    const deleteComment = async (commentId) => {
        try{
            const jsonValue = await AsyncStorage.getItem(storageKey);
            const commentArray = JSON.parse(jsonValue);
            const alteredComments = commentArray.filter(function(e){ return e.id !== commentId });
            const newJsonValue = JSON.stringify(alteredComments);
            await AsyncStorage.setItem(storageKey, newJsonValue);
            setInitialElements(JSON.parse(newJsonValue));
            console.log('Comment deleted.');
        }
        catch(e){
            console.log('Could not delete comment. ' + e)
        }
    }

    const clearAll = async () => {
        try {
            await AsyncStorage.clear();
            const emptyArray = [];
            setInitialElements(emptyArray);
        } catch (e) {
            console.log('Could not clear all comments. ' + e);
        }
    }

    return (
        <SafeAreaView>



            <View style={styles.comments}>
                <FlatList
                    data={initialElements}
                    scrollEnabled={true}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <CommentCard commentData={item} deleteEvent={() => { deleteComment(item.id) }} />
                            </View>
                        )
                    }
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.container}>
                <Text>{route.params.paruosimas}</Text>
                <Text>{route.params.ingridientai}</Text>
            </View>

            <View style={styles.newComment}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    defaultValue={user}
                    onChangeText={(value) => setUser(value)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Comment"
                    defaultValue={comment}
                    onChangeText={(value) => setComment(value)}
                />
                <Button title="Add comment" onPress={() => saveData(user, comment, Date())} color='dodgerblue' />
                {/*<Button title="Read data" onPress={() => getData()} />*/}
                {/*<Button
                    title="Delete all comments"
                    style={{ alignSelf: 'center', marginTop: 10 }}
                    onPress={() => clearAll()}
                />*/}
            </View>
        </SafeAreaView>
    )
 }
  
    export default DeetsScreen
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      comments: {
        height: '80%'
    },
    newComment: {
        height: '20%',
    },
    textInput: {
        height: 40,
        padding: 10,
        backgroundColor: 'white',
    }
    });



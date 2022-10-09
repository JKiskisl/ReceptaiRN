import React from "react";
import { StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const CommentCard = ({ commentData, deleteEvent }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textArea}>
                <Text style={styles.time}>{commentData.time}</Text>
                <Text style={styles.username}>{commentData.user}</Text>
                <Text style={styles.comment}>{commentData.comment}</Text>
            </View>
            <View style={styles.buttonArea}>
                <TouchableOpacity onPress={deleteEvent} style={styles.button}>
                    <Text style={styles.buttonText}>Delete comment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 5,
        padding: 5,
    },
    username: {
        fontSize: 20
    },
    time: {
        fontSize: 15,
        color: 'grey',
    },
    comment: {
        fontSize: 15,
    },
    textArea: {
        flex: 8,
    },
    buttonArea: {
        flex: 2,
        flexWrap: 'wrap',
        padding: 5
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        
        color: 'white',
        fontWeight: 'bold',
    }
});

export default CommentCard;
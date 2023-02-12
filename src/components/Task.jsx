import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function Task({ item, deleteItem }) { //receber via props item e delete
    const[check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    };

    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity onPress={handleCheck}>
                <Image style={styles.checkCircle} source={require("../assets/circle.png")} />
            </TouchableOpacity>
            <View>
                <Text style={styles.taskTitle}>{item.value}</Text>
            </View>
            <TouchableOpacity>
                <Image style={styles.trashImage} source={require("../assets/trash.png")} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        backgroundColor: '#23395d',
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center',
    },
    checkCircle: {
        width: 25,
        height: 25,
    },
    taskTitle: {
        color: 'white',
        fontSize: 16,
        minWidth: 180,
        maxWidth: 180,
        paddingHorizontal: 15,
    },
    trashImage: {
        width: 25,
        height: 25,
    },
})
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function Task({ item, deleteItem }) {
    const[check, setCheck] = useState(false);
    console.log(item.item);

    const handleCheck = () => {
        setCheck(!check);
    };

    const handleDelete = () => {
        deleteItem(item.item.key);
    };
    
    return (
        <View style={[styles.taskContainer, {backgroundColor: check === false ? "#23395d" : "green" }]}>
            <TouchableOpacity onPress={handleCheck}>
                <Image style={styles.iconImage} source={check === false ? require("../assets/circle.png") : require("../assets/check_circle.png")} />
            </TouchableOpacity>
            <View>
                <Text style={styles.taskTitle}>
                    {item.item.task}
                </Text>
            </View>
            <TouchableOpacity onPress={handleDelete}>
                <Image style={styles.iconImage} source={require("../assets/trash.png")} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    taskContainer: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    iconImage: {
        width: 25,
        height: 25,
    },
    taskTitle: {
        color: "white",
        textAlign: 'center',
        fontSize: 16,
        minWidth: 180,
        maxWidth: 180,
        paddingHorizontal: 15,
    },
})
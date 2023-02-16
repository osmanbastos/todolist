import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'

export default function Input({ submitHandler }) {
    const [text, setText] = useState("");

    const onChangeText = (text) => {
        setText(text);
    };

    const handleSubmit = () => {
        submitHandler(text);
        setText("");
        Keyboard.dismiss();
    };

    return (
        <View>
            <View>
                <TextInput
                    placeholder = "Adicione sua tarefa"
                    placeholderTextColor="#bbbb"
                    value={text}
                    onChangeText={onChangeText}
                    style={styles.input}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Adicionar
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        width: 200,
        color: 'white',
        borderWidth: 1,
        borderColor: '#bbb',
        paddingVertical: 8,
        paddingHorizontal: 15,
        textAlign: 'center',
    },
    button: {
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        paddingVertical: 15,
        marginTop: 25,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})
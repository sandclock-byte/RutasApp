import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableOpacityProps, StyleProp } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<TouchableOpacityProps>;
}

export const BlackButton = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={{
                ...style as any,
                ...styles.blackButton,
            }}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    blackButton: {
        height: 45,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 6,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
    }

});
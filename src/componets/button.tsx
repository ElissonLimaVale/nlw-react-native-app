import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../colors';

interface buttonProps {
    children: string;
}
export function Button (props: buttonProps) {
    return (
        <Text 
            style={styles.button}
        >
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 18,
        backgroundColor: colors.green,
        color: colors.write,
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 24
    }
});
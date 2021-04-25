import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../colors';
interface props {
    children: string;
}
export function Title (props: props) {
    return(
        <Text style={style.text}>
            {props.children}
        </Text>
    );
}

const style = StyleSheet.create({
    text: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 28,
        paddingHorizontal: 20
    }
});
import React from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../colors';
import { Button } from '../componets/button';
import { Title } from '../componets/title';
import homeImg from '../image/home.png';
import logoSocial from '../image/logoSocial.png';

export function Welcome() {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={homeImg} style={styles.imageHeader}/>

            <Title>
                Seja Bem Vindo!
            </Title>

            <Image source={logoSocial} style={styles.imageBody}/>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Button>Next</Button>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    imageHeader: {
        width: 80,
        height: 80,
        position: 'absolute',
        top: 30,
        right: 10
    },
    imageBody: {
        width: 300,
        height: 300
    },
    footer: {
        position: 'absolute',
        width: 400,
        bottom: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
});
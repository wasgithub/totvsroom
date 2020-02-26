import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import images from '../../assets/images';
import { Button } from 'react-native-paper';

const BemVindo = props => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <View style={{...styles.topo, ...styles.centered}}>
                <Image
                    style={styles.logo} 
                    source={images.login.logoBlack}/>
                <Text style={styles.bemVindo}>Bem Vindo</Text>
            </View>
            <View style={{...styles.body, ...styles.centered}}>
                <Button 
                    mode="contained"
                    onPress={() => navigation.navigate('SignIn')}>
                    Fazer Login
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topo: {
        flex: 1,
    },
    bemVindo: {
        fontSize: 24
    },
    body: {
        flex: 1,
    },
    logo: {
        width: "50%",
        height: 100,
        resizeMode: "contain"
    },
    centered: {
        justifyContent: "center",
        alignItems: "center"
    }
    
})

export default BemVindo;

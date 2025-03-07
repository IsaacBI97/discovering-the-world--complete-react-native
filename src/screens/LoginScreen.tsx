import { useState } from "react";

import { Text, View, StyleSheet } from "react-native"

import { TextInputComponent } from "../components/TextInputComponent";
import { globalStyles } from "../config/theme/globalStyles"
import { Button } from "react-native-paper";


export const LoginScreen = () => {
    
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleChangeUserName = ( username : string ) => {
        console.log( username );
        setUserName( username );
    };

    const handleChangePassword = ( password : string ) => {
        console.log( password );
        setPassword( password );
    };

    return (
        <View style={ globalStyles.container }>
            <View style={ styles.loginSection }>
                <View style={ styles.card }>
                    <Text style={ styles.header }>Login</Text>
                    <TextInputComponent label="User Name*" text={ userName } handleOnChageText={ handleChangeUserName }/>
                    <TextInputComponent label="Password*" text={ password} handleOnChageText={ handleChangePassword }/>

                    <View style={{ marginTop: 20 }}>
                        <View style={ styles.btnContainer }>
                            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                                Sing Up
                            </Button>
                        </View>
                        <View style={ styles.btnContainer }>
                            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                                Sing Up
                            </Button>
                        </View>
                    </View>

                </View>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    loginSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        height: 500,
        width: 350,
        backgroundColor: '#ffffff',
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30
    },

    btnContainer: {
        marginTop: 10
    }

});


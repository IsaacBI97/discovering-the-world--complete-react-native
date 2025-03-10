import { useState } from "react";

import { Text, View, StyleSheet } from "react-native"

import { ButtonComponent, HeaderComponent, TextInputComponent } from "../components";
import { globalStyles } from "../config/theme/globalStyles"


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

    const handleOnLogin = () => {
        console.log('Pressed Login button...')
    }

    const handleOnSignUp = () => {
        
    }

    return (
        <View style={ globalStyles.container }>
            <HeaderComponent />
            <View style={ styles.loginSection }>
                <View style={ styles.card }>
                    <View>
                        <Text style={ styles.header }>Login</Text>
                    </View>
                    <View>
                        <TextInputComponent label="User Name*" text={ userName } handleOnChageText={ handleChangeUserName }/>
                        <TextInputComponent label="Password*" text={ password} handleOnChageText={ handleChangePassword }/>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ButtonComponent text="Sign Up" type="outline" handleOnPress={() => console.log('Pressed')}/>
                        <ButtonComponent text="Login" handleOnPress={() => console.log('Pressed')}/>
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
});


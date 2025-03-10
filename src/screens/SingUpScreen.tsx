import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"

import { ButtonComponent, HeaderComponent, TextInputComponent } from "../components"

import { globalStyles } from "../config/theme/globalStyles";

export const SingUpScreen = () => {

    const [ formData, setDataForm ] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });

    const { username, password } = formData;

    return (
        <View style={ globalStyles.container }>
            <HeaderComponent />
            <View style={ styles.formSection }>
                <View style={ styles.card }>
                    <View>
                        <Text style={ styles.header }>Sign Up</Text>
                    </View>
                    <View>
                        <TextInputComponent label="User Name*" text={ username } handleOnChageText={ () => {} }/>
                        <TextInputComponent label="Password*" text={ password} handleOnChageText={ () => {} }/>
                        <TextInputComponent label="First Name*" text={ username } handleOnChageText={ () => {} }/>
                        <TextInputComponent label="Last Name*" text={ password} handleOnChageText={ () => {} }/>
                        <TextInputComponent label="Confirm Password*" text={ username } handleOnChageText={ () => {} }/>
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

    formSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        marginTop: 100,
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


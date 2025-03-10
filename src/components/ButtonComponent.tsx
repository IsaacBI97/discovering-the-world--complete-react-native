import { StyleSheet, Text, TouchableOpacity, View } from "react-native"



interface Props {
    text: string,
    type?: string,
    handleOnPress: () => void
}


export const ButtonComponent = ({ text, type, handleOnPress } : Props) => {
    return (
        <View style={ styles.btnContainer }>
            <TouchableOpacity activeOpacity={ 0.8 }
                style={[ type === 'outline' ? styles.btnOutline : styles.btn ]}
                onPress={ handleOnPress }
            >
                <Text style={[ type === 'outline' ? styles.txtOutline : styles.txt ]}>{ text.toUpperCase() }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 10
    },

    btn: {
        backgroundColor: '#0065c9',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    btnOutline: {
        padding: 16,
        borderRadius: 5,
        borderColor: '#0065c9',
        borderWidth: 1,
        alignItems: 'center',

    },

    txt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    txtOutline: {
        color: '#0065c9',
        fontSize: 18,
        fontWeight: 'bold',
    }

})
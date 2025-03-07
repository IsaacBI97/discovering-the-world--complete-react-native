import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';


interface Props {
    label: string,
    text : string,
    handleOnChageText: ( value : string ) => void
}

export const TextInputComponent = ({ label, text, handleOnChageText } : Props) => {

  return (
    <View style={ styles.textInputContainer }>
        <TextInput
            label={ label }
            value={ text }
            onChangeText={ value => handleOnChageText( value ) }
            style={ styles.textInput }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textInputContainer: {
        marginVertical: 8
    },
    textInput: {
        backgroundColor: 'white'
    }
});
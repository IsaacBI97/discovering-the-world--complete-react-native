import { StyleSheet, Text, View } from "react-native"

export const HeaderComponent = () => {
    return (
        <View style={ styles.headerSection }>
            <View>
                <Text style={ styles.txtHeader }>Discovering the world</Text>
                <Text style={ styles.txtLabel }>Making your Life Easier</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerSection: {
        position: 'absolute',
        height: 150,
        width: '100%',
        backgroundColor: '#0065c9',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 40
    },

    txtHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },

    txtLabel: {
        color: 'white',
        marginTop: 5
    },
});
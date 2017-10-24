import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


const LoginButton = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {}}>
                <Text style={styles.text}>Valider</Text>
            </TouchableOpacity>
        </View>

    );
};
export {LoginButton};
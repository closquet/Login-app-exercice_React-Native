import React, {Component} from 'react';
import { View, TextInput, Text} from 'react-native';

import styles from './styles';

const TextInputAndLabel = ({ label, placeholder, value, onChangeText, secureTextEntry })=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={styles.input}
                onChangeText={onChangeText}
                autoCorrect={false}
                value={value}
            />
        </View>
    );
};
export {TextInputAndLabel};

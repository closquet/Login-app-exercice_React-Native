import React, {Component} from 'react';
import { View, TextInput, Text} from 'react-native';

import styles from './styles';

class TextInputAndLabel extends Component {
    state = {text : '', name : this.props.name};
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={this.props.hideText}
                    placeholder={this.props.placeholder}
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        );
    }
}
export {TextInputAndLabel};
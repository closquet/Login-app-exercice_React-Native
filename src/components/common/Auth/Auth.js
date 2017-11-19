import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import firebase from 'firebase'
import { Spinner, TextInputAndLabel } from '../'
import {Profile} from "../Profile/Profile";

firebase.initializeApp({
    apiKey: 'AIzaSyDX5JeCmUwq38QhKTP_fGlS8Z5Qi084fMY',
    authDomain: 'loginapp-8d15b.firebaseapp.com',
    databaseURL: 'https://loginapp-8d15b.firebaseio.com',
    projectId: 'loginapp-8d15b',
    storageBucket: 'loginapp-8d15b.appspot.com',
    messagingSenderId: '796844400741'
});

class Auth extends Component{

    constructor(props){



        super(props);
        this.state = {
            email : 'a@a.be',
            password : '123456',
            loading : false,
        };
    }

    login = () => {
        this.setState({loading:true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( reponse => this.onLoginSuccess(reponse) )
            .catch((error) => {
                // Handle Errors here.
                this.setState({loading:false});
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log('auth/login error ' + errorCode + ' : ' + errorMessage);
                // ...
            });
    };

    onLoginSuccess = (user) =>{
        this.setState({loading:false});
        this.props.onUserloggedIn(user);
    };


    render(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.onUserloggedIn(user);
            }
        });

        return(
            <View>
                <View style={styles.field}>
                    <TextInputAndLabel
                        label='Email'
                        placeholder='example@test.com'
                        value={this.state.email}
                        onChangeText={ text => this.setState({email:text}) }/>
                </View>
                <View style={styles.field}>
                    <TextInputAndLabel
                        label='Password'
                        placeholder={'Entrez votre mot de passe'}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={ password => this.setState({password}) }/>
                </View>
                <View>
                    {(this.state.loading) ? (
                        <View style={styles.buttonContainer}>
                            <Spinner />
                        </View>
                    ):(
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            ref={'login'}
                            style={styles.button}
                            onPress={() => {this.login();}}>
                            <Text style={styles.buttonText}>Se connecter</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                        <TouchableOpacity style={styles.signUpLink}><Text>Créer un compte</Text></TouchableOpacity>
                </View>

            </View>
        );
    }
}
export {Auth};
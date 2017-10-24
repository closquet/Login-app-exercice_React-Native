import React, {Component} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import commonStyles from '../commonStyles'
import styles from './styles'
import firebase from 'firebase'
import { Profile } from '../'

class Auth extends Component{
    state = {email : '', password : '',
        user:{
            email : '',
            uid : '',
        }
    };
    login(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ' : ' + errorMessage);
            // ...
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user:{email:user.email, uid:user.uid} });
            } else {
                console.log('No user.');
            }
        });
    };
    logout(){
        firebase.auth().signOut().then((user) => {
            console.log('Sign-out successful.');
            this.setState({user:{email:''}});
        }).catch(function(error) {
            console.log('An error happened : ' + error);
        });
    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDX5JeCmUwq38QhKTP_fGlS8Z5Qi084fMY',
            authDomain: 'loginapp-8d15b.firebaseapp.com',
            databaseURL: 'https://loginapp-8d15b.firebaseio.com',
            projectId: 'loginapp-8d15b',
            storageBucket: 'loginapp-8d15b.appspot.com',
            messagingSenderId: '796844400741'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user:{email:user.email, uid:user.uid} });
            } else {
                console.log('No user.');
            }
        });
    }
    render(){
        //console.log(firebase.auth().currentUser);
        return(
            <View style={commonStyles.wrap}>

                {
                    (this.state.user.email) ? (
                        <View>
                            <Profile email={this.state.user.email} uid={this.state.user.uid} />
                            <View  style={styles.buttonContainer}>
                                <TouchableOpacity
                                    ref={'logout'}
                                    style={styles.button}
                                    onPress={() => {this.logout();}}>
                                    <Text style={styles.buttonText}>Se déconnecter</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ) : (
                        <View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    onSubmitEditing={(event) => {
                                        this.refs.SecondInput.focus();
                                    }}
                                    keyboardType={'email-address'}
                                    autoCorrect={false}
                                    secureTextEntry={false}
                                    placeholder={'email@exemple.be'}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({email:text})}
                                    value={this.state.email}
                                />
                            </View>
                            <View style={styles.field}>
                                <Text style={styles.label}>Mot de pass</Text>

                                <TextInput
                                    onSubmitEditing={(event) => {
                                        this.refs.login.touchableHandlePress();
                                    }}
                                    ref={'SecondInput'}
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    placeholder={'********'}
                                    style={styles.input}
                                    onChangeText={(text) => this.setState({password:text})}
                                    value={this.state.password}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    ref={'login'}
                                    style={styles.button}
                                    onPress={() => {this.login();}}>
                                    <Text style={styles.buttonText}>Se connecter</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.signUpLink}><Text>Créer un compte</Text></TouchableOpacity>
                        </View>

                    )
                }

            </View>
        );
    }
}
export {Auth};
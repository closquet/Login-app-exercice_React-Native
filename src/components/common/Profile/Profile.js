import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AlbumList, AnimatedViewIncoming } from '../'
import firebase from 'firebase'


// On passe un Object props à la fonction header, fourni par le parent lors de l'appel. On récupère ensuite la valeur qui nous intéresse dans cet objet.
const Profile = (props) => {
    const logout = ()=>{
        firebase.auth().signOut()
            .then(() => {props.onUserLoggedOut();})
            .catch(function(error) {
            console.log('profile/logout An error happened : ' + error);
        });
    };
    return (
        <View style={styles.container}>
            <AnimatedViewIncoming>
                <Text style={styles.title}>
                    Vous êtes connecté en tant que :
                </Text>
                <FlatList
                    data={[
                        {key: 'Adresse email : ' + props.user.email},
                        {key: 'UID : ' + props.user.uid}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <AlbumList />
                <View  style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {logout();}}>
                        <Text style={styles.buttonText}>Se déconnecter</Text>
                    </TouchableOpacity>
                </View>
            </AnimatedViewIncoming>

        </View>
    );
};
export {Profile};
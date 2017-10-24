import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';


// On passe un Object props à la fonction header, fourni par le parent lors de l'appel. On récupère ensuite la valeur qui nous intéresse dans cet objet.
const Profile = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Vous êtes connecté en tant que :
            </Text>
            <FlatList
                data={[{key: 'Adresse email : ' + props.email}, {key: 'UID : ' + props.uid}]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
};
export {Profile};
import React from 'react';
import {Button, View, Image, Text, WebView, Linking} from 'react-native';
import styles from './styles.js';


const Album = (props) => {

    return(
        <View style={styles.album}>
            <View style={styles.imagesContainer}>
                <Image
                    style={styles.albumImg}
                    source={{uri: props.album.image}}
                />
                <Image
                    style={styles.authorImg}
                    source={{uri: props.album.thumbnail_image}}
                />
            </View>
            <View>
                <Text style={styles.text}> {props.album.title} </Text>
                <Text style={styles.text}> {props.album.artist} </Text>
            </View>
            <Button
               onPress={() => Linking.openURL(props.album.url).catch(err => console.error('An error occurred', err))}
               title="Acheter"
               accessibilityLabel="Learn more about this purple button"
            />
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
            />
        </View>
    );
};
export {Album};
import React, {Component} from 'react';
import { View} from 'react-native'
import { Album } from '../'
import styles from './styles'

class AlbumList extends Component {

    state = {albums: []};

    componentWillMount() {
        const albums = fetch('https://rallycoding.herokuapp.com/api/music_albums');

        albums
            .then(response => response.json())
            .then(response => this.setState({albums: response}))
    }

    render() {
        return (
            <View style={styles.albumList}>
                {
                    this.state.albums.map(item => <Album key={item.title} album={item}/>)
                }
            </View>
        );
    }
}
export {AlbumList}
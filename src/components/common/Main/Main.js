import React from 'react';
import { View } from 'react-native';
import {Auth} from '../'
import commonStyles from '../commonStyles';
import styles from './styles';

const Main = () => {
    return(
        <View style={[commonStyles.wrap, styles.container]}>
            <Auth />
        </View>
    );
};
export {Main};
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import commonStyles from '../commonStyles'
import styles from './styles'

const Spinner = ()=>{
    return(
        <View>
            <ActivityIndicator color={'#027691'} size={'large'} style={styles.spinner} />
        </View>
    )
};
export {Spinner};
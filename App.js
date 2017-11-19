import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Main, Footer } from './src/components/common'


export default class App extends Component{
    render() {
        return (
            <View style={{flexGrow:1, maxHeight:'100%'}}>
                <Header content={'Bienvenue'} />
                <ScrollView  contentContainerStyle={{flexGrow:1}}>
                    <Main />
                    <Footer content={'© 2017 Closquet Eric'} />
                </ScrollView>
            </View>
        );
    }
}
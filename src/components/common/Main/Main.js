import React, {Component} from 'react'
import { View } from 'react-native';
import { Auth, Profile } from '../'
import commonStyles from '../commonStyles';
import styles from './styles';

class Main extends Component{

    constructor(props){
        super(props);
        this.state ={
            user:{
                email:'',
                loggedIn:false,
                uid:'',
            }
        };
    }

    saveUser = (user) => {
      this.setState({
          user:{
              loggedIn:true,
              email:user.email,
              uid:user.uid,
          }
      });
    };

    deleteUser = () => {
        this.setState({
            user:{
                loggedIn:false,
                email:'',
                uid:'',
            }
        });
    };

    render() {
        return (
            <View style={[commonStyles.wrap, styles.container]}>
                {this.state.user.loggedIn ? <Profile onUserLoggedOut={this.deleteUser} user={this.state.user} /> : <Auth onUserloggedIn={this.saveUser} /> }
            </View>
        );
    }
}

export {Main};
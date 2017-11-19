import React, {Component} from 'react';
import { Animated } from 'react-native'
import styles from './styles'

class AnimatedViewIncoming extends Component {

    state = {
        fadeInAnimValue: new Animated.Value(0),
        moveRTLAnimValue: new Animated.Value(320),
        fadeOutAnimValue: new Animated.Value(1),
        moveLTRAnimValue: new Animated.Value(0),
    };

    fadeInAnim = Animated.timing(
        this.state.fadeInAnimValue,
        {
            toValue:1,
            duration:1000
        }
    );

    fadeOutAnim = Animated.timing(
        this.state.fadeInAnimValue,
        {
            toValue:0,
            duration:1000
        }
    );

    moveRTLAnim = Animated.timing(
        this.state.moveRTLAnimValue,
        {
            toValue:0,
            duration:1000
        }
    );

    moveLTRAnim = Animated.timing(
        this.state.moveRTLAnimValue,
        {
            toValue:-320,
            duration:1000
        }
    );

    animations = {
        opacity:this.state.fadeInAnimValue,
        transform:[{translateX:this.state.moveRTLAnimValue}]
    };

    componentDidMount(){
        this.fadeInAnim.start();
        this.moveRTLAnim.start();
    }
    onTransitionEnd(){
        this.fadeOutAnim.start();
        this.moveLTRAnim.start();
    }

    render() {
        return (
            <Animated.View style={this.animations}>
                {this.props.children}
            </Animated.View>
        );
    }

}
export {AnimatedViewIncoming}
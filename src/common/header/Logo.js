import React from "react";
import {StyleSheet, View, Animated, Image, Easing} from 'react-native'
import companyLogo from '../../assets/logo.svg'

export default class Logo extends React.Component{
    constructor(props){
        super(props);
        this.RotateValue = new Animated.Value(0);
    }
    componentDidMount(){
        this.StartLogoRotation();
    }
    StartLogoRotation(){
        this.RotateValue.setValue(0);
        Animated.timing(this.RotateValue,{
            toValue:1,
            duration:8000,
            easing:Easing
        }).start(()=>this.StartLogoRotation())
    }
    render(){
        const rotateData = this.RotateValue.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg','360deg']
        });

        return(
            <View style={{flex:1}}>
                <Animated.Image style={{height:"35px", backgroundColor:"#ff7f7f", transform:[{rotate:rotateData}]}}
                src={companyLogo}
                />
            </View>
            
        )

    }

}
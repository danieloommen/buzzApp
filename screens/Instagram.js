import React from 'react'
import { Text,View } from 'react-native'

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,fontWeight:'500',color:'blue'}}>
                
                    Instagram
                </Text>
            </View>
        )
    }
}
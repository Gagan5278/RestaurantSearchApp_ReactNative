import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
const ResultDetail = ({dataItem, navigation}) => {
    return (
        <TouchableOpacity onPress = {() => navigation.navigate('Detail', {selectedBusiness: dataItem.id})}>
         <View>
            <Image style = {styleItems.imageStyle} source = {{uri: dataItem.image_url}}/>
            <Text style = {styleItems.textStyle}>{dataItem.name}</Text>
            <Text>{dataItem.rating} star</Text>
            <Text>{dataItem.review_count} review</Text>
         </View>
        </TouchableOpacity>
    )
}

const styleItems = StyleSheet.create({
    imageStyle: {
        width : 250,
        height : 150,
        borderRadius: 5,
        margin: 5
    },
    textStyle : {
        fontSize : 14,
        fontWeight : 'bold',
    }
})

export default withNavigation(ResultDetail);
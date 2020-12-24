import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBarComponent = ({onTextChange,onEndEditingField}) => {
    return (
        <View style = {SearchBarViewStyle.viewStyle}>
        <Feather name="search" style = {SearchBarViewStyle.iconStyle} />
        <TextInput placeholder = 'Search' style = {SearchBarViewStyle.textInputSStyle} 
          onChangeText = { (valeText) => onTextChange(valeText)}
          onEndEditing = { (valeText) => onEndEditingField(valeText)}/>
        </View>
    )
};

const SearchBarViewStyle = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#E8E2E1',
        height: 50,
        alignContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 10,
    },
    textInputSStyle: {
        color: 'black',
        fontSize: 16,
    },
    iconStyle:{
        fontSize: 40,
        alignSelf:'center',
        marginHorizontal: 5,
    }
}) 


export default SearchBarComponent;
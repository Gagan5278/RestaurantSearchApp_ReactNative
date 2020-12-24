
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const SeachItemComponent = ({title, resultsSearch, navigation}) => {
    if (resultsSearch.length == 0) {
        return null;
    }
    return(
        <View>
            <Text style = {StyleForView.textStyle}>{title}</Text>
            <FlatList  style = {StyleForView.listStyle}
            horizontal 
            showsHorizontalScrollIndicator = {false}
            data = {resultsSearch} 
            keyExtractor = { res => res.id} 
            renderItem = { ({item}) => {
                return <ResultDetail dataItem = {item} navigation = {navigation}/>
            }}/>
        </View>
    )
}


const StyleForView = StyleSheet.create({
    textStyle: {
        marginTop:10,
        fontSize : 24,
        fontWeight: 'bold'
    },
    listStyle: {
        marginBottom: 10,
    }
});

export default  SeachItemComponent;
import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SearchBarComponent from '../components/SearchBarComponent';
import userResults from '../hook/userResultHook';
import SeachItemComponent from '../components/SeachItemComponent';
import LoaderActivityIndicator from '../components/LoaderActivityIndicator';

const SearchScreen = ({navigation}) => {
    const [searchItem, setSearchItem] = useState('');
    const [searchAPI, results, errorMesssage, isLoadingResult] = userResults();

    const seachItems = (searchPrice) => {
       return results.filter(result => {
          return  result.price ===  searchPrice
        });
    }

  return (
    <SafeAreaView style = {{marginLeft : 10, marginRight: 10, flex : 1}}>
        <SearchBarComponent 
        onTextChange = {(newValue) => {setSearchItem(newValue)}} 
        onEndEditingField = { ()=> searchAPI(searchItem)}
        />
        <ScrollView showsVerticalScrollIndicator = {false}>
         <SeachItemComponent title = 'Cheap' resultsSearch = { seachItems('$')} navigation = {navigation}/>
         <SeachItemComponent title = 'Medium' resultsSearch = {seachItems('$$')} navigation = {navigation}/>
         <SeachItemComponent title = 'Costly' resultsSearch = {seachItems('$$$')} navigation = {navigation}/>    
        </ScrollView>
        <LoaderActivityIndicator isLoading = {isLoadingResult}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

import React, {useState, useEffect} from 'react'
import {StyleSheet, FlatList, View, Image  } from 'react-native'; 
import LoaderActivityIndicator from '../components/LoaderActivityIndicator';
import yelp from '../api/yelp';

const ItemDetailScreen = ({navigation}) => {
    const businessID = navigation.getParam('selectedBusiness');
    const [isLoadingImage, setIsLoadingImage]  = useState(false);
    const [result, setResult] = useState([]);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data.photos);
        console.log(response.data.photos);
        setIsLoadingImage(false);
    }

    useEffect(() => {
        setIsLoadingImage(true);
        getResult(businessID);
    },[]);

    return(
        <View style = {StyleDetail.viewStyle}>
            <FlatList
             data = {result} 
             keyExtractor = {(photo) => photo}
             renderItem = { ({item}) => {
                return  <View style = {StyleDetail.subViewStyle}><Image style = {StyleDetail.imageStyle} source = {{uri: item}}/></View>
              } 
             }
             />
          <LoaderActivityIndicator isLoading = {isLoadingImage}/>
        </View>
    )
} 

const StyleDetail = StyleSheet.create({
    viewStyle: {
        justifyContent: 'space-between',
        flex : 1,
        justifyContent : 'space-around',
        backgroundColor: '#FDF6F6',
    },
    subViewStyle: {
        marginTop: 10,
        width: '90%',
        height: 200,
        alignSelf: 'center',
        justifyContent : 'space-around',
        borderRadius: 10,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
    }
});

export default ItemDetailScreen;
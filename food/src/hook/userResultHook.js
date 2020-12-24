import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errormessage, setErrorMessage] = useState('');
    const [isLoadingResult, setIsLoadingResult]  = useState(false);

    const searchAPI = async (valueSearch) => {
        try {
            console.log(valueSearch)
            const res = await yelp.get('/search', { params: {term: valueSearch, limit: 50, location:  'NYC'} });
            setResults(res.data.businesses);
            setIsLoadingResult(false);
        }
        catch (err) {
            setErrorMessage('Something went wrong');
            setIsLoadingResult(false);
        }
      };

      useEffect(() => {
        setIsLoadingResult(true);
        searchAPI('pasta')
      },[])

      return [searchAPI, results, errormessage, isLoadingResult]; 
}
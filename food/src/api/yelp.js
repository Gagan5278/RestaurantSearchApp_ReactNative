import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UC4TTEvpejulFHqeil6Cci2kpkvZy9rtf8LeM47WZJhy_kIqgvgrMg0M_3GAVCIUfQpAz8e6d4BMo0j8WWSHI2gZ-LpO0d69m-1jza8TRFuWtg8PNnQEnlH49MXgX3Yx'
    }
})

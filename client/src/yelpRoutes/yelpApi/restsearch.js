import React from 'react';
import Axios from 'axios';
import { BEARER_TOKEN } from './config';

export default class RestarauntList extends React.Component {

    state = {
        restaurants: []
    }

    componentDidMount() {
        Axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`, {
            headers: {
                authorization: BEARER_TOKEN
            },
            params: {
                location: 'Oakland',
                term: 'Restaurants'
            }
        }).then(res => {
            console.log(res.data.businesses);
        });
    }

    
    render() {
        return (
            <div></div>
        )

    }
}


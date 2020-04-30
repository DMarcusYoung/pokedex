import React, { Component } from 'react';
import axios from 'axios';

class RestaurantList extends Component { 

    constructor(props) { 
        super(props);

        this.state = { 
            results: [],
            errorState: null,
            loading: false,
        };
    }

    componentDidMount () { 
        this.getRestaurantsFromApi('San Francisco')
    }

    componentDidUpdate (prevProps, prevState) { 
        if(this.props.searchLocationQuery !== prevProps.searchLocationQuery) { 
            this.setState({ 
                results: [],
            }, () => this.getRestaurantsFromApi(this.props.searchLocationQuery))
        }
    }
// function to grab information from API 
getRestaurantsFromApi = (locationSearched) => {
    //UI feedback to tell the user when we are retrieving infromation from the API 
    this.setState({ loading: true })

    //using a proxy server cors-anywhere to get rid of the CORS probblem 
    //locationSearched variable to grab user city input from Create index.js
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
    
    headers: {
        //to get the API from the .env USE THIS!!!
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`
        //This is just for testing DO NOT PUSH THIS TO GITHUB
        //Authorization: `Bearer <insert API key here for test>`
    },
    //option params passed to API call to retrieve only restaurants, can change to w/e like bars, food, dinner, breakfast, chinese.
    params: {
        categories: 'restaurant',
    }
    })
    .then((res) => {
        console.log(res.data.businesses);
        //change the state of App to reflect on the result we are given from the API
        //at the same time, setting the loading state to false 
        this.setState({ results: res.data.businesses, loading: false })
    })
    .catch((err) => {
        // error for if nothing is found.
        this.setState({ errorState: `Nothing found, search again`, loading: false })
    })

    export default RestaurantList
}

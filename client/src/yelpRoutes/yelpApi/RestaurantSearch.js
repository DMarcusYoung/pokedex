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

    componentDIdUpdate (prevProps, prevState) { 
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
        // Authorization: `Bearer ${process.env.YELP_API_KEY}`
        //This is just for testing DO NOT PUSH THIS TO GITHUB
        Authorization: `Bearer 4oqtYN6ntFys9IoVhDhYyWKrCj2UOzDvbrTm29c7UqQ_MCjgtI4zHb3P6m6sg_jupRk-wTim5vRojSpDkukulu9tOv3haZ9YXlCKkZGrPCKGRH3y6AJhBkATlROlXnYx`
    },
    //option params passed to API call to retrieve only restaurants, can change to w/e like bars, food, dinner, breakfast, chinese.
    params: {
        categories: 'restaurant',
    }
    })
    .then((res) => {
        console.log(res.data.businesses)
        //change the state of App to reflect on the result we are given from the API
        //at the same time, setting the loading state to false 
        this.setState({ results: res.data.businesses, loading: false })
    })
    .catch((err) => {
        // error for if nothing is found.
        this.setState({ errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`, loading: false })
    })
}

console.log(getRestaurantsFromApi);
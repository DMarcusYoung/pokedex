import App from '../../client/src/./App.js'
import axios from 'axios'

axios.get('https://api.yelp.com/v3/businesses/search', {

  headers: {
        // Authorization Key is stored in .env file hidden in .gitignore
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,

  },

  params: {
        // Create a Variable for Location based off User City Input *replace San Jose*
    location: 'San Jose, CA',
    categories: 'restauarants',

  },

  .then((res) => { 

      console.log(res)

  })

  .catch((err) => { 

    console.log ('error')

  })
})

import React from 'react'
import Restaurant from './Restaurant';

export default function RestaurantList({restaurants}) {

const limitedRestaurants = restaurants.slice(0,10);

const RestaurantComponents = limitedRestaurants.map(restaurant => {
    return <Restaurant key={restaurant.id} name={restaurant.name} cuisines={restaurant.cuisines} rating={restaurant.rating} address={restaurant.address} />
})

  return (
    <div>
      <h3>List of Restaurants</h3>
      <hr />
      {RestaurantComponents}
      
    </div>
  )
}

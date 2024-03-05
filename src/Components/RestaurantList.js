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
    <div className="restaurant-row">
        {/* Restaurants for the first row */}
        {RestaurantComponents.slice(0, 5)}
    </div>
    <div className="restaurant-row">
        {/* Restaurants for the second row */}
        {RestaurantComponents.slice(5, 10)}
    </div>
</div>
  )
}

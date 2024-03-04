import React from 'react'
import Restaurant from './Restaurant';

export default function RestaurantList({restaurant}) {

    if(!restaurant || restaurant.length === 0) {
        return <div>No restaurant found.</div>;
    }

const RestaurantComponents = restaurant.map(restaurant => {
    return <Restaurant key={restaurant.id} name={restaurant.name} cuisines={restaurant.cuisines} rating={restaurant.rating} address={restaurant.address} />
})

  return (
    <div>
      <p>Hello from RestaurantList</p>
      <Restaurant />
      <Restaurant />
    </div>
  )
}

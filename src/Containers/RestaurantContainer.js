import React, { useEffect, useState } from 'react'
import RestaurantForm from '../Components/RestaurantForm';
import RestaurantList from '../Components/RestaurantList';


export default function RestaurantContainer() {

const [restaurants, setRestaurants] = useState([]);



  return (
    <div>
      <p><em>Hello from RestaurantContainer</em></p>
      <RestaurantForm />
      <RestaurantList />

    </div>
  )
}

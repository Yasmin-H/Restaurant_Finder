import React, { useEffect, useState } from 'react'
import RestaurantForm from '../Components/RestaurantForm';
import RestaurantList from '../Components/RestaurantList';


export default function RestaurantContainer() {

const [restaurants, setRestaurants] = useState([]);
const postcode = 'EC4M7RF';

useEffect(() => {
    const fetchRestaurants = async () => {
        const response = await fetch("http://localhost:8080/restaurants/LE39RL");
        const data = await response.json();
        setRestaurants(data);
    }
    fetchRestaurants();

}, [])

  return (
    <div>
      <p>Hello from RestaurantContainer</p>
      <RestaurantForm  />
      <RestaurantList />

    </div>
  )
}

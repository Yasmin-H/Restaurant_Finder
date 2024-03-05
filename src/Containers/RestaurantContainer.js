import React, { useEffect, useState } from 'react';
import RestaurantForm from '../Components/RestaurantForm';
import RestaurantList from '../Components/RestaurantList';
import RestaurantContainerCSS from '/Users/yasminhaidar/JustEat/just_eat_assignment/src/Containers/RestaurantContainerCSS.css';

export default function RestaurantContainer() {
    const [restaurants, setRestaurants] = useState([]);
    const defaultPostcode = 'EC4M7RF';

    useEffect(() => {
        fetchRestaurants(defaultPostcode);
    }, []);

    const fetchRestaurants = async (postcode) => {
        try {
            const response = await fetch(`http://localhost:8080/restaurants/${postcode}`);
            const data = await response.json();
            setRestaurants(data.restaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    const handleSubmit = (postcode) => {
        fetchRestaurants(postcode);
      };


    return (
        <div className="container">
            <h1 className="title">JustEat Restaurant Finder</h1>
             <p className="description"><em>Find any restaurant in your local area !</em></p>
             <div className="description">
            <RestaurantForm onSubmit={handleSubmit} />
            </div>
            <div className='restaurant-list'>
            <RestaurantList restaurants={restaurants} />
            </div>
        </div>
    );
}


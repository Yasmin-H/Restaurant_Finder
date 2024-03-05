import React, { useEffect, useState } from 'react';
import RestaurantForm from '../Components/RestaurantForm';
import RestaurantList from '../Components/RestaurantList';

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

    const handleFormSubmit = (postcode) => {
        fetchRestaurants(postcode);
    };

    return (
        <div>
            <RestaurantForm onSubmit={handleFormSubmit} />
            <RestaurantList restaurants={restaurants} />
        </div>
    );
}


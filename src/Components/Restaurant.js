import React from 'react'

export default function Restaurant({ name, cuisines, rating, address }) {
  
  const cuisineNames = Object.values(cuisines).map(cuisine => cuisine.name);

  const { count, starRating, userRating } = rating;

  const { city, firstLine, postalCode } = address;


  return (
    <div>
      <h4>{name}</h4>
      <p><strong>Rating:</strong> {starRating} ({count} reviews)</p>
      <p><strong>Address:</strong> {firstLine}, {city}, {postalCode}</p>
      <p><strong>Cuisines:</strong> {cuisineNames.join(', ')} </p>
     <hr />
    </div>
  )
}



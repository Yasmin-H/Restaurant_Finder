import React, { useState } from 'react'

export default function RestaurantForm( {onSubmit}) {

const [postcode , setPostcode] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(postcode);
};

  return (
    <div>
      <h3 className='title'>Find Restaurant by Postcode</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Postcode: 
            <input type="text" value={postcode} onChange={(event) => setPostcode(event.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

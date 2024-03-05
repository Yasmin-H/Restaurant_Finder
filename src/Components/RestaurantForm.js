import React, { useState } from 'react'

export default function RestaurantForm() {

const [postcode , setPostcode] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    onsubmit(postcode);
};

  return (
    <div>
      <h3>Find Restaurant by Postcode</h3>
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

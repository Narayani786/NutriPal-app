import React from 'react';

const FoodList = ({ foodList }) => {
    return (
        <ul className='food-list'>
            {foodList.map((item, index) => (
                <li key={index}>
                    🍽️{item.name} - {item.calories} kcal
                </li>
            ))}
        </ul>
    );
};

export default FoodList;

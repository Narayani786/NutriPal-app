import React from 'react';
import {getTodayKey} from '../utils/storageUtils';

const FoodList = ({ foodList, setFoodList }) => {

    const handleDelete = (id) => {
        const updateList = foodList.filter(item => item.id !== id);
        setFoodList(updateList);

        localStorage.setItem(getTodayKey(), JSON.stringify(updateList));
    };

    return (
       <div className='food-list'>
        <h3>Your Food Entries</h3>
        {foodList.length === 0 ? (
            <p>No food added yet today.</p>
        ) : (
            foodList.map(item => (
                <div key={item.id} className='food-item'>
                    <span>{item.food} - {item.calories} cal</span>
                    <button className='delete-btn' onClick={() => handleDelete(item.id)}>✕</button>
                </div >
            ))
        )}
       </div>
    );
};

export default FoodList;

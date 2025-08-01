import React, { useState } from 'react';
import { getToday } from '../utils/storageUtils';

const FoodInput = ({ onAdd }) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!food || !calories) return;

        const newFood = {
            id:crypto.randomUUID(),
            food,
            calories: parseInt(calories),
        };
        onAdd(newFood);
        setFood('');
        setCalories('');

    };

    return (
        <form onSubmit={handleSubmit} className='input-item'>
            <input
            type='text'
            placeholder='Food'
            value={food}
            onChange={(e) => setFood(e.target.value)}
            />

            <input
            type='number'
            placeholder='Calories'
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    );
};

export default FoodInput;

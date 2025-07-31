import React, { useState } from 'react';

const FoodInput = ({ onAdd }) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!food || !calories) return;

        const newFood = {
            food,
            calories: parseInt(calories),
        };
        onAdd(newFood);
        setFood('');
        setCalories('');

        setMessage('Food Added!');
        setTimeout(() => {
            setMessage('');
        }, 2000);
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

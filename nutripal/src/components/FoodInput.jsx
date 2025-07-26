import React, { use, useState } from 'react';

const FoodInput = ({ onAdd }) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!food || !calories) return;
        onAdd({ name: food, calories: Number(calories) });
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

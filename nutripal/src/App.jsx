import React, { useState, useEffect } from 'react';

import './App.css';
import './styles/theme.css';

import FoodInput from './components/FoodInput';
import FoodList from './components/FoodList';
import TotalCalories from './components/TotalCalories';
import SummaryBox from './components/SummaryBox';

import { getToday, getYesterday } from './utils/storageUtils';

    const App = () => {

        const today = getToday();
        const yesterday = getYesterday();

        const [foodList, setFoodList] = useState(() => {
            const saved = localStorage.getItem(today);
            return saved ? JSON.parse(saved) : [];
        });

        const [yesterdayTotal, setYesterdayTotal] = useState(() => {
            const saved = localStorage.getItem(yesterday);
            return saved ? JSON.parse(saved) : [];
        });

        useEffect(() => {
            localStorage.setItem(today, JSON.stringify(foodList));
        }, [foodList, today]);

        const handleAdd = (item) => {
            setFoodList((prev) => [...prev, item]
        );
    };

    const handleDelete = (foodName) => {
        setFoodList((prev) => prev.filter((item) => item.food !== foodName));
    };

    const totalToday = foodList.reduce((acc, item) => acc + Number(item.cal), 0);

    return (
        <div className='App'>
            <h1>🥗NutriPal</h1>
            <FoodInput onAdd={handleAdd}/>
            <FoodList foodList={foodList} setFoodList={setFoodList} onDelete={handleDelete}/>
            <TotalCalories foodList={foodList}/>
            <SummaryBox totalToday={totalToday} yesterdayTotal={yesterdayTotal}/>
        </div>
    );
};

export default App;

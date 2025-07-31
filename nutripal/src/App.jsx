import React, { useState, useEffect } from 'react';

import './App.css';
import './styles/theme.css';

import FoodInput from './components/FoodInput';
import FoodList from './components/FoodList';
import TotalCalories from './components/TotalCalories';
import SummaryBox from './components/SummaryBox';

import { saveFoodToLocalStorage,
         getTodayKey,
         getYesterdayTotal 
} from './utils/storageUtils';

    const App = () => {

        // generate date string
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        // state for today's food list
        const [foodList, setFoodList] = useState(() => {
            const saved = localStorage.getItem(today);
            return saved ? JSON.parse(saved) : [];
        });

        // state for yesterday's food list
        const [yesterdayList, setYesterdayList] = useState(() => {
            const saved = localStorage.getItem(yesterday);
            return saved ? JSON.parse(saved) : [];
        });

        useEffect(() => {
            localStorage.setItem(today, JSON.stringify(foodList));
        }, [foodList, today]);

        const handleAdd = (item) => {
            setFoodList((prev) => [...prev, item]);
        };

        const handleDelete = (food) => {
            setFoodList((prev) => prev.filter((item) => item.food !== food));
        };

        return (
            <div className='App'>
                <h1>🥗NutriPal</h1>
                <FoodInput onAdd={handleAdd} />
                <FoodList foodList={foodList} setFoodList={setFoodList}/>
                <TotalCalories foodList={foodList} />
                <SummaryBox todalTotal={totalToday} yesterdayTotal={yesterdayTotal} />
            </div>
        );
    };

export default App;

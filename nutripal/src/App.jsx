import React, { useState, useEffect } from 'react';
import './App.css';
import FoodInput from './components/FoodInput';
import FoodList from './components/FoodList';
import TotalCalories from './components/TotalCalories';
import SummaryBox from './components/SummaryBox';

import { saveFoodToLocalStorage,
         getTodayKey,
         getYesterdayTotal 
} from './utils/storageUtils';

    const App = () => {
        const [foodList, setFoodList] = useState([]);
        const [yesterdayTotal, setYesterdayTotal] = useState(null);

        useEffect(() => {
            const allData = JSON.parse( localStorage.getItem('nutripals') || '{}' );
            const todayData = allData[getTodayKey()] || [];
            setFoodList(todayData);

            setYesterdayTotal(getYesterdayTotal());
        }, []);

        useEffect(() => {
            saveFoodToLocalStorage(foodList);
        }, [foodList]);


        const handleAdd = (item) => {
            setFoodList([...foodList, item]);
        };

        const totalToday = foodList.reduce( (acc, item) => acc + item.calories, 0 );

        return (
            <div className='App'>
                <h1>🥗NutriPal</h1>
                <FoodInput onAdd={handleAdd} />
                <FoodList foodList={foodList} />
                <TotalCalories foodList={foodList} />
                <SummaryBox todalTotal={totalToday} yesterdayTotal={yesterdayTotal} />
            </div>
        );
    };

export default App;

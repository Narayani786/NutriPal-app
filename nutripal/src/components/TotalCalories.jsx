import React from 'react';

const TotalCalories = ({ foodList }) => {
    const total = foodList.reduce( (acc, item) => acc + item.calories, 0 );
    return (
        <h3>Total Calories Today: <span className='highlight'>{total} kcal</span></h3>
    );
};

export default TotalCalories;

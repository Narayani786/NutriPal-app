// Handles storing and retrieving daily food logs in localStorage

export const getTodayKey = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

export const saveFoodToLocalStorage = (foodList) => {
    const key = getTodayKey();
    const existing = JSON.parse(localStorage.getItem('nutripals') || '{}');
    existing[key] = foodList;
    localStorage.setItem('nutripals', JSON.stringify(existing));
};

export const getYesterdayTotal = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);  // Go back one day
    const ykey = today.toISOString().split('T')[0];
    const allData = JSON.parse(localStorage.getItem('nutripals') || '{}' );
    
    if(allData[ykey]) {
        return allData[ykey].reduce( (acc, item) => acc + Number(item.calories), 0 );
    }

    return null;
};

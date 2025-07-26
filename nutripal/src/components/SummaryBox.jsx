import React from 'react';

const SummaryBox = ({ todalTotal, yesterdayTotal }) => {
    const compare = yesterdayTotal !== null? todalTotal - yesterdayTotal : null;

    return (
        <div className='summary-box'>
            <p>
                <strong>📆 Today:</strong> {new Date().toDateString()}
            </p>
            <p>
                <strong>📊 Today:</strong> {todalTotal} kcal
            </p>

            <p>
                <strong>📆 Yesterday:</strong> {new Date().toDateString()}
            </p>
            <p>
                <strong>📊 Yesterday:</strong> {yesterdayTotal} kcal
            </p>

            {compare !== null && (
                <p>
                    🔁 Compared to yesterday:{' '}
                    <span className={compare > 0 ? "red" : "green"}>
                        {compare > 0 ? `↑ ${compare}` : `↓ ${-compare}`} kcal
                    </span>
                </p>
            )}
        </div>
    );
};

export default SummaryBox;

export const getToday = () => {
    return new Date().toISOString().split('T')[0];
};

export const getYesterday = () => {
    return new Date(Date.now() - 86400000).toISOString().split('T')[0];
};

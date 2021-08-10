export const CHANGE_CITY = 'CHANGE_CITY';
export const RESET_MAP = 'RESET_MAP';

export const changeCity = (center, zoom) => {
    return {
        type: CHANGE_CITY,
        center,
        zoom
    }
};

export const resetMap = () => ({
    type: RESET_MAP
})
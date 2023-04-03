export const MAX_RATING = 10;

export const ratingArray = Array.from({length: MAX_RATING}, (v, i) => ++i).reverse();

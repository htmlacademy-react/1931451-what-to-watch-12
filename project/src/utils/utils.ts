export const getTextFilmScore = (rating: number): string | undefined => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 8) {
    return 'Good';
  } else if (rating >= 8 && rating < 10) {
    return 'Very good';
  } else if (rating >= 10) {
    return 'Awesome';
  }
};

export const getModifiedRunTime = (num: number | undefined) => {
  if (!num) {
    return;
  }

  const hour = Math.floor(num / 60);
  const minute = num - (60 * hour);

  return `${hour}:${minute}:00`;
};

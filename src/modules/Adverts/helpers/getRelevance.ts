import { GREEN, RED, YELLOW } from "../../../consts/colors";

const getRelevance = (updatedAt: number) => {
  const date = new Date();


  const diff = date.getTime() - updatedAt; // Разница в миллисекундах
  return Math.floor(diff / 1000); // Разница в секундах
};

export const getRelevanceObj = (updatedAt: string) => {
  const date = new Date(updatedAt);


 

  const relevance = getRelevance(date.getTime());
  if (relevance < 60) {
    return {
      string: relevance + " сек",
      color: GREEN,
    };
  } else if (relevance <= 60 * 60) {
    return {
      string: Math.floor(relevance / 60) + " мин",
      color: GREEN,
    };
  } else if (relevance <= 60 * 60 * 24) {
    return {
      string: Math.floor(relevance / (60 * 60)) + " ч",
      color: GREEN,
    };
  } else {
    const numberValue = Math.floor(relevance / (60 * 60 * 24));
    return {
      string: numberValue + " дн",
      color: numberValue < 2 ? YELLOW : RED,
    };
  }
};

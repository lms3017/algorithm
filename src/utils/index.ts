export const generateArray = (size: number) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size));
  }
  return arr;
};

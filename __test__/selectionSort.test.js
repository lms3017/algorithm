import { selectionSort } from '../sorting/selectionSort';
describe('선택 정렬', () => {
  test('정렬되지 않은 배열을 올바르게 정렬', () => {
    const unsortedArray = [64, 25, 12, 22, 11];
    const sortedArray = selectionSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 64]);
  });
});

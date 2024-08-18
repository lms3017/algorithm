import { mergeSort } from '../../src/sorting/mergeSort';
import { generateArray } from '../../src/utils';

describe('합병 정렬', () => {
  it('기본적인 정렬', () => {
    const unsortedArray = [64, 25, 12, 22, 11];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 64]);
  });
  it('이미 정렬된 배열 정렬', () => {
    const unsortedArray = [11, 12, 22, 25, 64];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 64]);
  });
  it('중복된 요소를 가진 배열 정렬', () => {
    const unsortedArray = [11, 12, 22, 25, 64];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 64]);
  });
  it('빈 배열 정렬', () => {
    const unsortedArray: number[] = [];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([]);
  });
  it('10,000개의 요소를 가진 배열을 1초 이내에 정렬', () => {
    const unsortedArray = generateArray(10000);
    const startTime = performance.now();
    mergeSort(unsortedArray);
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(1000);
  });
});

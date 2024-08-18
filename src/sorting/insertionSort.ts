// 삽입 정렬
export const insertionSort = (arr: number[]) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // 현재 요소(key)를 정렬된 부분(arr[0] ... arr[i-1])과 비교하여 삽입할 위치를 찾습니다.
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // 올바른 위치에 key를 삽입
  }

  return arr;
};

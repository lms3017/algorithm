// 버블 정렬
export const bubbleSort = (arr: number[]) => {
  const n = arr.length;
  let swapped;

  // 배열을 반복해서 정렬을 수행
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // 인접한 두 요소를 비교하여 필요한 경우 교환
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true; // 교환이 발생했음을 표시
      }
    }
    // 배열의 마지막 요소는 정렬된 상태이므로, 다음 반복에서는 제외
  } while (swapped); // 교환이 발생한 경우에만 반복

  return arr;
};

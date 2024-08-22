export const shellSort = (arr: number[]) => {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  // Gap을 점차 줄여가며 정렬
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i]; //7
      let j = i; // j:4 gap:4

      // Gap 크기만큼 떨어져 있는 요소들을 삽입 정렬 방식으로 정렬
      while (j >= gap && arr[j - gap] > temp) {
        // 4>=4
        arr[j] = arr[j - gap]; // arr[4]: 8
        j -= gap;
      }

      arr[j] = temp; // arr[0]: 7
    }

    // Gap을 반으로 줄임
    gap = Math.floor(gap / 2);
  }

  return arr;
};

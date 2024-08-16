export const selectionSort = (arr: number[]) => {
  const n = arr.length;

  // 배열의 각 요소를 순차적으로 확인
  for (let i = 0; i < n - 1; i++) {
    // 현재 위치에서 가장 작은 값의 인덱스를 찾기 위한 변수 초기화
    let minIndex = i;

    // 현재 위치의 다음 요소부터 끝까지 비교하여 최소값 탐색
    for (let j = i + 1; j < n; j++) {
      // 현재 비교 중인 요소가 현재까지의 최소값보다 작으면 minIndex 업데이트
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 최소값이 현재 위치의 값과 다를 경우, 두 값을 교환
    if (minIndex !== i) {
      // 배열 요소를 교환
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // 정렬된 배열 반환
  return arr;
};

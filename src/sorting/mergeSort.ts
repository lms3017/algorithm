// 합병 정렬
export const mergeSort = (arr: number[]): number[] => {
  // 배열의 길이가 1 이하이면 이미 정렬된 상태이므로 반환
  if (arr.length <= 1) {
    return arr;
  }

  // 배열을 중간에서 나누기 위한 중간 인덱스 계산
  const middleIndex = Math.floor(arr.length / 2);

  // 배열을 두 개의 부분 배열로 분할
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  // 재귀적으로 왼쪽과 오른쪽 배열을 정렬한 후, 병합하여 반환
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// 두 개의 정렬된 배열을 병합하는 함수
function merge(leftArray: number[], rightArray: number[]): number[] {
  const sortedArray = [];
  let i = 0; // 왼쪽 배열의 인덱스
  let j = 0; // 오른쪽 배열의 인덱스

  // 두 배열의 요소들을 비교하여 정렬된 배열에 추가
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i]);
      i++;
    } else {
      sortedArray.push(rightArray[j]);
      j++;
    }
  }

  // 왼쪽 배열의 남은 요소들을 정렬된 배열에 추가
  while (i < leftArray.length) {
    sortedArray.push(leftArray[i]);
    i++;
  }

  // 오른쪽 배열의 남은 요소들을 정렬된 배열에 추가
  while (j < rightArray.length) {
    sortedArray.push(rightArray[j]);
    j++;
  }

  return sortedArray;
}

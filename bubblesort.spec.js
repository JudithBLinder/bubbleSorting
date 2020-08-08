describe('bubbleSort', () => {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('largest index is at the end of list', () => {
    let arrIn = [2, 6, 3, 8, 5, 1, 9, 4, 6];
    const resBubble = bubbleSort(arrIn);
    const resSort = arrIn.sort((a, b) => a - b);

    for (let i = 0; i < resSort.length; i++) {
      expect(resSort[i]).toEqual(resBubble[i]);
    }
  })
})
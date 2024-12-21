import insertion_sort from "@code/InsertionSort";

test("insertion-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    debugger;
    // where is my debugger
    insertion_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
    const arr2 = [1, 2, 3, 4];
    insertion_sort(arr2);
    expect(arr2).toEqual([1, 2, 3, 4]);
    const arr3 = [4, 3, 2, 1];
    insertion_sort(arr3);
    expect(arr3).toEqual([1, 2, 3, 4]);
});

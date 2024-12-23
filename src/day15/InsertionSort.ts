export default function insertion_sort(arr: number[]): void {
   // double for loop version first
   // for (var i = 1; i < arr.length; i++) {
   //    var key = arr[i];
   //    for (var j = i; j > 0 && key < arr[j - 1]; j--) {
   //       // swap left
   //       var temp = arr[j];
   //       arr[j] = arr[j - 1];
   //       arr[j - 1] = temp;
   //    }
   // }

   // slightly more optimized shift version
   // insertion sort works by scanning the array from left to right, in order. as we go, we maintain a left pointer. everything
   // left of this pointer is in sorted order, and consists of data that we've seen so far. we incremenet the left pointer by one each iteration,
   // and at the end of that iteration, we add the new element to the sorted subarray by placing it in its sorted position
   for (var i = 1; i < arr.length; i++) {
      var j = i;
      var key = arr[j];
      while (j > 0 && key < arr[j - 1]) {
         arr[j] = arr[j - 1]; // shift right
         j--;
      }
      arr[j] = key;
   }
}
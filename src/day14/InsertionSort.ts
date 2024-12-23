export default function insertion_sort(arr: number[]): void {
   // insertion sort
   // scan the array from left to right
   // as we go, left subarray is maintained in sorted order based on the data we've seen so far
   // expand the frontier by one element at a time
   // when we see a new element, put it into the left subarray at its correct position. can do this either
   // by repeated exchanges, or by shifting and then placing it one time

   // for (var i = 1; i < arr.length; i++) {
   //    var key = arr[i];
   //    for (var j = i; j > 0 && key < arr[j - 1]; j--) {
   //       // shift
   //       arr[j] = arr[j - 1];
   //    }
   //    arr[j] = key;
   // }

   // for (var i = 1; i < arr.length; i++) {
   //    var key = arr[i];
   //    for (var j = i; j > 0 && key < arr[j - 1]; j--) {
   //       var temp = arr[j];
   //       arr[j] = arr[j - 1];
   //       arr[j - 1] = temp;
   //    }
   // }

   // place minimum element so it can serve as a sentinel and guard against extra work for sorted arrays
   var numExchanges = 0;
   for (var i = arr.length - 1; i > 0; i--) {
      // if this element is smaller than the element to its left, need to exchange
      if (arr[i] < arr[i - 1]) {
         var temp = arr[i];
         arr[i] = arr[i - 1];
         arr[i - 1] = temp;
         numExchanges++;
      }
   }

   if (numExchanges == 0) return;

   for (var i = 2; i < arr.length; i++) {
      var key = arr[i];
      var j = i;
      while(key < arr[j - 1]) {
         arr[j] = arr[j - 1];
         j--;
      }
      arr[j] = key;
   }
}
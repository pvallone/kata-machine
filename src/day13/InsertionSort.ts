export default function insertion_sort(arr: number[]): void {
   for (var i = 1; i < arr.length; i++) {
      var key = arr[i];
      for (var j = i; j > 0 && key < arr[j - 1]; j--) {
         arr[j] = arr[j - 1];
      }
      arr[j] = key;
   }
}
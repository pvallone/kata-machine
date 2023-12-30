export default function bs_list(haystack: number[], needle: number): boolean {
   // Gale's version, which I think is more intuitive, as it's symmetric.

   // Both bounds will be inclusive
   var left = 0;
   var right = haystack.length - 1;

   // Left === right means we have an array of size 1
   while (left <= right) {
      var mid = Math.floor(left + ((right - left))/2);
      if (haystack[mid] === needle) {
         return true;
      }

      if (needle > haystack[mid]) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
   }

   return false;
}

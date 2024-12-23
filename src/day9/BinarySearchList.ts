export default function bs_list(haystack: number[], needle: number): boolean {
   var left = 0;
   var right = haystack.length - 1;
   while (left <= right) {
      var mid = Math.floor((left + right)/2);
      if (needle > haystack[mid]) {
         left = mid + 1;
      } else if (needle < haystack[mid]) {
         right = mid - 1;
      } else {
         return true;
      }
   }

   return false;

}
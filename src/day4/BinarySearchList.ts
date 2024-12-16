export default function bs_list(haystack: number[], needle: number): boolean {
   var lo = 0;
   var hi = haystack.length - 1;
   while (lo <= hi) {
      var mid = Math.floor((lo +hi)/2);
      if (needle > haystack[mid]) {
         lo = mid + 1;
      } else if (needle < haystack[mid]) {
         hi = mid - 1;
      } else {
         return true;
      }
   }

   return false;
}
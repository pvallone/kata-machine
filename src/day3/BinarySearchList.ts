export default function bs_list(haystack: number[], needle: number): boolean {
   var lo = 0;
   var hi = haystack.length - 1;
   while (lo <= hi) {
      var mid = Math.floor((lo + hi) /2);
      if (haystack[mid] === needle) {
         return true;
      } else if (needle > haystack[mid]) {
         lo = mid + 1;
      } else {
         hi = mid - 1;
      }
   }
   return false;

}

// const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
// lo = 0, hi = 10, mid = 0 + (10 - 0) /2 = 5. haystack[mid] = haystack[5] = 81. 81 is > needle, needle is less than 81, so we should look in left array.
// lo = 0, hi = 4, mid = 2. haystack[mid] = 4, which is < needle. We should look in right array. we set lo to 3, and hi is 4
// lo = 3, hi = 4. mid = 3 + (4 - 3)/2 = 3 + 0 = 3. foo[3] = 69, so we win and return true
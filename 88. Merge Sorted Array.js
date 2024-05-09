function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    // 2
    let p2 = n - 1;
    // 2
    let p = m + n - 1;
    // 5
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            // 2 < 5   XXXXX
            nums1[p] = nums1[p1];
            // 5 ==  2 XXXXX
            p1--;
        } else {
            nums1[p] = nums2[p2];
            // 0 = 5 XXXX
            p2--;
            // 2
        }
        p--;
        // 5
    }
    
    // If there are remaining elements in nums2
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
}

let nnn =  [1,2,3,0,0,0]
let m = 3
let mmm = [2,5,6]
let n = 3
console.log(merge(nnn,m,mmm,n))
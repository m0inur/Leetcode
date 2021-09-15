class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        if(nums.size() == 1) return 0;
        for(int i = 0; i < nums.size(); i++){
            if(i == 0) {
                if(nums[i] > nums[i + 1]) {
                    return i;
                }
                continue;
            }
            if(i == nums.size() - 1) {
                if(nums[i] > nums[i - 1]) {
                    return i;
                }
                continue;
            }

            if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                return i;
            }
        }

        return 0;
    }
};

// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Find Peak Element
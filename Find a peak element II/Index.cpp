class Solution {
public:
    vector<int> findPeakGrid(vector<vector<int>>& mat) {
        vector<int> ans;
        for (int i = 0; i < mat.size(); i++)
        {
            for (int j = 0; j < mat[i].size(); j++)
            {
                // top 
                if(i - 1 < 0) {
                    if(mat[i][j] < -1) {
                        continue;
                    }
                } else {
                    if(mat[i][j] < mat[i - 1][j]){
                        continue;
                    }
                }

                // bottom 
                if(i + 1 >= mat.size()) {
                    if(mat[i][j] < -1) {
                        continue;
                    }
                } else {
                    if(mat[i][j] < mat[i + 1][j]){
                        continue;
                    }
                }

                // left
                if(j - 1 < 0) {
                    if (mat[i][j] < -1) {
                        continue;
                    }
                } else {
                    if(mat[i][j] < mat[i][j - 1]) {
                        continue;
                    }
                }

                // right
                if(j + 1 >= mat[i].size()) {
                    if (mat[i][j] < -1) {
                        continue;
                    }
                } else {
                    if(mat[i][j] < mat[i][j + 1]) {
                        continue;
                    }
                }

                ans = {i, j};
                return ans;
            }
        }

        ans = {0, 0};
        return ans;
    }
};
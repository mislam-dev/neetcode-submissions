class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> groups;
        for(auto word: strs) {
            string key = word; 
            sort(key.begin(), key.end());
            groups[key].push_back(word);
        }

        vector<vector<string>> result;
        for(auto [key, vec]: groups){
            result.push_back(vec);
        }

        return result;

    }

};

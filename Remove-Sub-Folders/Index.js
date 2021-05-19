/*
    Given a list of folders, remove all sub-folders in those folders and return in any order the folders after removing.
    
    If a folder[i] is located within another folder[j], it is called a sub-folder of it.
    
    The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, /leetcode and /leetcode/problems are valid paths while an empty string and / are not.
 
    Example 1:
        Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
        Output: ["/a","/c/d","/c/f"]
        Explanation: Folders "/a/b/" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
    
    Example 2:
        Input: folder = ["/a","/a/b/c","/a/b/d"]
        Output: ["/a"]
        Explanation: Folders "/a/b/c" and "/a/b/d/" will be removed because they are subfolders of "/a".
     
    Example 3:
        Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
        Output: ["/a/b/c","/a/b/ca","/a/b/d"]
 */

/**
 * @param {string[]} folder
 * @return {string[]}
 */
let removeSubfolders = function(folder) {
    folder.sort((a, b) => a.length - b.length);
    let mainFolders = [];
    for(let i = 0; i < folder.length; i++) {
        if(mainFolders.length === 0) {
            mainFolders.push(folder[i]);
            continue;
        }
        
        let loc = folder[i];
        let isSub = false;
        
        for(let j = 0; j < mainFolders.length; j++) {
            let index = loc.indexOf(mainFolders[j])
   
            if(index === -1 || loc[index + mainFolders[j].length] !== "/") continue;
            isSub = true;
            break;
        }
        
        if(!isSub) {
            mainFolders.push(loc);
        }
    }
    
    return mainFolders;
};
// Memory Usage: 50.2 MB, less than 100.00% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.
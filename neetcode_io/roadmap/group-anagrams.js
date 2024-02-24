/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Takes more time
// var groupAnagrams = function (strs) {
//     const alreadyGroupedIndexes = new Set();
//     const groups = [];
//     let strIndex = 0;
//     for (let str of strs) {
//         if (alreadyGroupedIndexes.has(strIndex)) {
//             strIndex++;
//             continue;
//         }
//         let everyGroup = [str];
//         alreadyGroupedIndexes.add(str);
//         for (i = strIndex + 1; i < strs.length; i++) {
//             if (str.length == strs[i].length && str.split('').sort().join('') == strs[i].split('').sort().join('') && !alreadyGroupedIndexes.has(i)) {
//                 everyGroup.push(strs[i]);
//                 alreadyGroupedIndexes.add(i);
//             }
//         }
//         groups.push(everyGroup);
//         strIndex++;
//     }
//     console.log(groups);
//     return groups;
// };

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams(["",""]);

groupAnagrams2 = function (strs) {
    const map = new Map();
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return Array.from(map.values());
}
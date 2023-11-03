import { expect, test } from 'vitest';

//https://leetcode.com/problems/longest-common-prefix/description/

/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

 */

function longestCommonPrefix(strs: Array<string>): string {
  let prefix = strs[0];

  for (let index = 1; index < strs.length; index++) {
    const current = strs[index];

    while (!current.startsWith(prefix)) {
      prefix = prefix.slice(0, Math.max(0, prefix.length - 1));
      if (prefix.length === 0) {
        return '';
      }
    }
  }
  return prefix;
}

test('Example 1', () => {
  const strs = ['flower', 'flow', 'flight'];
  const output = 'fl';
  expect(longestCommonPrefix(strs)).toStrictEqual(output);
});

test('Example 2', () => {
  const strs = ['dog', 'racecar', 'car'];
  const output = '';
  expect(longestCommonPrefix(strs)).toStrictEqual(output);
});

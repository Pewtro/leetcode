// https://leetcode.com/problems/valid-parentheses/

import { expect, test } from 'vitest';

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

function isValid(s: string): boolean {
  if (s.length === 1) {
    return false;
  }
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (const char of s) {
    const mappedChar = map[char as '(' | '[' | '{'];
    if (mappedChar) {
      stack.push(mappedChar);
    } else if (char !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

test('Example 1', () => {
  const s = '()';
  const output = true;
  expect(isValid(s)).toBe(output);
});

test('Example 2', () => {
  const s = '()[]{}';
  const output = true;
  expect(isValid(s)).toBe(output);
});

test('Example 3', () => {
  const s = '(]';
  const output = false;
  expect(isValid(s)).toBe(output);
});

test('Example 4', () => {
  const s = '((';
  const output = false;
  expect(isValid(s)).toBe(output);
});

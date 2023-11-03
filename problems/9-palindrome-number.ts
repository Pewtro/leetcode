// https://leetcode.com/problems/palindrome-number/description/

/** 
 * Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

import { expect, test } from 'vitest';

function isPalindrome(x: number): boolean {
  //Negative can never be palindrome since it has "-" in front
  if (x < 0) {
    return false;
  }

  //Single digit number is always palindrome
  if (x < 10) {
    return true;
  }

  const reversedNumber = [...x.toString()].reverse().join('');
  return x.toString() === reversedNumber;
}

// Tests

test('Example 1', () => {
  const x = 121;
  const output = true;
  expect(isPalindrome(x)).toStrictEqual(output);
});

test('Example 2', () => {
  const x = -121;
  const output = false;
  expect(isPalindrome(x)).toStrictEqual(output);
});

test('Example 3', () => {
  const x = 10;
  const output = false;
  expect(isPalindrome(x)).toStrictEqual(output);
});

test('Example 4', () => {
  const x = 1_000_021;
  const output = false;
  expect(isPalindrome(x)).toStrictEqual(output);
});

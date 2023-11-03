//https://leetcode.com/problems/roman-to-integer/description/

import { expect, test } from 'vitest';

/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */

function romanToInt(s: string): number {
  const romanToIntegerMap = new Map<string, number>();
  romanToIntegerMap.set('I', 1);
  romanToIntegerMap.set('V', 5);
  romanToIntegerMap.set('X', 10);
  romanToIntegerMap.set('L', 50);
  romanToIntegerMap.set('C', 100);
  romanToIntegerMap.set('D', 500);
  romanToIntegerMap.set('M', 1000);

  let sum = 0;

  for (let index = 0; index < s.length; index++) {
    const current = romanToIntegerMap.get(s[index]);
    const next = romanToIntegerMap.get(s[index + 1]);
    if (!current) {
      continue;
    }
    if (index === s.length - 1) {
      sum += current;
      break;
    }
    if (!next) {
      continue;
    }
    if (current < next) {
      sum += next - current;
      index++;
    } else {
      sum += current;
    }
  }

  return sum;
}

test('Example 1', () => {
  const s = 'III';
  const output = 3;
  expect(romanToInt(s)).toStrictEqual(output);
});

test('Example 2', () => {
  const s = 'LVIII';
  const output = 58;
  expect(romanToInt(s)).toStrictEqual(output);
});

test('Example 3', () => {
  const s = 'MCMXCIV';
  const output = 1994;
  expect(romanToInt(s)).toStrictEqual(output);
});

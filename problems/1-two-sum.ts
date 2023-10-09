/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 * Constraints:
 *
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 *
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

import { expect, test } from 'vitest';

export function twoSum(nums: Array<number>, target: number): Array<number> {
  const map = new Map<number, number>();
  for (const [index, number_] of nums.entries()) {
    const complement = target - number_;
    const complementIndex = map.get(complement);
    if (complementIndex !== undefined) {
      return [complementIndex, index];
    }
    map.set(number_, index);
  }
  return [];
}

test('Example 1', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const output = [0, 1];
  expect(twoSum(nums, target)).toStrictEqual(output);
});

test('Example 2', () => {
  const nums = [3, 2, 4];
  const target = 6;
  const output = [1, 2];
  expect(twoSum(nums, target)).toStrictEqual(output);
});

test('Example 3', () => {
  const nums = [3, 3];
  const target = 6;
  const output = [0, 1];
  expect(twoSum(nums, target)).toStrictEqual(output);
});

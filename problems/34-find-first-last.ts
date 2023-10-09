/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 *
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 *
 * Constraints:
 *
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums is a non-decreasing array.
 * -109 <= target <= 109
 */

import { expect, test } from 'vitest';

function findFirst(nums: Array<number>, target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    if (nums[mid] === target) {
      first = mid;
    }
  }
  return first;
}

function findLast(nums: Array<number>, target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let last = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (nums[mid] === target) {
      last = mid;
    }
  }
  return last;
}

function searchRange(nums: Array<number>, target: number): Array<number> {
  const first = findFirst(nums, target);
  const last = findLast(nums, target);
  return [first, last];
}

test('Example 1', () => {
  const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
  const output = [3, 4];
  expect(searchRange(nums, target)).toStrictEqual(output);
});

test('Example 2', () => {
  const nums = [5, 7, 7, 8, 8, 10],
    target = 6;
  const output = [-1, -1];
  expect(searchRange(nums, target)).toStrictEqual(output);
});

test('Example 3', () => {
  const nums: Array<number> = [],
    target = 0;
  const output = [-1, -1];
  expect(searchRange(nums, target)).toStrictEqual(output);
});

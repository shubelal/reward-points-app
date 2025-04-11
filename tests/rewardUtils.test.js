import { calculateRewardPoints } from '../src/helpers/rewardUtils';

test('Reward points calculation', () => {
  expect(calculateRewardPoints(120)).toBe(90);
  expect(calculateRewardPoints(100.4)).toBe(50);
  expect(calculateRewardPoints(99.9)).toBe(49);
  expect(calculateRewardPoints(50)).toBe(0);
});

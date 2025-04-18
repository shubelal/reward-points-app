// import { calculatePoints } from '../calculateRewards';
import {calculatePoints} from '../src/components/utils/calculateRewards'

describe('calculatePoints', () => {
  it('returns 0 for amount <= 50', () => {
    expect(calculatePoints(30)).toBe(0);
  });

  it('returns correct points for amount between 51 and 100', () => {
    expect(calculatePoints(70)).toBe(20);
  });

  it('returns correct points for amount over 100', () => {
    expect(calculatePoints(120)).toBe(90); // 2 * 20 + 50
  });

  it('handles string amount', () => {
    expect(calculatePoints("120")).toBe(90);
  });
});

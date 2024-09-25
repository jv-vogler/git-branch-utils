import { wrapi } from '@/shared/helpers';

describe('wrapi', () => {
  describe('when a value above max is passed', () => {
    it('returns the minimum value', () => {
      const value = 11;
      const max = 10;
      const min = 0;

      const result = wrapi(value, max, min);

      expect(result).toEqual(min);
    });
  });

  describe('when a value below min is passed', () => {
    it('returns the maximum value', () => {
      const value = 0;
      const max = 10;
      const min = 1;

      const result = wrapi(value, max, min);

      expect(result).toEqual(max);
    });
  });

  describe('when a min value is not passed', () => {
    it('defaults min value to 0', () => {
      const value = 11;
      const max = 10;

      const result = wrapi(value, max);

      expect(result).toEqual(0);
    });
  });

  it('returns the passed value', () => {
    const value = 5;
    const max = 10;
    const min = 0;

    const result = wrapi(value, max, min);

    expect(result).toEqual(value);
  });
});

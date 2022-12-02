import { renderHook } from '@testing-library/react';
import { useMixpanel } from '../';

const mockIdentity = 'mock-identity';

jest.mock('mixpanel-browser', () => ({
  get_distinct_id: jest.fn().mockImplementation(() => mockIdentity),
  identify: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('return mixpanel instance', () => {
  const { result } = renderHook(() => useMixpanel());
  expect(result.current).toBeTruthy();
});

it('return instance with identity', () => {
  const { result } = renderHook(() => useMixpanel(mockIdentity));

  expect(result.current).toBeTruthy();
  expect(result.current.get_distinct_id()).toBe(mockIdentity);
});

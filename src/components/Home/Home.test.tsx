import {
  act,
  getAllByTestId,
  cleanup,
  render,
  screen,
} from '@testing-library/react';
import Home from './Home';

jest.mock('axios');

let container: HTMLElement;

beforeEach(async () => {
  await act(async () => {
    container = render(<Home />).container;
  });
});

afterEach(cleanup);

it('should show homes', () => {
  const homes = getAllByTestId(container, 'home');

  expect(homes.length).toBeGreaterThan(0);
});

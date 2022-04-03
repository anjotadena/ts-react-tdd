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

beforeEach(async () => {});

afterEach(cleanup);

it('should show homes', async () => {
  await act(() => {
    container = render(<Home />).container;
  });

  const homes = getAllByTestId(container, 'home');

  expect(homes.length).toBeGreaterThan(0);
});

import {
  getAllByTestId,
  cleanup,
  render,
  waitFor,
} from '@testing-library/react';
import Home from './Home';

jest.mock('axios');

let container: HTMLElement;

describe('Home component', () => {
  beforeEach(async () => {
    await waitFor(() => {
      container = render(<Home />).container;
    });
  });

  afterEach(cleanup);

  it('should show homes', async () => {
    const homes = getAllByTestId(container, 'home');

    expect(homes.length).toBeGreaterThan(0);
  });
});

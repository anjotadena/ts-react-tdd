import { act, getAllByTestId, cleanup, render, screen } from '@testing-library/react';
import axios from 'axios';
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

    console.log(container.innerHTML);

    expect(homes.length).toBeGreaterThan(0);
});



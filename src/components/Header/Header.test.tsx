import { getByTestId, render, screen } from '@testing-library/react';
import Header from './Header';

let container: HTMLElement;

beforeEach(() => {
  container = render(<Header />).container;
});

it('should show logo', () => {
  expect(getByTestId(container, 'logo')).toBeTruthy();
});

it('should have search', () => {
  expect(getByTestId(container, 'search')).toBeTruthy();
});

it('should have search', () => {
  expect(getByTestId(container, 'menu')).toBeTruthy();
});

it('should have filters', () => {
  expect(getByTestId(container, 'home-type')).toBeTruthy();
  expect(getByTestId(container, 'dates')).toBeTruthy();
  expect(getByTestId(container, 'guests')).toBeTruthy();
  expect(getByTestId(container, 'price')).toBeTruthy();
  expect(getByTestId(container, 'rooms')).toBeTruthy();
  expect(getByTestId(container, 'amenities')).toBeTruthy();
});

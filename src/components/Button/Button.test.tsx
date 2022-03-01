import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('renders button', () => {
  it('xx', () => {
    render(<Button label="test" />);

    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  });
});

import { cleanup, getByTestId, render, screen } from '@testing-library/react';
import Textarea from './Textarea';

let container: HTMLElement;

describe('renders textarea', () => {
  beforeEach(() => {
    container = render(
      <Textarea value="test" onChange={(_) => {}} />
    ).container;
  });

  afterEach(cleanup);

  it('should have a value', () => {
    const textarea = getByTestId(container, 'textarea') as HTMLTextAreaElement;

    expect(textarea.value).toEqual('test');
  });
});

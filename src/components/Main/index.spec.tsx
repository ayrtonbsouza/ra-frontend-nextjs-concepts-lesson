import { render, screen } from '@testing-library/react';

import Main from './index';

describe('Main Component', () => {
  it('should be able to render the main component', () => {
    const { container } = render(<Main />);
    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

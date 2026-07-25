import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const { unmount } = render(<App />, { container: div });
    unmount();

    document.body.removeChild(div);
  });
});
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';

describe('Weather', () => {
  it('shows correct heading text', () => {
    render(<Weather />);

    const headingWelcome = screen.getByText(/welcome/i);
    const headingBrandName = screen.getByText(/WeatherLy/i);

    expect(headingWelcome).toBeInTheDocument();
    expect(headingBrandName).toBeInTheDocument();
  });
});

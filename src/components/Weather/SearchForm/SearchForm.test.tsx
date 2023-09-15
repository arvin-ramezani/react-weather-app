import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

const renderComponent = () => {
  const props = {
    onSearch: () => {},
  };

  return render(<SearchForm onSearch={props.onSearch} />);
};

describe('<SearchForm />', () => {
  it('shows a input and button for search', async () => {
    renderComponent();

    const input = screen.getByRole('searchbox', { name: /City Search/i });

    expect(input).toBeInTheDocument();
  });
});

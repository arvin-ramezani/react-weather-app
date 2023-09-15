import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import SearchForm from './SearchForm';

const props = {
  onSearch: vi.fn(() => {}),
};

const renderComponent = () => {
  return render(<SearchForm onSearch={props.onSearch} />);
};

describe('<SearchForm />', () => {
  it('shows a input and button for search', () => {
    renderComponent();

    const input = screen.getByRole('searchbox', { name: /City Search/i });
    const button = screen.getByRole('button', { name: /Search Weather/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call onSearch prop if user clicks on search button', async () => {
    renderComponent();

    const input = screen.getByRole('searchbox', { name: /City Search/i });
    await userEvent.type(input, 'London');

    const button = screen.getByRole('button', { name: /Search Weather/i });
    await userEvent.click(button);

    expect(props.onSearch).toHaveBeenCalledOnce();
  });

  it('should show invalid input text if user try to search with empty input value', async () => {
    renderComponent();

    const button = screen.getByRole('button', { name: /Search Weather/i });
    await userEvent.click(button);

    const invalidInputText = screen.getByText(/Please enter valid city name/i);

    expect(invalidInputText).toBeInTheDocument();
  });

  it('should not show invalid input text if input has valid value', async () => {
    renderComponent();

    const input = screen.getByRole('searchbox', { name: /City Search/i });
    await userEvent.type(input, 'London');

    const button = screen.getByRole('button', { name: /Search Weather/i });
    await userEvent.click(button);

    const invalidInputText = screen.queryByText(
      /Please enter valid city name/i
    );

    expect(invalidInputText).not.toBeInTheDocument();
  });

  it('should hide the invalid text if the user types a valid city name after clicking with empty input value.', async () => {
    renderComponent();

    const input = screen.getByRole('searchbox', { name: /City Search/i });
    const button = screen.getByRole('button', { name: /Search Weather/i });

    await userEvent.click(button);
    await userEvent.type(input, 'London');

    await userEvent.click(button);

    const invalidInputText = screen.queryByText(
      /Please enter valid city name/i
    );

    setTimeout(() => {
      expect(invalidInputText).not.toBeInTheDocument();
    }, 0);
  });

  it('should call onSearch() prop the correct value which user types ', async () => {
    renderComponent();

    const searchTerm = 'London';

    const input = screen.getByRole('searchbox', { name: /City Search/i });
    await userEvent.type(input, searchTerm);

    const button = screen.getByRole('button', { name: /Search Weather/i });
    await userEvent.click(button);

    expect(props.onSearch).toHaveBeenCalledWith(searchTerm);
  });
});

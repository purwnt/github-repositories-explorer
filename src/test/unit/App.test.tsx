// Imports
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '@/App';

// Tests
describe('Renders main page correctly', async () => {
  // Resets all renders after each test
  afterEach(() => {
    cleanup();
  });

  it('Should render input form correctly', async () => {
    // Setup
    render(<App></App>);
    const input = await screen.queryByPlaceholderText('Enter username');

    // Expectations
    expect(input).not.toBeNull();
  });

  it('Should render input form correctly', async () => {
    // Setup
    render(<App></App>);
    const button = await screen.queryByText('Search');

    // Expectations
    expect(button).not.toBeNull();
  });
});


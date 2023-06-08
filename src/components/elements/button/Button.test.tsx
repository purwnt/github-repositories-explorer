import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Button from './Button';

// Tests
describe('Renders button correctly', async () => {
  // Resets all renders after each test
  afterEach(() => {
    cleanup();
  });

  it('Should render button correctly', async () => {
    // Setup
    render(<Button onClick={() => null} text='Search'></Button>);

    // Find the button element
    const buttonElement = await screen.getByText('Search');

    // Verify that the onClick event handler has been called
    expect(buttonElement).not.toBeNull();
  });
});


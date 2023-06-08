import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Input from './Input';

// Tests
describe('Renders Input correctly', async () => {
  // Resets all renders after each test
  afterEach(() => {
    cleanup();
  });

  it('Should render input form correctly', async () => {
    // Setup
    render(
      <Input
        onChange={() => null}
        onReset={() => null}
        placeholder='Sample placeholder'
      ></Input>
    );

    // Find the button element
    const input = await screen.queryByPlaceholderText('Sample placeholder');

    // Expectations
    expect(input).not.toBeNull();
  });
});


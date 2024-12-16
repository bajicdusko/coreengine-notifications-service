// Increase the default timeout for all tests
jest.setTimeout(10000);

// Add custom matchers or global test configurations here if needed
beforeAll(() => {
  // Global setup before all tests
});

afterAll(() => {
  // Global cleanup after all tests
});

// Optional: Add custom matchers
expect.extend({
  // Add custom matchers here if needed
}); 
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Profile from '../views/Profile';

import { cleanup } from '@testing-library/vue';
afterEach(cleanup);

it('renders information about meetups that the user has signed up for', async () => {
  render(Profile);
  const abc = screen.getByText('Your meetups');
  expect(abc).toBeInTheDocument();
});

it('It renders Profile details correctly', async () => {
  render(Profile);
  const abc = screen.getByTestId('profile-heading');
  expect(abc).toBeInTheDocument();
});

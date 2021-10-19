import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import App from './App.vue';
import userEvent from '@testing-library/user-event';
import router from './routes/router';

import { cleanup } from '@testing-library/vue';

afterEach(cleanup);

describe('Routing', () => {
  it('displays homepage at /', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    router.replace('/');
    await router.isReady();
    const page = screen.queryByTestId('home-page');
    expect(page).toBeInTheDocument();
  });

  it('does not display profile page when at /', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    router.replace('/');
    await router.isReady();
    const page = screen.queryByTestId('profile-page');
    expect(page).not.toBeInTheDocument();
  });

  it('displays profile page when at /profile', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    router.replace('/profile');
    await router.isReady();
    const page = screen.queryByTestId('profile-page');
    expect(page).toBeInTheDocument();
  });
  it('does not display HomePage page when at /profile', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    router.replace('/profile');
    await router.isReady();
    const page = screen.queryByTestId('home-page');
    expect(page).not.toBeInTheDocument();
  });

  it('has link to homepage on Navbar', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    await router.isReady();
    const link = await screen.findByRole('link', { name: 'Home' });
    expect(link).toBeInTheDocument();
  });

  it('has link to the profile page on Navbar', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    await router.isReady();
    const link = await screen.findByRole('link', { name: 'Profile' });
    expect(link).toBeInTheDocument();
  });

  it('displays profile page after clicking on the profile link', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    await router.isReady();
    const link = screen.queryByRole('link', { name: 'Profile' });
    await userEvent.click(link);
    const page = await screen.findByTestId('profile-page');
    expect(page).toBeInTheDocument();
  });

  it('displays homepage after clicking on the home link', async () => {
    render(App, {
      global: { plugins: [router] },
    });
    await router.isReady();
    const link = screen.queryByRole('link', { name: 'Home' });
    await userEvent.click(link);
    const page = await screen.findByTestId('home-page');
    expect(page).toBeInTheDocument();
  });
});



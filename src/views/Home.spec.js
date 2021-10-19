import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Home from '../views/Home';

import { cleanup } from '@testing-library/vue';

afterEach(cleanup);

const meetup = {
  imageUrl: ' https://dummyimage.com/300.png/09f/fff',
  id: '1',
  title: 'Women In Tech',
  date: 'October 28, 2021',
  location: 'Gothenburg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ',
};

describe('Home.vue', () => {
  it('renders meetup title', () => {
    const { getByText } = render(Home, {
      props: { meetup },
    });
    expect(getByText(meetup.title)).toBeInTheDocument;
  });

  it('renders the meetup date', () => {
    const { getByText } = render(Home, {
      props: { meetup },
    });
    expect(getByText(meetup.date)).toBeInTheDocument;
  });
  it('renders the meetup location', () => {
    const { getAllByText } = render(Home, {
      props: { meetup },
    });
    expect(getAllByText(meetup.location)).toBeInTheDocument;
  });
  it('renders the meetup description', async () => {
    const { findAllByText } = render(Home, {
      props: { meetup },
    });
    await expect(findAllByText(meetup.description)).toBeInTheDocument;
  });

  it('shows the "Cancel meetup" button', () => {
    const { getAllByTestId } = render(Home);
    expect(getAllByTestId('cancel')).toBeInTheDocument;
  });

  it('shows the "Register meetup" button', () => {
    const { getAllByTestId } = render(Home);
    expect(getAllByTestId('register')).toBeInTheDocument;
  });

  test('"that the Register meetup" clicks through', () => {
    const { getAllByText } = render(Home);
    const button = getAllByText('Register');
    fireEvent.click(button);
  });

  test('"that the Cancel meetup" button clicks through', () => {
    const { getAllByText } = render(Home);
    const button = getAllByText('Cancel');
    fireEvent.click(button);
  });
});

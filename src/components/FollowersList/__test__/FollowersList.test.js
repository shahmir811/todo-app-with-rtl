import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe('FollowersList', () => {
	beforeEach(() => {
		jest.mock('../../../__mocks__/axios.js');
	});

	it('should fetch and render an element', async () => {
		render(<MockFollowersList />);

		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		expect(followerDivElement).toBeInTheDocument();
	});

	it('should fetch and render an input element', async () => {
		render(<MockFollowersList />);

		const followerDivElement = await screen.findByTestId(`follower-item-0`);
		// screen.debug();
		expect(followerDivElement).toBeInTheDocument();
	});
});

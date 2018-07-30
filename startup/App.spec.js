import App from './App';

describe('App', () => {
    it('Will render', () => {
        expect(App).toMatchSnapshot();
    });
});

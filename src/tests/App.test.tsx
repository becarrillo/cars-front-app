import { create } from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
  test('renders learn react link', () => {
    const component = create(<App />);
    expect(component).toBeDefined();
  });
})

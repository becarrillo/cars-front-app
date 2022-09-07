import { create } from 'react-test-renderer';
import App from '../src/App';

test('renders learn react link', () => {
  const component = create(<App />);
  expect(component).toBeDefined();
});

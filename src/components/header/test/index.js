import renderer from 'react-test-renderer';
import Header from '../index';

describe( 'Test Header Component', () => {
	it( 'Should match Header snapshot and render correctly', () => {
		const component = renderer.create( <Header /> );
		const tree = component.toJSON();
		expect( tree ).toMatchSnapshot();
	} );
} );

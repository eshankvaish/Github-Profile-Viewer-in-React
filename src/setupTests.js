import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
});
// For i-18n
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

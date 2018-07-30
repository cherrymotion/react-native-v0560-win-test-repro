import mocks from 'react-native-jest-mocks';

mocks.initAll();

// Disable some of the HMR components
global.window = false;

// Set a static timezone regardless of system timezone - to handle CI testing
jest.mock('moment', () => {
    const realMoment = require.requireActual('moment');
    const moment = require.requireActual('moment-timezone');
    moment.tz.setDefault('America/Chicago');
    moment.isMocked = true;
    moment.ISO_8601 = realMoment.ISO_8601;
    return moment;
});

console.log('setup complete!');
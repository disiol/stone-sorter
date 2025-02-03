import '@testing-library/jest-dom';

const { TextEncoder, TextDecoder } = require('util');

// Поліфіл для TextEncoder і TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

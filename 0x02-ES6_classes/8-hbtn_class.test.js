import HolbertonClass from './8-hbtn_class.js';

describe('HolbertonClass', () => {
    // Test constructor
    test('constructor initializes attributes correctly', () => {
        const hc = new HolbertonClass(12, 'Mezzanine');
        expect(hc._size).toBe(12);
        expect(hc._location).toBe('Mezzanine');
    });

    // Test size attribute getter
    test('size getter', () => {
        const hc = new HolbertonClass(12, 'Mezzanine');
        expect(hc.size).toBe(12);
    });

    // Test location attribute getter
    test('location getter', () => {
        const hc = new HolbertonClass(12, 'Mezzanine');
        expect(hc.location).toBe('Mezzanine');
    });

    // Test casting to Number
    test('casting to Number returns size', () => {
        const hc = new HolbertonClass(12, 'Mezzanine');
        expect(Number(hc)).toBe(12);
    });

    // Test casting to String
    test('casting to String returns location', () => {
        const hc = new HolbertonClass(12, 'Mezzanine');
        expect(String(hc)).toBe('Mezzanine');
    });
});

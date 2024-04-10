import 'jest';

import { secondLastFriday } from '../index.js';

describe('secondLastFriday', () => {
    test('should give correct date for year 2023, month 10', () => {
        // GIVEN: the year and month combinations
        const year = 2023;
        const month = 10;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        const expectedDate = 20;
        // THEN: correct value should be returned
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2000, month 1', () => {
        // GIVEN: the year and month combinations
        const year = 2000;
        const month = 1;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 21;
        expect(result).toBe(expectedDate);
    });

    test('should give correct date for year 1999, month 6', () => {
        // GIVEN: the year and month combinations
        const year = 1999;
        const month = 6;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 18;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2020, month 2', () => {
        // GIVEN: the year and month combinations
        const year = 2020;
        const month = 2;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 21;
        expect(result).toBe(expectedDate);
    });
    
    // ${} | ${} | ${}
    test('should give correct date for year 1984, month 11', () => {
        // GIVEN: the year and month combinations
        const year = 1984;
        const month = 11;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 23;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2007, month 9', () => {
        // GIVEN: the year and month combinations
        const year = 2007;
        const month = 9;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 21;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 1', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 1;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 19;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 2', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 2;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 16;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 3', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 3;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 22;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 4', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 4;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 19;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 5', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 5;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 24;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 6', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 6;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 21;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 7', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 7;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 19;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 8', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 8;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 23;
        expect(result).toBe(expectedDate);
    });
    
    test('should give correct date for year 2024, month 9', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 9;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 20;
        expect(result).toBe(expectedDate);
    });
    
    // ${} | ${} | ${}
    test('should give correct date for year 2024, month 10', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 10;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 18;
        expect(result).toBe(expectedDate);
    });
    
    // ${} | ${} | ${}
    test('should give correct date for year 2024, month 11', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 11;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 22;
        expect(result).toBe(expectedDate);
    });
    
    // ${} | ${} | ${}
    test('should give correct date for year 2024, month 12', () => {
        // GIVEN: the year and month combinations
        const year = 2024;
        const month = 12;

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        const expectedDate = 20;
        expect(result).toBe(expectedDate);
    });    
});

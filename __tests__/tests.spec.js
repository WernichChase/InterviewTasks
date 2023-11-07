import 'jest';

import { secondLastFriday } from '../index.js';

describe('secondLastFriday', () => {
    test.each`
        year    | month | expectedDate
        ${2023} | ${10} | ${20}
        ${2000} | ${1}  | ${21}
        ${1999} | ${6}  | ${18}
        ${2020} | ${2}  | ${21}
        ${1984} | ${11} | ${23}
        ${2007} | ${9}  | ${21}
        ${2024} | ${1}  | ${19}
        ${2024} | ${2}  | ${16}
        ${2024} | ${3}  | ${22}
        ${2024} | ${4}  | ${19}
        ${2024} | ${5}  | ${24}
        ${2024} | ${6}  | ${21}
        ${2024} | ${7}  | ${19}
        ${2024} | ${8}  | ${23}
        ${2024} | ${9}  | ${20}
        ${2024} | ${10} | ${18}
        ${2024} | ${11} | ${22}
        ${2024} | ${12} | ${20}
        `('should give correct date for $year-$month', ({year, month, expectedDate}) => {
        // GIVEN: the year and month combinations

        // WHEN: secondLastFriday called
        const result = secondLastFriday(year, month);

        // THEN: correct value should be returned
        expect(result).toBe(expectedDate);
    });
});

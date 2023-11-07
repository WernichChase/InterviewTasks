/**
 * Calculates the date that the second-to-last Friday will fall on given the
 * year and month.
 * @param year The year value
 * @param month The month value. NB: month value is NOT 0 indexed like with
 * JS, so January is 1, February is 2, etc..
 * @returns A number representing the date of the second to last Friday for the
 * given year and month.
 */
export function secondLastFriday(year, month) {
    const date = new Date(year, month, 1);

    return date.getDate();
}

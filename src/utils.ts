export function timeAgo(dateTime1: number, dateTime2: number): string {
    const date1 = new Date(dateTime1);
    const date2 = new Date(dateTime2);
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();

    let years = year2 - year1;
    let months = month2 - month1;

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearString = years === 1 ? '1 year' : `${years} years`;
    const monthString = months === 1 ? '1 month' : `${months} months`;

    if (years === 0) {
        return `${monthString}`;
    } else if (months === 0) {
        return `${yearString}`;
    } else {
        return `${yearString}, ${monthString}`;
    }
}

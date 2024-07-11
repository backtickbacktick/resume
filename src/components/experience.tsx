import data from '../data';

export default function Experience({ page }: { page: number }) {
    const items = data.experience.sort((a, b) => (a.startedOn > b.startedOn ? -1 : 1));

    const formatDate = (dateTime: number) => {
        const date = new Date(dateTime);

        return date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        });
    };

    function timeAgo(dateTime1: number, dateTime2: number): string {
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

    return (
        <section className="experience">
            <h2>Experience {page > 1 && <span className="continued">(continued)</span>}</h2>
            {items
                .filter((item) => item.page === page)
                .map((item, index) => (
                    <aside key={index}>
                        <h3 className="title">{item.title}</h3>
                        <h4 className="company">{item.companyName}</h4>
                        <div className="time">
                            {formatDate(item.startedOn)} -{' '}
                            {item.finishedOn ? formatDate(item.finishedOn) : 'Present'}
                            <span>{timeAgo(item.startedOn, item.finishedOn || new Date().getTime())}</span>
                        </div>
                        <ul>
                            {item.description.map((desc) => (
                                <li>{desc}</li>
                            ))}
                        </ul>
                    </aside>
                ))}
        </section>
    );
}

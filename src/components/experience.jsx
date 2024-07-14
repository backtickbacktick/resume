import React from 'react';
import data from '../data';
import { usePage } from './page';

/**
 * @param {object}  props
 * @param {boolean|undefined}  props.volunteer
 * @param {boolean|undefined}  props.continued
 */
export default function Experience({ volunteer, continued }) {
    const items = data.experience.sort((a, b) => (a.startedOn > b.startedOn ? -1 : 1));

    /**
     * @param {number}  dateTime
     */
    const formatDate = (dateTime) => {
        const date = new Date(dateTime);

        return date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        });
    };

    const page = usePage();

    return (
        <section className="experience">
            <h2>
                {volunteer && 'Volunteer '}Experience
                {continued && (
                    <>
                        {' '}
                        <span className="continued">(continued)</span>
                    </>
                )}
            </h2>
            {items
                .filter((item) => {
                    if (!item.volunteer !== !volunteer) {
                        return false;
                    }
                    if (item.page && item.page !== page) {
                        return false;
                    }
                    return true;
                })
                .map((item, index) => (
                    <aside key={index}>
                        <h3 className="title">{item.title}</h3>
                        <div className="company-time">
                            <h4 className="company">{item.companyName}</h4>
                            <div className="time">
                                {formatDate(item.startedOn)} -{' '}
                                {item.finishedOn ? formatDate(item.finishedOn) : 'Present'}
                            </div>
                        </div>
                        <ul>
                            {item.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </aside>
                ))}
        </section>
    );
}

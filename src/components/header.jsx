// @ts-check
import React from 'react';
import { usePage } from './page';
import data from '../data';

export default function Header() {
    const page = usePage();

    return (
        <header>
            <div className="title">
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
            </div>
            <div className="contact">
                <ul>
                    {data.contactLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {page === 1 && <p className="intro">{data.introduction}</p>}
        </header>
    );
}

//@ts-check
import React from 'react';
import { usePage } from './page';
import data from '../data';

export default function Footer() {
    const page = usePage();

    return (
        <footer>
            <div>{data.title}</div>
            <div>Unicorn Software Engineer</div>
            <div>Page {page}</div>
        </footer>
    );
}

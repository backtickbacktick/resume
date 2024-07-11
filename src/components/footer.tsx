import { usePage } from './page';

export default function Footer() {
    const page = usePage();

    return (
        <footer>
            <div>Brian S. Reed</div>
            <div>Unicorn Software Engineer</div>
            <div>Page {page}</div>
        </footer>
    );
}

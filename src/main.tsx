import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Experience from './components/experience';
import Page from './components/page';
import SkillsCertifications from './components/skills-certifications';
import Footer from './components/footer';

[
    { weight: 300, url: 'Metropolis-Regular.woff2' },
    { weight: 600, url: 'Metropolis-SemiBold.woff2' },
].forEach(async ({ url, weight }) =>
    document.fonts.add(
        await new FontFace('base', `url(/fonts/${url})`, {
            weight: weight.toString(),
        }).load()
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Page page={1}>
            <Header />
            <main>
                <SkillsCertifications />
                <Experience />
            </main>
            <Footer />
        </Page>
        <Page page={2}>
            <Header />
            <main data-col>
                <Experience continued />
                <Experience volunteer />
                <p className="quote">
                    <span>Everything is designed. Few things are designed well.</span>
                    <span className="source">- Me</span>
                </p>
            </main>
            <Footer />
        </Page>
    </React.StrictMode>
);

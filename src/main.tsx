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
        <Page>
            <Header />
            <main>
                <SkillsCertifications />
                <Experience page={1} />
            </main>
            <Footer page={1} />
        </Page>
        <Page>
            <Header hideIntro />
            <main data-col>
                <Experience page={2} />
                <p className="quote">
                    <span>Everything is designed. Few things are designed well.</span>
                    <span className="source">- Me</span>
                </p>
            </main>
            <Footer page={2} />
        </Page>
    </React.StrictMode>
);

import React from 'react';
import Header from './components/header';
import Experience from './components/experience';
import Page from './components/page';
import SkillsCertifications from './components/skills-certifications';
import Footer from './components/footer';

export default function App() {
    return (
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
                </main>
                <Footer />
            </Page>
        </React.StrictMode>
    );
}

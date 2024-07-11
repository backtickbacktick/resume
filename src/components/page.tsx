import { createContext, PropsWithChildren, useContext } from 'react';

const pageContext = createContext(1);

export function usePage() {
    return useContext(pageContext);
}

export default function Page(props: PropsWithChildren<{ page: number }>) {
    return (
        <div className="page">
            <pageContext.Provider value={props.page}>{props.children}</pageContext.Provider>
        </div>
    );
}

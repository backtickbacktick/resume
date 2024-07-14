import React, { createContext, useContext } from 'react';

const pageContext = createContext(1);

export function usePage() {
    return useContext(pageContext);
}

/**
 * @param {object}  props
 * @param {number}  props.page
 * @param {ReactNode}  props.children
 */
export default function Page(props) {
    return (
        <div className="page">
            <pageContext.Provider value={props.page}>{props.children}</pageContext.Provider>
        </div>
    );
}

import { PropsWithChildren } from 'react';

export default function Page(props: PropsWithChildren) {
    return <div className="page">{props.children}</div>;
}

import React from 'react';
import HighlightLink from './HighlightLink';

interface ComponentLinksProps {
    component: string,
    type: string,
    project: string,
}


const ComponentLinks: React.FC<ComponentLinksProps> = ({ component, type, project }) => {
    return (
        <div>
            <HighlightLink href={`/docs/${project}/source/${type}/${component}`} children={'ソースコード'} backgroundColor='#25c2a0'/>
            <span style={{ margin: '5px' }}></span>
            <HighlightLink href={`/docs/${project}/feature/${type}/${component}`} children={'機能詳細'} backgroundColor='#999900'/>
            <span style={{ margin: '5px' }}></span>
            <HighlightLink href={`/docs/${project}/philosophy/${type}/${component}`} children={'設計思想'} backgroundColor='#0080ff'/>
        </div>
    );
}

export default ComponentLinks
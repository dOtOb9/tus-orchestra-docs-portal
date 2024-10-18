import React from 'react';
import HighlightLink from './HighlightLink';

interface SourceLinksProps {
    component: string,
    type: string,
    project: string,
}



const SourceLinks: React.FC<SourceLinksProps> = ({ component, type, project }) => {
    return (
        <div>
            <HighlightLink href={`/docs/${project}/feature/${type}/${component}`} children={'機能詳細'} backgroundColor='#999900'/>
            <span style={{ margin: '5px' }}></span>
            <HighlightLink href={`/docs/${project}/philosophy/${type}/${component}`} children={'設計思想'} backgroundColor='#0080ff'/>
        </div>
    );
}

export default SourceLinks
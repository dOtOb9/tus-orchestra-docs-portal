import React from 'react';
import HighlightLink from './HighlightLink';

interface FeatureLinksProps {
    component: string,
    type: string,
    project: string,
}



const FeatureLinks: React.FC<FeatureLinksProps> = ({ component, type, project }) => {
    return (
        <div>
            <HighlightLink href={`/tus-orchestra-docs-portal/docs/${project}/source/${type}/${component}`} children={'ソースコード'} backgroundColor='#25c2a0'/>
            <span style={{ margin: '5px' }}></span>
            <HighlightLink href={`/tus-orchestra-docs-portal/docs/${project}/philosophy/${type}/${component}`} children={'設計思想'} backgroundColor='#0080ff'/>
        </div>
    );
}

export default FeatureLinks
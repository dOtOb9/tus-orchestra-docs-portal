import React from 'react';
import HighlightLink from './HighlightLink';

interface FeatureLinksProps {
    src: string;
}


const FeatureLinks: React.FC<FeatureLinksProps> = ({src}) => {
    return (
        <div>
            <HighlightLink href={`${src}/source`} children={'ソースコード'} backgroundColor='#25c2a0'/>
            <HighlightLink href={`${src}/fearure`} children={'機能詳細'} backgroundColor='#999900'/>
            <HighlightLink href={`${src}/reference`} children={'リファレンス'} backgroundColor='#0080ff'/>
        </div>
    );
}

export default FeatureLinks
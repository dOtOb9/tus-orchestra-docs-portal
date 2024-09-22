import React from 'react';
import HighlightLink from './HighlightLink';

interface ReferenceLinksProps {
    src: string;
}


const ReferenceLinks: React.FC<ReferenceLinksProps> = ({src}) => {
    return (
        <div>
            <HighlightLink href={`${src}/source`} children={'ソースコード'} backgroundColor='#25c2a0'/>
            <HighlightLink href={`${src}/fearure`} children={'機能詳細'} backgroundColor='#999900'/>
        </div>
    );
}

export default ReferenceLinks
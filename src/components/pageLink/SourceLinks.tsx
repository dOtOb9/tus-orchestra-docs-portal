import React from 'react';
import HighlightLink from './HighlightLink';

interface SourceLinksProps {
    src: string;
}


const SourceLinks: React.FC<SourceLinksProps> = ({src}) => {
    return (
        <div>
            <HighlightLink href={`${src}/fearure`} children={'機能詳細'} backgroundColor='#999900'/>
            <HighlightLink href={`${src}/reference`} children={'リファレンス'} backgroundColor='#0080ff'/>
        </div>
    );
}

export default SourceLinks
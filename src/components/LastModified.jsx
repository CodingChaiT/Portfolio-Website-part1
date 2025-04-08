import React from 'react';

function LastModified() {
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
    return <p>Last Modified: {lastModifiedDate}</p>;
}

export default LastModified;


import React from 'react';
import './FileViewer.css';

const FileViewer = ({ content }) => {
  return (
    <div className="file-viewer">
      <h2>File Content</h2>
      <pre className="file-content">{content}</pre>
    </div>
  );
};

export default FileViewer;


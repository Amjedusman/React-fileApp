import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ files, onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState('');

  const handleChange = (event) => {
    const fileName = event.target.value;
    setSelectedFile(fileName);
    onFileSelect(fileName);
  };

  return (
    <div className="dropdown-container">
      <select value={selectedFile} onChange={handleChange} className="dropdown-select">
        <option value="" disabled>Select a file</option>
        {files.map((file, index) => (
          <option key={index} value={file}>{file}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

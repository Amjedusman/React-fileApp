import  { useState } from 'react';
import Dropdown from './Dropdown';
import FileViewer from './FileViewer';
import ChatBot from './ChatBot';
import './App.css';

// Mock file contents for demonstration
const files = ['File1.txt', 'File2.txt', 'File3.txt'];
const fileContents = {
  'File1.txt': 'Content of File 1...',
  'File2.txt': 'Content of File 2...',
  'File3.txt': 'Content of File 3...',
};

function App() {
  const [selectedFileContent, setSelectedFileContent] = useState('');

  const handleFileSelect = (fileName) => {
    setSelectedFileContent(fileContents[fileName]);
  };

  return (
    <div className="app">
      <h1>File Viewer with AI Chatbot</h1>
      <Dropdown files={files} onFileSelect={handleFileSelect} />
      {selectedFileContent && <FileViewer content={selectedFileContent} />}
      {selectedFileContent && <ChatBot fileContent={selectedFileContent} />}
    </div>
  );
}

export default App;

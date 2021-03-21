import React from 'react';
import ErrorBoundary from './components/errorBoundary.component';
import Header from './components/header.component';
// css
import './App.css';

function App() {
  return (
    <>
      <Header title="Simple React CRUD"/>
      <ErrorBoundary>
        <h1>Content</h1>
      </ErrorBoundary>
    </>
  );
}

export default App;

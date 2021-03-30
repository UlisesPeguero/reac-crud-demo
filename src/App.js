import React from 'react';
import ErrorBoundary from './components/errorBoundary.component';
import Header from './components/header.component';
import { DataTable } from './components/table.component';
// css
import './App.css';

function App() {
  return (
    <>
      <Header title="Simple React CRUD"/>
      <ErrorBoundary>
        <div className="container">
          <div className="row">
            <div className="d-none d-sm-block col-sm-1"></div>
            <div className="col-12 col-sm-10">
              <DataTable />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;

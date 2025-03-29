import React from 'react';
import MockList from './components/MockList';
import MockForm from './components/MockForm';

function App() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mock Server Admin Panel</h1>
      <MockForm />
      <MockList />
    </div>
  );
}

export default App;

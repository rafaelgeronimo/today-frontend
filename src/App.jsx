import React from 'react';
import Routes from './routes';
import styles from './App.module.scss';

function App() {
  return (
    <main className={ styles.contentWrapper }>
      <Routes />
    </main>
  );
}

export default App;

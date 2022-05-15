import React, { useState } from 'react';
import styles from './styles/app.module.css';

import Box from './components/Box';
import Form from './components/Form';

function App() {
  const [currentColors, setCurrentColors] = useState([]);

  const onNewColor = ( addColor ) => {
      setCurrentColors((currentColors) => [...currentColors, addColor] );
  }

  const boxes = currentColors.map((boxColor, index) => (
    <Box key={index} color={boxColor} />
  ));

  return (
    <div className={styles.App}>
      <Form liftColors={ onNewColor } />
      <div className={styles.boxContainer}>
        {boxes}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Primeiro from './basicos/Primeiro';
import NewComponent from './basicos/NewComponent';

function App() {
    return (
        <div className="App">
            <h1>App React</h1>
            <Primeiro />
            <NewComponent titulo="Primeiro Componente" subtitulo="Exercício componente com propriedades" />
        </div>

    );
}



export default App;
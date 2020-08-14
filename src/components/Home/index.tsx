import React, { useState} from 'react';
import './styles.css';
function Home() {
  const [texto, setTexto] = useState('');
  const [converted, setConverted] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTexto(e.target.value);

  }


 
  function handleSubmit(evento: React.ChangeEvent<HTMLFormElement>) {
    evento.preventDefault();
    var semaforo: Boolean = false;

    var textAux: Array<string> = [];
    
    
    
    Array.from(texto).map((letra) => {
      if (letra === '$') {

        if (semaforo === true) {
          semaforo = false;
          return textAux.push(String.raw`\)`);
        } else {
          semaforo = true;
          return textAux.push(String.raw`\(`);
        }
      }

      return textAux.push(letra);
    });

    console.log(textAux);
    
    setConverted(textAux.join(""));
  }

  return (
    <>
      <h1>Olá, esse site foi desenvolvido por Bruno Martins</h1>
      <h3>
        O objetivo desse site é converter as fórmulas matemáticas geradas no
      {' '}<a href="notion.com">Notion</a>{' '}
      para o texto entendido no Moodle2  UFC Quixadá
      </h3>

      <div id="formField">
        <form onSubmit={handleSubmit} action="/">

          <div className="grid-container">
            <textarea name="input" id="input" placeholder="Ex: $(A,B) \in L_{LP}$" onChange={handleChange} />
            <textarea name="output" id="output" placeholder="Texto convertido para o moodle2. Ex: \((A,B) \in L_{LP}\)" value={converted} />
      
            {/* <div className="App" id='output'>
              <ReactMarkdown source={converted} />
            </div> */}
      
          </div>
          <button type="submit" value="Converter" >Converter</button>
        </form>
      </div>
    </>
  );
  
};

export default Home;

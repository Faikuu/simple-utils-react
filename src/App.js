import React from 'react';
import './App.css';

// Pomocne funkcje wspomagające.
import { DecAndHexConversion, PasswordStrength } from './components/Functions.js';
// Mechanika zakładek.
import { Tab, Tabs } from './components/Tabs.js';

// Funkcja zajmuje się pokazywaniem konkretnej treści dla aktualnie aktywnej zakładki.
function TabsMain() {
  // Stan aktualnie wybranej zakładki.
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Wartości użyte w konwerterze liczb.
  const [decValue, setDecInput] = React.useState('');
  const handleDecInputChange = (event) => {setDecInput(event.target.value);};
  const [hexValue, setHexInput] = React.useState('');
  const handleHexInputChange = (event) => {setHexInput(event.target.value);};

  const [PasswordValue, setPasswordValue] = React.useState('');
  const handlePasswordChange = (event) => {setPasswordValue(event.target.value);};

  // Funkcja przechowująca przesłany plik.
  const [file, setFile] = React.useState();
  function handleFileChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const tabs = [
    {   
      label: "Konwerter liczb",
      content: <Tab>
        <h4>Konwerter liczb heksadecymalnych na dziesiętne oraz odwrotnie.</h4>

        <h3>Konwertuj liczbę zapisaną w systemie dziesiętnym na szesnastkową</h3>
        <input type="text" value={decValue} onChange={handleDecInputChange} />
        <button className="button" onClick={() => DecAndHexConversion('DecToHex', decValue)}>Konwertuj</button>
        <h3>Konwertuj liczbę zapisaną w systemie szesnastkowym na dziesiętną</h3>
        <input type="text" value={hexValue} onChange={handleHexInputChange} />
        <button className="button" onClick={() => DecAndHexConversion('HexToDec', hexValue)}>Konwertuj</button>
      </Tab>,
    },
    {
      label: "Zmniejszanie plików graficznych",
      content: <Tab>
        <h4>Narzędzie do zmieniania wymiarów plików graficznych. Przydaje się przy sprawdzaniu czy np. favicon lub logo jest nadal czytelne.</h4>
        <h2>Dodaj plik:</h2>
            <input className="button" type="file" onChange={handleFileChange} />
            <br/>
            {file != null &&
              <h3>
                x128<img style={{height: 128 }} src={file} />
                <br/>
                x64<img style={{height: 64 }} src={file} />
                <br/>
                x32<img style={{height: 32 }} src={file} />
                <br/>
                x16<img style={{height: 16 }} src={file} />
              </h3>
            }
      </Tab>,
    },
    {
      label: "Sprawdzanie siły hasła",
      content: <Tab>
        <h4>Prosty algorytm sprawdzający siłę wpisanego hasła.</h4>
        <input type="text" value={PasswordValue} onChange={handlePasswordChange} />
        <h3>Ocena: {PasswordStrength(PasswordValue)[0]}</h3>
        {PasswordStrength(PasswordValue)[1] > 0 && <h4>Duże znaki</h4>}
        {PasswordStrength(PasswordValue)[2] > 0 && <h4>Małe znaki</h4>}
        {PasswordStrength(PasswordValue)[3] > 0 && <h4>Liczby</h4>}
        {PasswordStrength(PasswordValue)[4] > 0 && <h4>Znaki specjalne</h4>}
      </Tab>,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

// Główna funkcja, punkt wejściowy dla strony.
function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Proste narzędzia</h1>
      </header>
      <main className="main">
        <p className="main-content">
          <TabsMain />
        </p>
      </main>
      <footer className="footer">
        <p className="footer-content">ReactJS</p>
      </footer>
    </div>
  );
}

export default App;

import Tasks from "./components/Tasks/Tasks";
import Header from "./components/Header/Header";
import {React, useEffect, useState} from 'react'

function App() {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);
    return savedTheme ? savedTheme : "light";
  }); // prva je ime spremenljivke, druga je ime seterja zanjo, use state je pa njega vrednost
  // pac ta usestate in inicialiciranje spremenljivke je vse v enem, ime, setter zanjo in vrednost. In ce jo hocmo spreminjat kdaj, jo spreminjamo s setterjem
  

  function changeTheme(){
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme",theme);
  }

  // ta funkcija klice call back funkcijo, ki je podana kot prvi parameter, ko se spremeni katera koli izmed spremenljivk v arrayu, ki je drugi parameter
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])




  return (
    <main id={theme}>
      <Header functionToChhangeTheme={changeTheme} theeeeme={theme}></Header>
      <div className="container">

        <Tasks></Tasks>
      </div>
  </main>
  );
}

export default App;

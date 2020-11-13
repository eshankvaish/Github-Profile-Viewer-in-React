/*Main App*/
import { useTranslation } from "react-i18next";

function App() {
  const { t , i18n} = useTranslation();  //t: for adding keys
  i18n.changeLanguage(navigator.language || navigator.userLanguage);

  return (
    <div className="App">
    </div>
  );
}

export default App;

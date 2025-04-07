import "./App.css";
import Header from './../Header/Header.jsx';
import SectionPrincipal from "../Main/SectionPrincipal/SectionPrincipal.jsx";

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <SectionPrincipal/>
      </main>
      <footer></footer>
      
    </div>
  );
}

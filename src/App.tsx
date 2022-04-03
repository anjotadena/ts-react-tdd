import { Home, Header, Accordion } from './components';
import { AccordionItem } from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Accordion>
        <AccordionItem>
          <p>ASDASD</p>
        </AccordionItem>
        <AccordionItem>
          <p>d</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;

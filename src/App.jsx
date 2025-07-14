import Header from "./components/Header/Header.jsx";

import { CORE_CONCEPTS } from "./data";

import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Plese click a botton");

  function handSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concep ts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handSelect("components")}>
              Componentes
            </TabButton>
            <TabButton onSelect={() => handSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

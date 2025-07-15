import Header from "./components/Header/Header.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import {} from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concep ts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic == "components"}
              onSelect={() => handSelect("components")}
            >
              Componentes
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onSelect={() => handSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onSelect={() => handSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onSelect={() => handSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

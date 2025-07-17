import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
export default function Examples() {
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
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic == "components"}
          onClick={() => handSelect("components")}
        >
          Componentes
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "jsx"}
          onClick={() => handSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "props"}
          onClick={() => handSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "state"}
          onClick={() => handSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}

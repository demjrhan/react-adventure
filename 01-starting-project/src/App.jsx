import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import {CORE_CONCEPTS} from "./data";
import "./components/CoreConcept/CoreConcept.css"
import TabButton from "./components/TabButton";
import {useState} from "react";
import {EXAMPLES} from "./data-with-examples";

function App() {

    const [selectedTab, setSelectedTab] = useState();

    function handleSelect(selectedButton) {
        setSelectedTab(selectedButton);
    }

    let tabContent = <p>Please select a tab. :></p>
    if (selectedTab) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
                            <code>
                                {EXAMPLES[selectedTab].code}
                            </code>
                        </pre>
        </div>


    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>What is React?</h2>
                    <ul>
                        <CoreConcept{...CORE_CONCEPTS[0]}/>
                        <CoreConcept{...CORE_CONCEPTS[1]}/>
                        <CoreConcept{...CORE_CONCEPTS[2]}/>
                        <CoreConcept{...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>

                <section id="examples">
                    <h2>Components</h2>
                    <menu>
                        <TabButton onClick={() => handleSelect("components")}>Examples</TabButton>
                        <TabButton onClick={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton onClick={() => handleSelect("props")}>Props</TabButton>
                        <TabButton onClick={() => handleSelect("state")}>State</TabButton>
                    </menu>

                    {tabContent}

                </section>
            </main>
        </div>
    );
}


export default App;

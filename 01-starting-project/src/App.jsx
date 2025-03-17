import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import "./components/CoreConcept/CoreConcept.css"
import TabButton from "./components/TabButton";
import {useState} from "react";
import {CORE_CONCEPTS} from "./data-with-examples";
import {EXAMPLES} from "./data-with-examples";

function App() {

    const [selectedTab, setSelectedTab] = useState();

    function handleSelect(selectedButton) {
        setSelectedTab(selectedButton);
    }

    let tabContent = <p>Please select a tab.</p>
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
                        {CORE_CONCEPTS.map(conceptItem => <CoreConcept{...conceptItem}/>)}

                    </ul>
                </section>

                <section id="examples">
                    <h2>Components</h2>
                    <menu>
                        <TabButton isSelected={selectedTab === 'components'}
                                   onClick={() => handleSelect("components")}>Examples</TabButton>
                        <TabButton isSelected={selectedTab === 'jsx'}
                                   onClick={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTab === 'props'}
                                   onClick={() => handleSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTab === 'state'}
                                   onClick={() => handleSelect("state")}>State</TabButton>
                    </menu>

                    {tabContent}

                </section>
            </main>
        </div>
    );
}


export default App;

/*import React from 'react';

export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);

    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p className={highlighted ? 'active' : ''}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}*/

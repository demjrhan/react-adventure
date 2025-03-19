import TabButton from "../TabButton";
import {useState} from "react";
import {EXAMPLES} from "../../data-with-examples";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();
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

    function handleSelect(selectedButton) {
        setSelectedTab(selectedButton);
    }


    return (<Section title="Components" id="examples">
        <Tabs buttons={<>
            <TabButton isSelected={selectedTab === 'components'}
                       onClick={() => handleSelect("components")}>Examples</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'}
                       onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'}
                       onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state'}
                       onClick={() => handleSelect("state")}>State</TabButton>
        </>}>{tabContent}</Tabs>
    </Section>);
}
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import {CORE_CONCEPTS} from "./data";
import "./components/CoreConcept/CoreConcept.css"
import TabButton from "./components/TabButton";

function App() {

    function onClick(argument){
        console.log(argument);
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
                        <TabButton onClick={() => onClick("Asd")}>Examples</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>State</TabButton>
                    </menu>
                </section>

            </main>
        </div>
    );
}


export default App;

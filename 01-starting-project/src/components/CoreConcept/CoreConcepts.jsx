import {CORE_CONCEPTS} from "../../data-with-examples";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>What is React?</h2>
            <ul>
                {CORE_CONCEPTS.map(conceptItem => <CoreConcept{...conceptItem}/>)}

            </ul>
        </section>
    );
}
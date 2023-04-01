import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [onp, setOnp] = useState(false)


    console.log("Accordion rendering")
    const collapsed = false

    return (
        <div>
            <AccordionTitle title={props.titleValue}/> <button onClick={() => {setOnp(true)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

    type AccordionTitlePropsType = {
        title: string
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return (
            <div>
                <h3>--{props.title}--</h3>
            </div>
        )
    }

    function AccordionBody() {
        console.log("AccordionBody rendering")
        return (
            <>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </>
        )
    }
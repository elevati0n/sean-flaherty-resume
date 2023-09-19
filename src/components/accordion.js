import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.

export default function AccordionList({title, data, expandByDefault = true}) {
    return (
        <Accordion allowMultipleExpanded={true} preExpanded={expandByDefault? ["1"] : []} allowZeroExpanded={true}>
            <AccordionItem uuid={"1"}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {data}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
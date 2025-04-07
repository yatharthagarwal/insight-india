import ChartComponent from './ChartComponent';
import { mapper } from '../data';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Import default styles

const Analysis = (props) => {
    const disasterData = mapper[props.disasterType]?.[props.state?.value];

    return (
        <>
            {disasterData ? (
                <Accordion allowZeroExpanded >
                    {disasterData.map((data, index) => (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Chart {index + 1}: {data.options.plugins.title.text}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ChartComponent
                                        data={data["data"]}
                                        options={data["options"]}
                                    />
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            ) : (
                <p className="text-center col-span-full text-gray-500">
                    No data available for the selected state and disaster type.
                </p>
            )}
        </>
    );
};

export default Analysis;
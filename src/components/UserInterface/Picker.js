// import button to for options display
import { Button } from '../Button';

export const Picker = props => {
    // destructure props for readability
    // both of these will be used to render the different options at each stage of the user flow
    const { fields, index, items } = props;
    // variables
    let currentField = fields[index];
    let options;
    let optionsArr = [];

    // helper functions
    

    // conditional rendering of options
    // start by pushing all unique options to optionsArr
    items.forEach(item => {
        // console.log(currentField);
        // console.log(optionsArr);
        if (!optionsArr.includes(item[currentField])) {
            optionsArr.push(item[currentField]);
        };
    });
    // map optionsArr to options and render using the Button component
    options = optionsArr.map((option, i) => <Button key={i} name={option} text={option} />);
    
    return (
        <div className="picker">
            { options }
        </div>
    )
};
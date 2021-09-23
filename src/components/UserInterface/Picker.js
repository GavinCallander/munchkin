// import button to for options display
import { Button } from '../Button';

export const Picker = props => {
    // destructure props for readability
    // both of these will be used to render the different options at each stage of the user flow
    const { fields, questionIndex, itemsArr, setQuestionIndex } = props;
    
    // variable declarations
    let currentField = fields[questionIndex];
    let options;
    let optionsArr = [];

    // helper function for user selection flow
    const handleSelection = (e) => {
        // create indicesToRemove as an array to store indices of non-qualifying items
        // for readability, store the target's name as a variable as well
        let indicesToRemove = [];
        let selection = e.currentTarget.getAttribute("name");
        // loop over the itemsArr using a standard for loop so we have easy access to indices
        for (let i = 0; i < itemsArr.length; i++) {
            // using currentField of the current item and add non-qualifying indices to indicesToRemove
            // in both cases, unshift rather than push to make splicing possible
            // if questionIndex is 0, check for values higher than selection
            if (questionIndex === 0 && itemsArr[i][currentField] > selection) {
                indicesToRemove.unshift(i);
            }
            // otherwise, check for inequality
            else if (itemsArr[i][currentField] !== selection) {
                indicesToRemove.unshift(i);
            };
        };
        // once completed, iterate of indicesToRemove and splice from itemsArr
        indicesToRemove.forEach(index => {
            itemsArr.splice(index, 1);
        });
        // finally, cover the incrementation of a selection of "Food"
        // if selection is "Food" increment by two, otherwise by one
        selection === "Food" ? setQuestionIndex(questionIndex + 2) : setQuestionIndex(questionIndex + 1);
    };

    // conditional rendering of options
    // start by pushing all unique options to optionsArr
    itemsArr.forEach(item => {
        if (!optionsArr.includes(item[currentField])) {
            optionsArr.push(item[currentField]);
        };
    });
    // map optionsArr to options and render using the Button component
    options = optionsArr.map((option, i) => <Button func={handleSelection} questionIndex={questionIndex} key={i} text={option} />);
    
    return (
        <div className="picker">
            { options }
        </div>
    )
};
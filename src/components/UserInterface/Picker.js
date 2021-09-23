// import button to for options display
import { Button } from '../Button';

export const Picker = props => {
    // destructure props for readability
    // both of these will be used to render the different options at each stage of the user flow
    const { fields, questionIndex, itemsArr, setQuestionIndex } = props;
    // variables
    let currentField = fields[questionIndex];
    let options;
    let optionsArr = [];

    // helper functions
    // primary selection helper function
    const handleSelection = (e) => {
        // for readability, set the target's name to a variable
        let selection = e.currentTarget.getAttribute("name");
        // fire function to handle user's selection based on the current questionIndex
        if (questionIndex === 0) {
            handleWalkTime(selection);
        }
        e.currentTarget.getAttribute("name") === "Food" ? setQuestionIndex(questionIndex + 2) : setQuestionIndex(questionIndex + 1);
    };
    // helper functions to be used in primary selection function
    const handleWalkTime = selection => {
        let indicesToRemove = [];
        // loop over itemsArr
        for (let i = 0; i < itemsArr.length; i++) {
            // if the walkTime of an item is greater than the selection value
            if (itemsArr[i][currentField] > selection) {
                // add to indicesToRemove
                // using unshift as opposed to push allows for splicing from the end of the array more quickly
                // removes possibility of changing indices and splicing the incorrect items
                indicesToRemove.unshift(i);
            };
        };
        // once loop is completed, splice each index to remove from itemsArr
        indicesToRemove.forEach(index => {
            itemsArr.splice(index, 1);
        });
        console.info(itemsArr);
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
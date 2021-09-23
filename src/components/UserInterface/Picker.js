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
    let pickerClass = questionIndex === 0 ? "picker picker--alt" : "picker";

    // helper function for user selection flow
    const handleSelection = (e) => {
        console.info("Handling selection")
        // create indicesToRemove as an array to store indices of non-qualifying items
        // for readability, store the target's name as a variable as well
        let indicesToRemove = [];
        let selection = e.currentTarget.getAttribute("name");
        console.info("declaring vars and starting loop")
        // loop over the itemsArr using a standard for loop so we have easy access to indices
        for (let i = 0; i < itemsArr.length; i++) {
            // using currentField of the current item and add non-qualifying indices to indicesToRemove
            // in both cases, unshift rather than push to make splicing possible
            // if questionIndex is 0, check for values higher than selection
            // if (questionIndex === 0 && itemsArr[i][currentField] > selection) {
            //     indicesToRemove.unshift(i);
            // }
            if (questionIndex === 0) {
                if (itemsArr[i][currentField] > selection) {
                    console.info("Yay remove it", itemsArr[i][currentField], selection);
                    indicesToRemove.unshift(i);
                }
            }
            // otherwise, check for inequality
            else if (itemsArr[i][currentField] !== selection) {
                indicesToRemove.unshift(i);
            };
        };
        console.info("indicesToRemove should be jumping", indicesToRemove);
        // once completed, iterate of indicesToRemove and splice from itemsArr
        indicesToRemove.forEach(index => {
            itemsArr.splice(index, 1);
        });
        console.info("itemsArr should have stuff removed but also stuff left", itemsArr);
        // finally, cover the incrementation of a selection of "Food"
        // if selection is "Food" increment by two, otherwise by one
        selection === "Food" ? setQuestionIndex(questionIndex + 2) : setQuestionIndex(questionIndex + 1);
        console.log("We just updated questionIndex");
    };

    // conditional rendering of options
    // start by pushing all unique options to optionsArr
    itemsArr.forEach(item => {
        // console.info(itemsArr);
        if (!optionsArr.includes(item[currentField])) {
            optionsArr.push(item[currentField]);
        };
        // console.info(optionsArr);
    });
    // map optionsArr to options and render using the Button component
    options = optionsArr.map((option, i) => {
        return  <Button 
                    btnClass="button"
                    func={handleSelection}
                    questionIndex={questionIndex}
                    key={i}
                    text={option}
                    textClass="content content--btn"
                />
    })
    
    return (
        <div className={`interface ${pickerClass}`}>
            { options }
        </div>
    )
};
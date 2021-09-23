// dependencies
import { useState } from 'react';
// the user focused components to be conditionally rendered
import { Display } from './Display';
import { Picker } from './Picker';
// button for base case
import { Button } from '../Button';
// grab the data.json object and assign to a variable
import * as DATA from '../../data.json';

export const UserInterface = () => {
    // state variables
    // questionIndex default is null; will switch to 0 and iterate upwards with user interaction
    const [questionIndex, setQuestionIndex] = useState(null);
    // non-state variables
    // content is conditionally rendered based on stage of the user flow
    let content;
    let fields = DATA.questions.map(question => question.field);
    let itemsArr = DATA.items;
    // using actionText as a placeholder for now
    // will render differently depending on the stage of the user flow
    // may be incorporated into display or remove necessity for display
    let actionText;
    // conditional rendering of content and text
    // check for truthy/falsey but cover JS 0 behavior
    // render the Get Started button if nothing has happened or in default position
    if (!questionIndex && questionIndex !== 0) {
        content = <Button btnClass="button button--wide" func={() => setQuestionIndex(0)} text="Get Started" />
    }
    // render the display if user selection is complete i.e. index is does not correspond to a question
    else if (questionIndex > DATA.questions.length - 1) {
        content = <Display itemsArr={itemsArr} />
    }
    // render the picker in all other scenarios
    else {
        actionText = <p className="">{DATA.questions[questionIndex].question}</p>
        content = <Picker 
                    fields={fields}
                    itemsArr={itemsArr} 
                    questionIndex={questionIndex}
                    setQuestionIndex={setQuestionIndex}
                    />
    };

    return (
        <div className="interface">
            { actionText }
            { content }
        </div>
    )
};
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
    let content;


    // conditional rendering of content
    // check for truthy/falsey but cover JS 0 behavior
    // render the Get Started button if nothing has happened or in default position
    if (!questionIndex && questionIndex !== 0) {
        content = <Button func={() => setQuestionIndex(0)} text="Get Started" />
    }
    // render the display if user selection is complete i.e. index is does not correspond to a question
    else if (questionIndex > DATA.questions.length - 1) {
        content = <Display />
    }
    // render the picker in all other scenarios
    else {
        content = <Picker />
    };

    return (
        <div className="interface">
            { content }
        </div>
    )
};
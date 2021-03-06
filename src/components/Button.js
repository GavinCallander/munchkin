export const Button = props => {
    // handle props destructuring and variables
    let { btnClass, func, questionIndex, text, textClass } = props;
    let content;
    let name;
    
    // conditional rendering of content
    if (questionIndex === 0) {
        content = `Up to ${text} minutes`
        name = text.toString();
    }
    else if (questionIndex === 2) {
        if (text === "true") {
            content = "Yes! Please! Caffeine!";
            name = "true";
        }
        else {
            content = "Nope! Had enough!";
            name = "false";
        };
    }
    else {
        content = text;
        name = text;
    }

    return (
        <div className={btnClass} name={name} onClick={e => func(e)}>
            <p className={textClass}>{content}</p>
        </div>
    )
};
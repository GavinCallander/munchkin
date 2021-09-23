export const Button = props => {

    // handle props destructuring and variables
    let { func, questionIndex, text } = props;
    let content;
    let name;
    // conditional rendering of content
    if (questionIndex === 0) {
        content = `Up to ${text} minutes`
        name = text.toString();
    }
    else if (questionIndex === 2) {
        text === true ?
            content = "Yes! Please! Caffeine!":
            content = "Any more and I'd be pretty wired";
    }
    else {
        content = text;
        name = text;
    }

    return (
        <div className="" name={name} onClick={e => func(e)}>
            <p className="">{content}</p>
        </div>
    )
};
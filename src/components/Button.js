export const Button = props => {

    let { func, text } = props;

    return (
        <div className="" onClick={func}>
            <p className="">
                { text }
            </p>
        </div>
    )
};
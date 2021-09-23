export const Display = props => {

    let { itemsArr } = props;
    let item;
    let location;

    if (itemsArr.length > 1) {
        let randomIndex = Math.floor(Math.random(itemsArr.length));
        item = itemsArr[randomIndex].name;
        location = itemsArr[randomIndex].location;
    }
    else {
        item = itemsArr[0].name;
        location = itemsArr[0].location;
    }

    return (
        <div className="">
            <p className="">Why not try {location}</p>
            <p className="">I hear the {item} is great there</p>
        </div>
    )
};
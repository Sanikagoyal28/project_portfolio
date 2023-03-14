import profile from "../Assets/profile.webp"

function Card (props){
    return <>
        <div className="card">
            <img src={profile} className="cardImage" />
            <div className="cardRightdiv">
                <p className="cardHead">
                {props.cardHead}
                </p>
                <p className="cardText">
                {props.cardBody}
                </p>
                <button className="cardBtn">Paper</button>
            </div>
        </div>
    </>
}

export default Card;

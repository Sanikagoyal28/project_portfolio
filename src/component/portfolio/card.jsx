import profile from "../Assets/profile.webp"

function Card (){
    return <>
        <div className="card">
            <img src={profile} className="cardImage" />
            <div className="cardRightdiv">
                <p className="cardHead">
                Can domain adaptation make object recognition work for everyone ?
                </p>
                <p className="cardText">
                Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak,Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak
                </p>
                <button className="cardBtn">Paper</button>
            </div>
        </div>
    </>
}

export default Card;

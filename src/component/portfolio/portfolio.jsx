import profile from "../Assets/profile.webp"
import { useEffect, useState } from "react"
import Card from "./card"
import "./portfolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEye, faBars, faTimes, faMemo, faTrophy, faBriefcase, faT } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar.js"

function Portfolio() {

    const [active , setActive] = useState(true);
    const [state , setState] = useState(false);
 
    useEffect(() => {
        
        if(active && state){
            document.getElementById("sidebar").style.display = "none";
        }else if(state){
            document.getElementById("sidebar").style.display = "block";
        }
    },[active , state ])

    return <>
        <Sidebar />
        <div className="portfolio">
            <div className="homeSection" id="home">
                <p className="homeHead">Hello, I'm Vikas Upadhyay</p>
                <img src={profile} className="homeImage" />
                <p className="homeText">Passionate Web Developer</p>
               
                <button className="homeBtn">Resume</button>
            </div>
            <hr className="divider" />
            <div className="aboutSection" id="about">
                <p className="aboutHead">About Me</p>
                <p className="aboutText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet fermentum eros. Nunc cursus mattis tellus sed commodo. Pellentesque nec porta erat. Donec venenatis massa ligula, quis dictum turpis tempus vel. Mauris et mattis velit, et tempus justo. Suspendisse posuere magna sit amet molestie condimentum. Sed dapibus ac ligula vitae dignissim. Curabitur ac aliquet libero, pharetra dapibus ante. Vestibulum varius vehicula tristique.
                    In diam ligula, egestas eu sollicitudin tristique, convallis quis quam. Vestibulum cursus elementum quam, vitae faucibus nibh bibendum eget. Fusce volutpat urna ut convallis convallis. Donec pharetra, ligula et ultrices dapibus, odio risus dignissim ipsum, vel blandit nisi sapien et dui. In hac habitasse platea dictumst. Nullam in semper leo. Proin porta, risus sit amet consectetur ultrices, velit est volutpat lectus, in condimentum erat dui in ex. Aenean hendrerit velit quam, nec ullamcorper nisi commodo nec. Quisque cursus commodo sem nec fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nulla in vehicula magna. Etiam interdum pretium neque, vitae scelerisque eros bibendum at. Nunc pulvinar egestas lorem ac porta. Nullam arcu eros, vulputate eget sapien quis, viverra posuere nibh. Phasellus sit amet libero dapibus, tincidunt leo sit amet.
                </p>
            </div>
            <hr className="divider" />
            <div className="workSection" id="work">
                <p className="aboutHead">Work Experience</p>
                <Card cardHead={"Can domain adaptation make object recognition work for everyone ?"} cardBody = {" Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak,Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak"}/>
            </div>
            <hr className="divider" />
            <div className="workSection" id="project">
                <p className="aboutHead">Projects</p>
                <Card cardHead={"Can domain adaptation make object recognition work for everyone ?"} cardBody = {" Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak,Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak"}/>
            </div>
            <hr className="divider" />
            <div className="workSection" id="publication">
                <p className="aboutHead">Publications</p>
                <Card cardHead={"Can domain adaptation make object recognition work for everyone ?"} cardBody = {" Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak,Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak"}/>
            </div>
            <hr className="divider" />
            <div className="workSection" id="achievement">
                <p className="aboutHead">Achievements</p>
                <Card cardHead={"Can domain adaptation make object recognition work for everyone ?"} cardBody = {" Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak,Viraj Prabhu, RampraSaath R. Selvaraju, Aditya Singh, Nikhil Nayak"}/>
            </div>
        </div>
    </>
}

export default Portfolio
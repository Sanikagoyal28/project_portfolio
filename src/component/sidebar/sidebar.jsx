import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEye, faMemo, faTrophy, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css"

function Sidebar() {
    return <>
        <div className="sidebar">
            <div className='sbDiv'>
                <FontAwesomeIcon icon={faHouse} className="homeIcon" />
                <p className="sbText">Home</p>
            </div>
            <div className='sbDiv'>
                <FontAwesomeIcon icon={faUser} className="homeIcon" />
                <p className="sbText">About Me</p>
            </div>
            <div className='sbDiv'>
                <FontAwesomeIcon icon={faBriefcase} className="homeIcon" />
                <p className="sbText">Work Experience</p>
            </div>
            <div className='sbDiv'>
                <FontAwesomeIcon icon={faEye} className="homeIcon"  />
                <p className="sbText">Projects</p>
            </div>
            <div className='sbDiv'>
            <FontAwesomeIcon icon={faBriefcase} className="homeIcon" />
                {/* <FontAwesomeIcon icon={faMemo} className="homeIcon"  /> */}
                <p className="sbText">Publications</p>
            </div>
            <div className='sbDiv'>
                <FontAwesomeIcon icon={faTrophy} className="homeIcon" />
                <p className="sbText">Achievements</p>
            </div>
        </div>
    </>
}

export default Sidebar
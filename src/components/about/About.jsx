import "./About.css"
import Resume from '../../img/resume.jpeg'
import AboutMe from "../../img/about.jpeg"
import ResumePath from "../../img/VIPUL_comp_ Resume.pdf"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={AboutMe} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    A passionate engineer and learner who is always ready to work on the problems.
                </p>
                <p className="a-desc">
                    B.Tech (2018-2022) (8.4)<br/>Computer Science<br/>JECRC Foundation
                    <br/><br/>XII (80)<br/>Sarvodaya Sr. Sec. School
                    <br/><br/>X (94)<br/>PSC Foundation Sec School
                </p>
                <div className="a-award">
                    <a href={ResumePath} download="Resume">
                        <img src={Resume} alt="" className="a-award-img" />
                    </a>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">My Resume for better description</h4>
                        <p className="a-award-desc">
                            Here is my resume. Assess with the click on the picture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './about.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'About me'.split('')}
                        index={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        possimus sit asperiores laudantium impedit ratione tenetur maxime
                        quidem, non veniam. Ad delectus officia nam a fugit cum temporibus
                        magnam dignissimos?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                        magnam temporibus odio quod aliquid, voluptas ut quasi nulla atque
                        similique, neque pariatur quibusdam quam id quos. Reprehenderit
                        eligendi enim quaerat!
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJsSquare} color="yellow" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faNodeJs} color="blue" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default About;
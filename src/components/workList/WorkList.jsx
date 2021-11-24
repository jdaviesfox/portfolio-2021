import './workList.css';
import Work from '../work/Work';
import { work } from '../../data';

const WorkList = () => {
    return (
        <div className="workList">
            <div className="workList-text">
                <h1 className="workList-title">
                    <span className="workList-emoji">&#128071; </span>
                    Here's some of my work
                </h1>
                <p className="workList-description">
                    The following examples are a selection of web design/development
                    projects as well as creative coding projects. Techonologies used 
                    include React, Processing and Javascript.
                </p>
            </div>
            <div className="workList-list">
                {work.map((item) => (
                    <Work
                        key={item.id}
                        img={item.img}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorkList;
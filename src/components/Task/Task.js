import React, { useState } from "react";
import './Task.css';
import { IconContext } from "react-icons";
import Checkbox from 'rc-checkbox';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import { CgMore } from 'react-icons/cg';



export default function Task({ isFilter, CardData, filterTask, setData, submittingStatue, setFilterTask, setStatus }) {
    const [showDetail, setshowDetail] = useState(false)

    const handleShowDetail = () => {
        setshowDetail(!showDetail)
    }



    return(
        <>
            <div>
                <div>
                    <p className="list-name" >Todo</p>
                </div>
            </div>
            { CardData.map((task) => {
                const { name, dueDate, type, description, id, status} = task;
                return(
                    <div className="task task-bg">
                            <div className="test">
                                <Checkbox className="checkbox" />
                                <IconContext.Provider value={{ size: "25px", className: "star" }}>
                                    <BsStar />
                                </IconContext.Provider>
                            </div>
                            <div>
                                <p className="type">{type}</p>
                                <p className="name">{name}</p>
                                {!showDetail ?<p className="detail">{description}</p>:
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    <CgMore />
                                </IconContext.Provider>}
                                <p className="date">{dueDate}</p>
                            </div>
                    </div>
                );
            })}
            {/* <div className="task">
                <div className="test">
                    <Checkbox className="checkbox" />
                    <IconContext.Provider value={{ size: "25px", className: "star" }}>
                        <BsStar />
                    </IconContext.Provider>
                </div>
                <div>
                    <p className="type">School</p>
                    <p className="name">task name: interview</p>
                    <p className="detail">bring notebook and CV</p>
                    <p className="date">Date:2020-02-24</p>
                </div>
            </div> */}
            <div>
                <div>
                    <p className="list-name">Done</p>
                </div>
            </div>
            <div className="task">
                <div className="test">
                    <Checkbox className="checkbox" />
                    <IconContext.Provider value={{ size: "25px", className: "star" }}>
                        <BsStar />
                    </IconContext.Provider>
                </div>
                <div>
                    <p className="type">School</p>
                    <p className="name">task name: interview</p>
                    <p className="detail">bring notebook and CV</p>
                    <p className="date">2020-02-24</p>
                </div>
            </div>
        </>
    )
}
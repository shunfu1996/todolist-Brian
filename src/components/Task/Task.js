import React, { useState } from "react";
import './Task.css';
import { IconContext } from "react-icons";
import Checkbox from 'rc-checkbox';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { MdExpandMore, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { CgMore } from 'react-icons/cg';



export default function Task({status, id, name, description, type, dueDate, isFilter, CardData, filterTask, setData, submittingStatue, setFilterTask, setStatus }) {
    const [showDetail, setshowDetail] = useState(false) 

    const handleShowDetail = () => {
        setshowDetail(!showDetail)
    }

    function handleStatus(id){
        const updatedStatus = [...CardData].map((todo) =>{
            if (todo.id === id && todo.status) {
                todo.status = false
                /* todo.status = "TODO"; */
            } else if (todo.id === id && !todo.status) {
                todo.status = true
                /* todo.status = "DONE"; */
            }
            return todo;
        })
        console.log(CardData)
        setData(updatedStatus); 
    }

    function test(){
        console.log(status)
    }

    return(
        <>
            <div className="task task-bg test">
                    <div className="task-button">
                        <button onClick={test}>
                            check task
                        </button>
                        <button className="checkbox" onClick={() => handleStatus(id)}>
                            <IconContext.Provider value={{ size: "25px", className: "checkbox-icon" }}>
                                {status?<MdCheckBox />:<MdCheckBoxOutlineBlank />}
                            </IconContext.Provider>
                        </button>    
                        <button className="checkbox" onClick={() => handleStatus(id)}>
                            <IconContext.Provider value={{ size: "25px", className: "star" }}>
                                <BsStar />
                            </IconContext.Provider>
                        </button>                    
                    </div>
                    <div className="text">
                        <p className="type">{type}</p>
                        <p className="name">{name}</p>
                        {!showDetail ?<p className="detail">{description}</p>:
                        <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                            <CgMore />
                        </IconContext.Provider>}
                        <p className="date">{dueDate}</p>
                    </div>
            </div>
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
                    <p className="date">2020-02-24</p>
                </div>
            </div> */}
        </>
    )
}
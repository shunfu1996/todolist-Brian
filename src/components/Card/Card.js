import React, { useState } from "react";
import './Card.css';
import { IconContext } from "react-icons";
import { GoPlus, GoDash } from 'react-icons/go';
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs'; //school
import { MdWorkOutline } from 'react-icons/md';//work
import { AiOutlineHome } from 'react-icons/ai';//home
import { CgMore } from 'react-icons/cg';
import { MdDateRange } from 'react-icons/md';


export default function Card({ data, setData, submittingStatue, status}) {
    const [add, setAdd] = useState(true)
    const [typeButtonDetail, setTypeButtonDetail] = useState(false)
    const [dateButtonDetail, setDateButtonDetail] = useState(false)
    const [detailButtonDetail, setDetailButtonDetail] = useState(false)

    const handleTaskDetailBox = ele => {
        if(ele === "detail"){
            setTypeButtonDetail(false)
            setDateButtonDetail(false)
            setDetailButtonDetail(!detailButtonDetail)
        } else if(ele === "date"){
            setTypeButtonDetail(false)
            setDateButtonDetail(!dateButtonDetail)
            setDetailButtonDetail(false)
        } else if(ele === "type"){
            setTypeButtonDetail(!typeButtonDetail)
            setDateButtonDetail(false)
            setDetailButtonDetail(false)
        }
    }


    const handleAddTask = () =>{
        setAdd(!add)
    }
    ////
    const [name, setName] = useState("")  
    function nameChange(e) {
        setName(e.target.value)
    }
    const [description, setDescription] = useState("")
    function descriptionChange(e) {
        setDescription(e.target.value)
    }
    const [type, setType] = useState("")
    function handleTaskType(ele) {
        setType(ele)
    }
    const [dueDate, setDueDate] = useState("")
    function dueDateChange(e) {
        setDueDate(e.target.value)
    }
    
    function addItem(e) {
        e.preventDefault(); // to prevent the web F5
        submittingStatue.current = true ;
        setData(function(prevData){
            return [
                {   
                    /* id: v4(), */
                    name,
                    description,
                    type,
                    dueDate,
                    status,
                },
                ...prevData,
            ];
        })    
        setDueDate("");
        setType("");
        setDescription("");
        setName("");  
        console.log(data)
    }


    return(
        <>
            <div className="footer">
                <div className="card-box">
                    { add &&
                    <>
                        <button onClick={handleAddTask} className="add-task-button" >
                            <IconContext.Provider value={{ size: "20px", className: "card-add-icon" }}>
                                <GoPlus />
                            </IconContext.Provider>
                        </button>
                        <p className="card-name">add task</p>
                    </>
                    }
                    { !add &&
                    <>  
                        <button onClick={handleAddTask} className="add-task-button" >
                            <IconContext.Provider value={{ size: "20px", className: "card-dash-icon" }}>
                                <GoDash />
                            </IconContext.Provider>
                        </button>
                        <button type="submit" className="" onClick={addItem}>Submit</button>
                        <input type="text" className="task-name" placeholder="Your task" aria-label="Username" aria-describedby="basic-addon1"  id="newTaskName" value={name} onChange={nameChange} />
                        {/* <p className="task-name">test</p> */}
                        <div className="task-add-button">
                            <button className="task-detail" onClick={() => handleTaskDetailBox("detail")} >
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    <CgMore />
                                </IconContext.Provider>
                            </button>
                            <button className="task-date" onClick={() => handleTaskDetailBox("date")}>
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    <MdDateRange />
                                </IconContext.Provider>
                            </button>
                            <button className="task-type" onClick={() => handleTaskDetailBox("type")}>
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    <MdWorkOutline />
                                </IconContext.Provider>
                            </button>
                        </div>

                        {dateButtonDetail &&<div className="task-detail-date-box">
                            <input type="date" className="form-control" id="newTaskDueDate" value={dueDate} onChange={dueDateChange} />
                        </div>}
                        {typeButtonDetail &&<div className="task-detail-box" onClick={() => handleTaskType("work")}>
                            <button className="add-type-button">
                                <IconContext.Provider value={{ size: "25px", className: "add-type-icon" }}>
                                    <MdWorkOutline />
                                </IconContext.Provider>
                                <p>Work</p>
                            </button>
                            <button className="add-type-button" onClick={() => handleTaskType("school")} >
                                <IconContext.Provider value={{ size: "25px", className: "add-type-icon" }}>
                                    <BsBook />
                                </IconContext.Provider>
                                <p>School</p>
                            </button>
                            <button className="add-type-button" onClick={() => handleTaskType("home")}>
                                <IconContext.Provider value={{ size: "25px", className: "add-type-icon" }}>
                                    <AiOutlineHome />
                                </IconContext.Provider>
                                <p>Home</p>
                            </button>
                        </div>}
                        {detailButtonDetail &&<div className="task-detail-box">
                            <textarea className="" aria-label="With textarea" id="newTaskDescription" placeholder="How to do the task" value={description} onChange={descriptionChange} ></textarea>
                        </div>}
                    </>
                    }
                </div>
            </div>
        </>
    )
}
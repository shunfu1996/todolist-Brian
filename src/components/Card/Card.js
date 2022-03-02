import React, { useState } from "react";
import './Card.css';
import { IconContext } from "react-icons";
import { GoPlus, GoDash } from 'react-icons/go';
import { BsCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs'; //school
import { MdWorkOutline } from 'react-icons/md';//work
import { AiOutlineHome } from 'react-icons/ai';//home
import { CgMore, CgGoogleTasks } from 'react-icons/cg';
import { MdDateRange } from 'react-icons/md';
import { v4 } from 'uuid';

import HeadShake from 'react-reveal/HeadShake';


export default function Card({ data, setData, submittingStatue, status}) {
    const [add, setAdd] = useState(true)
    const [typeButtonDetail, setTypeButtonDetail] = useState(false)
    const [dateButtonDetail, setDateButtonDetail] = useState(false)
    const [detailButtonDetail, setDetailButtonDetail] = useState(false)

    const [selectNoneType, setSelectNoewType] = useState(true)
    const [selectedWork, setSelectedWork] = useState(false)
    const [selectedSchool, setSelectedSchool] = useState(false)
    const [selectedHome, setSelectedHome] = useState(false)
    let [counter, setCounter] =useState (0)

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
        setSelectNoewType(false)
        setSelectedWork(false)
        setSelectedSchool(false)
        setSelectedHome(false)
        if(ele === "Work" ){
            setSelectedWork(true)
        }else if(ele === "School"){
            setSelectedSchool(true)
        }else if(ele === "Home"){
            setSelectedHome(true)
        }
        setType(ele)
    }
    const [dueDate, setDueDate] = useState("")
    function dueDateChange(e) {
        setDueDate(e.target.value)
    }
    
    function addItem(e) {
        e.preventDefault(); // to prevent the web F5
        const errorMessage = document.querySelector('#error');
        submittingStatue.current = true ;
        if(!validInput(name)){
            errorMessage.innerHTML = "Please enter the name!"; //check the input is correct
            errorMessage.style.display = "block";
            setCounter(counter+=1)
        }  else if(!validInput(dueDate)){
            errorMessage.innerHTML = "Please choose a valid date!";
            errorMessage.style.display = "block";
            setCounter(counter+=1)
        }  else{
            errorMessage.style.display = "none";
            submittingStatue.current = true ;
        setData(function(prevData){
            return [
                {   
                    id: v4(),
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
        setAdd(!add)
        console.log(data)
    }
} 

function validInput (data) {
    return data !== null && data !== ''; // the input cannot empty 
}


    return(
        <>
            <div className="footer">
                <HeadShake spy={counter}>
                    <div id="error" className="error-box" role="alert">
                        A simple warning alert—check it out!
                    </div>
                </HeadShake>
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
                        <input type="text" className="task-name" placeholder="Your task" aria-label="Username" aria-describedby="basic-addon1"  id="newTaskName" value={name} onChange={nameChange} />
                        <button type="submit" className="" onClick={addItem}>Submit</button>
                        {/* <p className="task-name">test</p> */}
                        <div className="task-add-button">
                            <button className="task-detail" onClick={() => handleTaskDetailBox("detail")} >
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    <CgMore />
                                </IconContext.Provider>
                            </button>
                            <button className="task-date" onClick={() => handleTaskDetailBox("date")}  >
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    <MdDateRange />
                                </IconContext.Provider>
                            </button>
                            <button className="task-type" onClick={() => handleTaskDetailBox("type")} >
                                <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                    {selectNoneType && <CgGoogleTasks />}
                                    {selectedWork && <MdWorkOutline />}
                                    {selectedSchool && <BsBook />}
                                    {selectedHome && <AiOutlineHome />}
                                </IconContext.Provider>
                            </button>
                        </div>

                        {dateButtonDetail &&<div className="task-detail-date-box">
                            <input type="date" /* className="form-control" */ value={dueDate} onChange={dueDateChange} />
                        </div>}
                        {typeButtonDetail &&<div className="task-detail-box" >
                            <button className={selectedWork ?"selected add-type-button":"add-type-button"} onClick={() => handleTaskType("Work")} >
                                <IconContext.Provider value={{ size: "25px", className: "add-type-icon" }}>
                                    <MdWorkOutline />
                                </IconContext.Provider>
                                <p>Work</p>
                            </button>
                            <button className={selectedSchool ?"selected add-type-button":"add-type-button"} onClick={() => handleTaskType("School")} >
                                <IconContext.Provider value={{ size: "25px", className: "add-type-icon" }}>
                                    <BsBook />
                                </IconContext.Provider>
                                <p>School</p>
                            </button>
                            <button className={selectedHome ?"selected add-type-button":"add-type-button"} onClick={() => handleTaskType("Home")}>
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
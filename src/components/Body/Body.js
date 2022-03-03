import React, { useState,useEffect } from "react";
import Task from "../Task/Task";
import './Body.css';
/* import Checkbox from 'rc-checkbox'; */
import { IconContext } from "react-icons";
/* import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs'; */
import { MdExpandMore } from 'react-icons/md';


export default function Body({
    isFilter, CardData, filterTaskByType, setData, submittingStatue, setFilterTask, setStatus, filterTaskByDate, setFilterTaskByDate, setFilterTaskByType,
    showTypeSchool, showTypeWork, showTypeHome, setShowTypeSchool, setShowTypeWork, setShowTypeHome
    }) {
    const [ dateList, setDateList ] = useState(false)
    const [ showTaskDate, setShowTaskDate ] = useState(`Today ${new Date().toJSON().slice(0,10).replace(/-/g,'-')}`)

    var nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
    const handleDateList = () => {
        setDateList(!dateList)
    }

    useEffect(() => {
        setFilterTaskByType(filterTaskByDate)
    },[filterTaskByDate])

    /* useEffect(() => {
        if(showTypeSchool && showTypeWork && showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "School" || task.type === "Work" || task.type === "Home"))
        }else if(showTypeSchool && showTypeWork && !showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "School" || task.type === "Work"))
        }else if(showTypeSchool && !showTypeWork && showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "School" || task.type === "Home"))
        }else if(!showTypeSchool && showTypeWork && showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "Work" || task.type === "Home"))
        }else if(showTypeSchool && !showTypeWork && !showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "School"))
        }else if(!showTypeSchool && showTypeWork && !showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "Work"))
        }else if(!showTypeSchool && !showTypeWork && showTypeHome){
            setFilterTaskByDate(filterTaskByDate.filter((task) => task.type === "Home"))
        }

        setFilterTaskByType(filterTaskByDate)
    },[filterTaskByDate]) */

    
    const handleTaskDate = date => {
        if(date === "all"){
            setFilterTaskByDate(CardData)
            setShowTaskDate("All Day")
        }else if(date === "before"){
            setFilterTaskByDate(CardData.filter((task) => task.dueDate < nowDate ))
            setShowTaskDate("Before Day")
        }else if(date === "today"){
            setFilterTaskByDate(CardData.filter((task) => task.dueDate === nowDate ))
            setShowTaskDate(`Today ${new Date().toJSON().slice(0,10).replace(/-/g,'-')}`)
        }else if(date === "after"){
            setFilterTaskByDate(CardData.filter((task) => task.dueDate > nowDate ))
            setShowTaskDate("After Day")
        }
        setDateList(!dateList)
        setShowTypeSchool(false)
        setShowTypeWork(false)
        setShowTypeHome(false)
    } 

    return( 
        <div className="main-body">
            <div className="opening">
                {/* <div className="date"> */}
                    <p className="datee">{showTaskDate}</p>
                    <button className="more-day" onClick={handleDateList}>
                        <IconContext.Provider value={{ size: "20px", className: "more" }}>
                            <MdExpandMore />
                        </IconContext.Provider>
                    </button>
                {/* </div> */}
            </div>
            {dateList && <div className="time-bar">
                <button className="time-button" onClick={() => handleTaskDate("all")} >All Day</button>
                <button className="time-button" onClick={() =>handleTaskDate("before")}>Before Day</button>
                <button className="time-button" onClick={() =>handleTaskDate("today")}>Today</button>
                <button className="time-button" onClick={() =>handleTaskDate("after")}>After Day</button>
            </div>}
            <div>
                <div>
                    <p className="list-name" >Todo</p>
                </div>
            </div>
            {filterTaskByType.map((task) => {
                
                const { name, dueDate, type, description, id, status} = task;
                return(
                    <Task
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        status={status}
                        type={type}
                        dueDate={dueDate}
                        isFilter={isFilter} CardData={CardData} filterTaskByType={filterTaskByType}
                        setData={setData} submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask} setStatus={setStatus}
                    />
                );
            })}
            <div>
                <div>
                    <p className="list-name">Done</p>
                </div>
            </div>
            {filterTaskByType.map((task) => {
                if(task.status){
                const { name, dueDate, type, description, id, status} = task;
                return(
                    <Task
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        status={status}
                        type={type}
                        dueDate={dueDate}
                        isFilter={isFilter} CardData={CardData} filterTaskByType={filterTaskByType}
                        setData={setData} submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask} setStatus={setStatus}
                    />
                );}
                return console.log('123')
            })}
            {/* <div>
                <div>
                    <p>Todo</p>
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
                    <p className="date">Date:2020-02-24</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Done</p>
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
                    <p className="date">Date:2020-02-24</p>
                </div>
            </div> */}
        </div>
    )
}
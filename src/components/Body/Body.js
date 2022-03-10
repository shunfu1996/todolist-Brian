import React, { useState,useEffect } from "react";
import Task from "../Task/Task";
import './Body.css';
/* import Checkbox from 'rc-checkbox'; */
import { IconContext } from "react-icons";
/* import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs'; */
import { MdExpandMore } from 'react-icons/md';

import { useSpring, animated } from 'react-spring'


export default function Body({
    CardData, filterTaskByType, setData, submittingStatue, setStatus, setStar, filterTaskByDate, setFilterTaskByDate, setFilterTaskByType,
    showTypeSchool, showTypeWork, showTypeHome, setShowTypeSchool, setShowTypeWork, setShowTypeHome,
    showTaskDate, setShowTaskDate,
    showTypeStar,
    isFilter, setIsFilter,
    add, setAdd
    }) {
    const [ dateList, setDateList ] = useState(false)
    /* const [ showTaskDate, setShowTaskDate ] = useState(`Today ${new Date().toJSON().slice(0,10).replace(/-/g,'-')}`) */

    var nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
    const handleDateList = () => {
        setDateList(!dateList)
    }

    const handleStart = () => {
        setAdd(false)
        toggle(false)
    }
 
    useEffect(() => {
        setFilterTaskByType(filterTaskByDate)
    },[filterTaskByDate])

    useEffect(() => {
        setDateList(false)
    },[showTypeStar])

    /* useEffect(() => {
        console.log(`test:${filterTaskByType}`)
        console.log(filterTaskByType)
        console.log((filterTaskByType.filter((task) => !task.status)).length)
    }) */

    useEffect(() => {
        if((filterTaskByType.filter((task) => !task.status)).length === 0){
            setIsFilter(true)
        }else{
            setIsFilter(false)
        }
    },[(filterTaskByType.filter((task) => !task.status)).length])

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

    //
    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
      })

    return( 
        <div className="main-body">
            <div className="opening">
                {/* <div className="date"> */}
                    {/* <p className="datee">{showTaskDate}</p> */}
                    {showTypeStar ?
                    <>
                        <p className="datee">{showTaskDate}</p>
                        <button className="more-day disabled" onClick={handleDateList} disabled>
                            <IconContext.Provider value={{ size: "30px", className: "more" }}>
                                <MdExpandMore />
                            </IconContext.Provider>
                        </button>
                    </>:
                    <button className="more-day" onClick={handleDateList} >
                        <p className="datee">{showTaskDate}</p>
                        <IconContext.Provider value={{ size: "30px", className: "more" }}>
                            <MdExpandMore />
                        </IconContext.Provider>
                    </button>}
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
            <div>
                {isFilter &&
                    <div className="opening-task">
                        <p>Are you ready to use Task Manager?</p>
                        {/* <button className="start-button" onClick={handleStart}  ><span>START</span></button> */}
                        <button className="start-button" onClick={handleStart}  >
                            <animated.div
                                className="spring"
                                style={{
                                opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                                scale: x.to({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                }),
                                }}>
                                <span>START</span>
                            </animated.div>
                        </button>
                    </div>
                }
                {filterTaskByType.map((task) => {
                    if(!task.status){
                    const { name, dueDate, type, description, id, status, star} = task;
                    return(
                        <Task
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            status={status}
                            star={star}
                            type={type}
                            dueDate={dueDate}
                            isFilter={isFilter} CardData={CardData} filterTaskByType={filterTaskByType}
                            setData={setData} submittingStatue={submittingStatue}
                            setFilterTaskByType={setFilterTaskByType} setStatus={setStatus} setStar={setStar}
                        />
                    );
                    }
                    return console.log("todo")
                })}
            </div>
            <div>
                <div>
                    <p className="list-name">Done</p>
                </div>
            </div>
            {filterTaskByType.map((task) => {
                if(task.status){
                const { name, dueDate, type, description, id, status, star} = task;
                return(
                    <Task
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        status={status}
                        star={star}
                        type={type}
                        dueDate={dueDate}
                        isFilter={isFilter} CardData={CardData} filterTaskByType={filterTaskByType}
                        setData={setData} submittingStatue={submittingStatue}
                        setFilterTaskByType={setFilterTaskByType} setStatus={setStatus} setStar={setStar}
                    />
                );}
                return console.log("done")
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
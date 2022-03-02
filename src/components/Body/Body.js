import React, { useState } from "react";
import Task from "../Task/Task";
import './Body.css';
import Checkbox from 'rc-checkbox';
import { IconContext } from "react-icons";
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';


export default function Body({ isFilter, CardData, filterTask, setData, submittingStatue, setFilterTask, setStatus }) {
    const [dateList, setDateList] = useState(false)

    const handleDateList = () => {
        setDateList(!dateList)
    }
    return( 
        <div className="main-body">
            <div className="opening">
                <p>Good Day</p>
                {/* <div className="date"> */}
                    <p className="datee">23 Feb 2022</p>
                    <button className="more-day" onClick={handleDateList}>
                        <IconContext.Provider value={{ size: "20px", className: "more" }}>
                            <MdExpandMore />
                        </IconContext.Provider>
                    </button>
                {/* </div> */}
            </div>
            {dateList && <div className="time-bar">
                <button className="time-button">All</button>
                <button className="time-button">Past</button>
                <button className="time-button">Today</button>
                <button className="time-button">Future</button>
            </div>}
            <div>
                <div>
                    <p className="list-name" >Todo</p>
                </div>
            </div>
            {CardData.map((task) => {
                
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
                        isFilter={isFilter} CardData={CardData} filterTask={filterTask}
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
            {CardData.map((task) => {
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
                        isFilter={isFilter} CardData={CardData} filterTask={filterTask}
                        setData={setData} submittingStatue={submittingStatue}
                        setFilterTask={setFilterTask} setStatus={setStatus}
                    />
                );}
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
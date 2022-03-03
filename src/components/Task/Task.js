import React, { useState } from "react";
import './Task.css';
import { confirm } from "react-confirm-box";
import { IconContext } from "react-icons";
import Checkbox from 'rc-checkbox';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { MdExpandMore, MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineCancel, MdCancel } from 'react-icons/md';
import { CgMore, CgMoreO } from 'react-icons/cg';



export default function Task({status, id, name, description, type, dueDate, isFilter, CardData, setData, submittingStatue, setStatus, setFilterTaskByType }) {
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


    //

    async function deleteItem() {  //the button of delete task  function 
        submittingStatue.current = true;
        if(status){
            setData(function(prev) {
                return prev.filter(item => item.id !== id)
            })
            setFilterTaskByType(function(prev) {   // keep the screen is show correct data
                return prev.filter(item => item.id !== id) 
            });
        } else {
            const result = await confirm("Are you sure to delete?");
            if (result) {
                setData(function(prev) {
                return prev.filter(item => item.id !== id)      
            })
            setFilterTaskByType(function(prev) {
                return prev.filter(item => item.id !== id)
            });
            }
        }
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
                        <p className="date">{dueDate}</p>
                        {showDetail &&<div className="show-task-detail-box">{description}</div>}
                    </div>
                    <button className="detail-button" onClick={handleShowDetail} >
                        <IconContext.Provider value={{ size: "35px", className: "type-icon" }}>
                            <CgMore />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "35px", className: "hover-type-icon" }}>
                            <CgMoreO />
                        </IconContext.Provider>
                    </button>
                    <button className="delete-button" onClick={deleteItem}>
                        <IconContext.Provider value={{ size: "35px", className: "cancel-icon" }}>
                            <MdOutlineCancel />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "35px", className: "hover-cancel-icon" }}>
                            <MdCancel />
                        </IconContext.Provider>
                    </button>
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
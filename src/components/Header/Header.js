import { useState } from 'react';
import './Header.css';
import { IconContext } from "react-icons";
import { GoPlus } from 'react-icons/go';
import { BsBook } from 'react-icons/bs'; //school
import { MdWorkOutline } from 'react-icons/md';//work
import { AiOutlineHome } from 'react-icons/ai';//home


export default function Header({ CardData, setFilterTask, filterTask, numberOfSchool,
    numberOfHome, numberOfWork, numberOfDone, numberOfTodo, setFilingState,
    filtingState, numberOfPast, numberOfToday, numberOfFuture }) {
    const [ userName, setUserName ] = useState("GUEST")
    const [ userList, setUserbutton ] = useState(false)


    const handleChooseUserList = () => {
        setUserbutton(!userList)
    }

    const handleTyleTask = () => {
        setUserbutton(!userList)
    }


    ///

    const handleType = (type) =>{
        if(type === "School" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "School"))
        } else if(type === "Work" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "Work"))
        } else if(type === "Home" && filtingState === "done"){
        setFilterTask(CardData.filter((task) => task.status === "DONE").filter((task) => task.type === "Home"))
        }else if(type === "School" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "School"))
        } else if(type === "Work" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "Work"))
        } else if(type === "Home" && filtingState === "todo"){
        setFilterTask(CardData.filter((task) => task.status === "TODO").filter((task) => task.type === "Home"))
        }else if(type === "School" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "School"))
        } else if(type === "Work" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "Work"))
        } else if(type === "Home" && filtingState === "all"){
        setFilterTask(CardData.filter((task) => task.type === "Home"))
        }
    }

    return(
        <>
            <nav className='nav'>
                <div className='topnav'>
                    <img src="https://img.icons8.com/clouds/100/000000/todo-list.png" id="Check" alt="Check" height={"100px"}/>
                    <a>To Do list</a>
                    <div className='button-right'>
                        <button className='user-button' onClick={handleChooseUserList} >{userName[0]}</button>
                    </div>
                </div>
                    {userList &&
                    <div className='list-right'>
                        <div className='user-list'>
                            <button className='user-list-button' onClick={handleChooseUserList} >{userName}</button>
                            <button className='user-list-button' onClick={handleChooseUserList} >{userName}</button>
                            <button className='add-user'>add user</button>
                        </div>
                    </div>}
            </nav>
            <nav className='bg'>
               <div className='leftnav'>
                   <div className='test'>
                        <button className='add-task'>
                            <IconContext.Provider value={{ size: "40px", className: "add-icon" }}>
                                <GoPlus />
                            </IconContext.Provider>
                            <p className='add-task-text'> add task</p>
                        </button>   
                        <button className='type-task' onClick={() => handleType("School")}>
                            <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                <BsBook />
                            </IconContext.Provider>
                            <p className='type-task-text'>school</p>
                        </button>
                        <button className='type-task' onClick={() => handleType("Work")}>
                            <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                <MdWorkOutline />
                            </IconContext.Provider>
                            <p className='type-task-text'>work</p>
                        </button>
                        <button className='type-task' onClick={() => handleType("Home")}>
                            <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                <AiOutlineHome />
                            </IconContext.Provider>
                            <p className='type-task-text'>home</p>
                        </button>
                    </div>
               </div>
            </nav>
        </>
    )
}
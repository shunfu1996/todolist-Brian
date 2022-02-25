import { useState } from 'react';
import './Header.css';
import { IconContext } from "react-icons";
import { GoPlus } from 'react-icons/go';
import { BsBook } from 'react-icons/bs'; //school
import { MdWorkOutline } from 'react-icons/md';//work
import { AiOutlineHome } from 'react-icons/ai';//home


export default function Header() {
    const [ userName, setUserName ] = useState("GUEST")
    const [ userList, setUserbutton ] = useState(false)


    const handleChooseUserList = () => {
        setUserbutton(!userList)
    }

    const handleTyleTask = () => {
        setUserbutton(!userList)
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
                        <button className='type-task' onClick={handleTyleTask}>
                            <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                <BsBook />
                            </IconContext.Provider>
                            <p className='type-task-text'>school</p>
                        </button>
                        <button className='type-task'>
                            <IconContext.Provider value={{ size: "25px", className: "type-icon" }}>
                                <MdWorkOutline />
                            </IconContext.Provider>
                            <p className='type-task-text'>work</p>
                        </button>
                        <button className='type-task'>
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
import './App.css'
import { useState, useEffect, useRef } from 'react';
import useLocalStorage from "use-local-storage";
import Hearder from './components/Header/Header'
import Body from './components/Body/Body'
import Card from './components/Card/Card'

function App() {
  const [data, setData] = useLocalStorage/* useState */("data", [/* {id:'test', name: 'task name:', description: 'task detail:', type: 'work', dueDate: '2022-02-25', status:false } */]);
  var nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-')
  const [filterTaskByDate, setFilterTaskByDate] = useState(data.filter((task) => task.dueDate === nowDate ));
  const [filterTaskByType, setFilterTaskByType] = useState(filterTaskByDate);
  const [filtingState, setFilingState] = useState("all")   
  const [isFilter, setIsFilter] = useState(false);// no use
  const [status, setStatus] = useState(false);
  const [star, setStar] = useState(false);

  const [ showTypeSchool, setShowTypeSchool ] = useState(false)
  const [ showTypeWork, setShowTypeWork ] = useState(false)
  const [ showTypeHome, setShowTypeHome ] = useState(false)
  const [ showTypeStar, setShowTypeStar ] = useState(false)


  const [ showTaskDate, setShowTaskDate ] = useState(`Today ${new Date().toJSON().slice(0,10).replace(/-/g,'-')}`)


  /* useEffect(() => {
    setFilterTaskByType(filterTaskByDate)
  },[filterTaskByDate]) */

/*const [numberOfSchool, setNumberOfSchool] = useState((data.filter((task) => task.type === "School")).length)
  const [numberOfWork, setNumberOfWork] = useState((data.filter((task) => task.type === "Work")).length)
  const [numberOfHome, setNumberOfHome] = useState((data.filter((task) => task.type === "Home")).length)
  const [numberOfDone, setNumberOfDone] = useState((data.filter((task) => task.status === "DONE")).length)
  const [numberOfTodo, setNumberOfTodo] = useState((data.filter((task) => task.status === "TODO")).length)
  const [numberOfPast, setNumberOfPast] = useState((data.filter((task) => nowDate > task.dueDate).length))
  const [numberOfToday, setNumberOfToday] = useState((data.filter((task) => nowDate === task.dueDate).length))
  const [numberOfFuture, setNumberOfFuture] = useState((data.filter((task) => nowDate < task.dueDate).length)) */

  const submittingStatue = useRef(false);

  
 

  /* useEffect(() => {
    if(filtingState === "all"){
      setNumberOfPast((data.filter((task) => nowDate > task.dueDate).length))
    } else if(filtingState === "done"){
      setNumberOfPast(((data.filter((task) => task.status === "DONE")).filter((task) => nowDate > task.dueDate).length))
    } else if(filtingState === "todo"){
      setNumberOfPast(((data.filter((task) => task.status === "TODO")).filter((task) => nowDate > task.dueDate).length))
    } 
  },[filtingState, data, nowDate])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfToday((data.filter((task) => nowDate === task.dueDate).length))
    } else if(filtingState === "done"){
      setNumberOfToday(((data.filter((task) => task.status === "DONE")).filter((task) => nowDate === task.dueDate).length))
    } else if(filtingState === "todo"){
      setNumberOfToday(((data.filter((task) => task.status === "TODO")).filter((task) => nowDate === task.dueDate).length))
    }
  },[filtingState, data, nowDate])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfFuture((data.filter((task) => nowDate < task.dueDate).length))
    } else if(filtingState === "done"){
      setNumberOfFuture(((data.filter((task) => task.status === "DONE")).filter((task) => nowDate < task.dueDate).length))
    } else if(filtingState === "todo"){
      setNumberOfFuture(((data.filter((task) => task.status === "TODO")).filter((task) => nowDate < task.dueDate).length))
    }
  },[filtingState, data, nowDate])
  useEffect(() => {
    setNumberOfDone((data.filter((task) => task.status === "DONE")).length)
  },[data])
  useEffect(() => {
    setNumberOfTodo((data.filter((task) => task.status === "TODO")).length)
  },[data])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfSchool((data.filter((task) => task.type === "School")).length)
    } else if(filtingState === "done"){
      setNumberOfSchool(((data.filter((task) => task.status === "DONE")).filter((task) => task.type === "School")).length)
    } else if(filtingState === "todo"){
      setNumberOfSchool(((data.filter((task) => task.status === "TODO")).filter((task) => task.type === "School")).length)
    }
  },[filtingState, data])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfWork((data.filter((task) => task.type === "Work")).length)
    } else if(filtingState === "done"){
      setNumberOfWork(((data.filter((task) => task.status === "DONE")).filter((task) => task.type === "Work")).length)
    } else if(filtingState === "todo"){
      setNumberOfWork(((data.filter((task) => task.status === "TODO")).filter((task) => task.type === "Work")).length)
    }
  },[filtingState, data])
  useEffect(() => {
    if(filtingState === "all"){
      setNumberOfHome((data.filter((task) => task.type === "Home")).length)
    } else if(filtingState === "done"){
      setNumberOfHome(((data.filter((task) => task.status === "DONE")).filter((task) => task.type === "Home")).length)
    } else if(filtingState === "todo"){
      setNumberOfHome(((data.filter((task) => task.status === "TODO")).filter((task) => task.type === "Home")).length)
    }
  },[filtingState, data]) */
  return (
    <>
      <Hearder
      CardData={data} filterTaskByType={filterTaskByType} setFilterTaskByType={setFilterTaskByType} setIsFilter={setIsFilter} setData={setData} filterTaskByDate={filterTaskByDate}
      showTypeSchool={showTypeSchool} setShowTypeSchool={setShowTypeSchool} showTypeWork={showTypeWork} setShowTypeWork={setShowTypeWork} showTypeHome={showTypeHome} setShowTypeHome={setShowTypeHome} showTypeStar={showTypeStar} setShowTypeStar={setShowTypeStar}
      /* numberOfSchool={numberOfSchool} numberOfWork={numberOfWork} numberOfHome={numberOfHome} numberOfDone={numberOfDone}
      numberOfTodo={numberOfTodo} */ setFilingState={setFilingState} filtingState={filtingState} 
      /* numberOfPast={numberOfPast} numberOfToday={numberOfToday} numberOfFuture={numberOfFuture} */ 
      showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate}
      />
      <Body
      isFilter={isFilter} CardData={data} filterTaskByType={filterTaskByType} setData={setData} submittingStatue={submittingStatue} setFilterTaskByType={setFilterTaskByType} setStatus={setStatus} setStar={setStar} filterTaskByDate={filterTaskByDate} setFilterTaskByDate={setFilterTaskByDate}
      showTypeSchool={showTypeSchool} setShowTypeSchool={setShowTypeSchool} showTypeWork={showTypeWork} setShowTypeWork={setShowTypeWork} showTypeHome={showTypeHome} setShowTypeHome={setShowTypeHome} showTypeStar={showTypeStar} setShowTypeStar={setShowTypeStar}
      showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate}
      />
      <Card data={data} setData={setData} submittingStatue={submittingStatue} status={status} star={star} />
    </>
  );
}

export default App;

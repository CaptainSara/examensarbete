import React, {useState} from 'react'
import Calendar from "react-calendar"

function Calender() {
  const [date, setDate] = useState(new Date())
  return (
    <div className='calender-div'>
      <div className="app">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date}/>
        </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
    </div>
  </div>
  )
}

export default Calender

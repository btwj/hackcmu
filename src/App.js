import React from 'react';
import './App.css';
import Form from './components/Form.js';
import Calendar from './components/Calendar.js';
import { useInfoStore } from './stores/Info.js';
import CalendarExplanation from './components/CalendarExplanation';

function App() {
  const calendarData = useInfoStore(state => state.calendarData);
  const sleepTime = useInfoStore(state => state.sleepTime);
  const wakeTime = useInfoStore(state => state.wakeTime);

  return (
    <div className="App">
      <Form />
      <Calendar data={calendarData} wakeTime={wakeTime} sleepTime={sleepTime}/>
      <CalendarExplanation />
    </div>
  );
}

export default App;

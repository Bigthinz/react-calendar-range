import React, { useState } from 'react';
import './style.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, Calendar } from 'react-date-range';

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <DateRangePicker
        ranges={[selectionRange]}
        rangeColors={['#fd5b61']}
        onChange={handleSelect}
      />

      {/* <Calendar
        date={new Date()}
   
      /> */}
    </div>
  );
}

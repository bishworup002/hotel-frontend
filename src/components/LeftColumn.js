import React from 'react';
import RentalInfo from './RentalInfo';
import HostInfo from './HostInfo';
import CheckInInfo from './CheckInInfo';
import Description from './Description';
import SleepingArrangement from './SleepingArrangement';
import Amenities from './Amenities';
import Calendar from './Calendar';

function LeftColumn() {
  return (
    <div className="left-column">
      <RentalInfo />
      <hr />
      <HostInfo />
      <hr />
      <CheckInInfo />
      <hr />
      <Description />
      <hr />
      <SleepingArrangement />
      <hr />
      <Amenities />
      <hr />
      <Calendar/>
    </div>
  );
}

export default LeftColumn;

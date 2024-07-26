import React from 'react';
import { CookingPotIcon, Tv,Forklift,WashingMachine, AlarmCheck, Wifi, Wind, Refrigerator, BellRing,LucideCloudRainWind } from 'lucide-react';

function Amenities() {
  return (
    <section className="amenities-container">
      <h2>What this place offers</h2>
      <ul className="amenities-list">
        <li>
          <CookingPotIcon className="icon" />
          Kitchen
        </li>
        <li>
          <Tv className="icon" />
          TV
        </li>
        <li>
          <WashingMachine className="icon" />
          Washer
        </li>
        <li>
          <Wind className="icon" />
          Hair dryer
        </li>
        <li className="disabled1">
          <AlarmCheck className="icon" />
          Carbon monoxide alarm
        </li>
        <li>
          <Wifi className="icon" />
          Wifi
        </li>
        <li>
          <Forklift className="icon" />
          Elevator
        </li>
        <li>
          <LucideCloudRainWind className="icon" />
          Dryer
        </li>
        <li>
          <Refrigerator className="icon" />
          Refrigerator
        </li>
        <li className="disabled1">
          <BellRing className="icon" />
          Smoke alarm
        </li>
      </ul>
      <button>Show all 32 amenities</button>
    </section>
  );
}

export default Amenities;

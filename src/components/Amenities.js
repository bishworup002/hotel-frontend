import React from 'react';
import { CookingPotIcon, Tv,Weight, Forklift, WashingMachine, AlarmCheck, Wifi, Wind, Refrigerator, BellRing, LucideCloudRainWind, Umbrella } from 'lucide-react';

const iconMap = {
  'Wi-Fi': Wifi,
  'WiFi': Wifi,
  'Pool': Umbrella,
  'Beach Access': Umbrella,
  'Kitchen': CookingPotIcon,
  'TV': Tv,
  'Washer': WashingMachine,
  'Hair dryer': Wind,
  'Carbon monoxide alarm': AlarmCheck,
  'Elevator': Forklift,
  'Dryer': LucideCloudRainWind,
  'Refrigerator': Refrigerator,
  'Gym':Weight,
  'Smoke alarm': BellRing,
};

function Amenities({ amenities }) {
  const getIcon = (amenity) => {
    const Icon = iconMap[amenity] || CookingPotIcon; // Default to CookingPotIcon if no match
    return <Icon className="icon" />;
  };

  return (
    <section className="amenities-container">
      <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
      <ul className="amenities-list grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-center space-x-2">
            {getIcon(amenity)}
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
      {amenities.length > 10 && (
        <button className="mt-4 bg-white text-black border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
          Show all {amenities.length} amenities
        </button>
      )}
    </section>
  );
}

export default Amenities;
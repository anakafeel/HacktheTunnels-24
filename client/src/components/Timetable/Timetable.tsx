// import "./Timetable.style.scss";

// export enum Days {
//   Sunday = "Sunday",
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = "Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday",
//   Saturday = "Saturday",
// }

// export interface CalendarBlock {
//   label: string;
//   startTime: string;
//   endTime: string;
//   days: Days[];
// }

// interface TimetableProps {
//   events: CalendarBlock[];
// }

// function Timetable({ events }: TimetableProps) {
//   const eventsToDisplay = events.filter(
//     (event) =>
//       event.startTime !== "" &&
//       event.endTime !== "" &&
//       event.startTime !== "NA" &&
//       event.endTime !== "NA",
//   );

//   return (
//     <div className="Timetable">
//       <table>
//         <thead>
//           <tr className="Timetable__head">
//             <th></th>
//             {Object.values(Days).map((day) => (
//               <th key={day}>{day}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 22 }, (_, i) => {
//             const hour = 8 + Math.floor(i / 2);
//             const minute = i % 2 === 0 ? "00" : "30";
//             const timeLabel = `${hour}:${minute}`;
//             return (
//               <tr key={timeLabel}>
//                 <td className={i % 2 === 0 ? "Timetable__cell--time" : ""}>
//                   {i % 2 === 0 ? timeLabel : null}
//                 </td>
//                 {Object.values(Days).map((day) => {
//                   const eventsForCell = eventsToDisplay.filter(
//                     (event) =>
//                       event.days.includes(day) &&
//                       (parseInt(event.startTime.split(":")[0]) < hour ||
//                         (parseInt(event.startTime.split(":")[0]) === hour &&
//                           parseInt(event.startTime.split(":")[1]) <=
//                             parseInt(minute))) &&
//                       (parseInt(event.endTime.split(":")[0]) > hour ||
//                         (parseInt(event.endTime.split(":")[0]) === hour &&
//                           parseInt(event.endTime.split(":")[1]) >
//                             parseInt(minute))),
//                   );

//                   return (
//                     <td
//                       key={day}
//                       className={`${
//                         eventsForCell.length > 1
//                           ? "Timetable__cell--event Timetable__cell--multiple-events"
//                           : eventsForCell.length === 1
//                           ? "Timetable__cell--event"
//                           : ""
//                       }`}
//                     >
//                       {eventsForCell.map((event, index) => (
//                         <div key={index} className="Timetable__event">
//                           <span className="event-label">{event.label}</span>
//                         </div>
//                       ))}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Timetable;


import React, { useState } from "react";
import "./Timetable.style.scss";

export enum Days {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export interface CalendarBlock {
  label: string;
  startTime: string;
  endTime: string;
  days: Days[];
}

interface TimetableProps {
  events: CalendarBlock[];
}

const colors = [
  '#FF5733', // Red
  '#33FF57', // Green
  '#3357FF', // Blue
  '#FF33A1', // Pink
  '#FFD700', // Gold
  '#FF8C00', // Dark Orange
  '#8A2BE2', // Blue Violet
  '#7FFF00', // Chartreuse
  '#FF1493', // Deep Pink
  '#00CED1', // Dark Turquoise
  '#ADFF2F', // Green Yellow
  '#FF4500'  // Orange Red
];

function Timetable({ events }: TimetableProps) {
  const [colorMap] = useState<{ [key: string]: string }>({}); // Store colors for each label

  const getColorForLabel = (label: string): string => {
    if (!colorMap[label]) {
      const availableColors = colors.filter(color => !Object.values(colorMap).includes(color));
      const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
      colorMap[label] = randomColor;
    }
    return colorMap[label];
  };

  const eventsToDisplay = events.filter(
    (event) =>
      event.startTime !== "" &&
      event.endTime !== "" &&
      event.startTime !== "NA" &&
      event.endTime !== "NA",
  );

  return (
    <div className="Timetable">
      <table>
        <thead>
          <tr className="Timetable__head">
            <th></th>
            {Object.values(Days).map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 22 }, (_, i) => {
            const hour = 8 + Math.floor(i / 2);
            const minute = i % 2 === 0 ? "00" : "30";
            const timeLabel = `${hour}:${minute}`;
            return (
              <tr key={timeLabel}>
                <td className={i % 2 === 0 ? "Timetable__cell--time" : ""}>
                  {i % 2 === 0 ? timeLabel : null}
                </td>
                {Object.values(Days).map((day) => {
                  const eventsForCell = eventsToDisplay.filter(
                    (event) =>
                      event.days.includes(day) &&
                      (parseInt(event.startTime.split(":")[0]) < hour ||
                        (parseInt(event.startTime.split(":")[0]) === hour &&
                          parseInt(event.startTime.split(":")[1]) <=
                            parseInt(minute))) &&
                      (parseInt(event.endTime.split(":")[0]) > hour ||
                        (parseInt(event.endTime.split(":")[0]) === hour &&
                          parseInt(event.endTime.split(":")[1]) >
                            parseInt(minute))),
                  );

                  return (
                    <td
                      key={day}
                      className={`${
                        eventsForCell.length > 1
                          ? "Timetable__cell--event Timetable__cell--multiple-events"
                          : eventsForCell.length === 1
                          ? "Timetable__cell--event"
                          : ""
                      }`}
                    >
                      {eventsForCell.map((event, index) => {
                        const color = getColorForLabel(event.label); // Get color for the event label
                        return (
                          <div key={index} className="Timetable__event" style={{ backgroundColor: color }}>
                            <span className="event-label">{event.label}</span>
                          </div>
                        );
                      })}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;

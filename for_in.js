// const sleepHours = {
//   monday: 7,
//   tuesday: 6,
//   wednesday: 8,
//   thursday: 7,
//   friday: 6,
//   saturday: 9,
//   sunday: 8,
//   idealHoursDay: 8,
// };

// // for... in

// const getActualSleepHours2 = () => {
//   let totalHours = 0;
//   for (let day in sleepHours) {
//     totalHours += sleepHours[day];
//   }
//   totalHours -= sleepHours.idealHoursDay;
//   return totalHours;
// };

// const getActualSleepHours = () => {
//   let totalHours = 0;
//   const days = Object.keys(sleepHours);
//   for (let i = 0; i < days.length; i++) {
//     const day = days[i];
//     if (day !== "idealHoursDay") {
//       totalHours += sleepHours[day];
//     }
//   }
//   return totalHours;
// };

// for... of

const activities = [
  { name: "Gym", time: 1 },
  { name: "Party", time: 2 },
  { name: "Watch TV", time: 3 },
  { name: "Play videogames", time: 5 },
];

// const calculateActivityTime = (activities) => {
//     let totalHours = 0;
//     for (let i = 0; i < activities.length; i++) {
//       totalHours += activities[i].time;
//     }
//     return totalHours;
//   };

const calculateActivityTime2 = () => {
  let totalHours = 0;
  for (let activity of activities) {
    totalHours += activity.time;
  }
  console.log(totalHours);
  return totalHours;
};

calculateActivityTime2();

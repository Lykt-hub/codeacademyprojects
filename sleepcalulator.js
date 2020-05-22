const getSleepHours = day => {
  day = day.toLowerCase();
  return day === 'monday' ? 8
  : day === 'tuesday' ? 9
  : day === 'wednesday' ? 1
  : day === 'thursday' ? 1
  : day === 'friday' ? 1
  : day === 'saturday' ? 1
  : day === 'sunday' ? 1
  : 'Invalid day of the week.'
}

const getActual = () => {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
}

const getIdeal = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const debt = () => {
  const actual = getActual();
  const ideal = getIdeal();
  return (actual === ideal ? "You got the perfect amount of sleep."
  : actual > ideal ? `You got more sleep than you wanted. ${actual - ideal} more hours to be exact.`
  : `You got too little sleep. You have ${Math.abs(actual-ideal)} hours of sleep to catch up on.` )
}

console.log(debt())

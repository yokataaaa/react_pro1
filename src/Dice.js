import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import dicRed01 from './assets/dice-red-1.svg';
import dicRed02 from './assets/dice-red-2.svg';
import dicRed03 from './assets/dice-red-3.svg';
import dicRed04 from './assets/dice-red-4.svg';
import dicRed05 from './assets/dice-red-5.svg';
import dicRed06 from './assets/dice-red-6.svg';

const DICE_IMAGES = {
  blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red: [dicRed01, dicRed02, dicRed03, dicRed04, dicRed05, dicRed06],
}

function Dice({ color, num }) {
  const src =  DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  // const diceImg = props.color === 'red' ? dicRed01 : diceBlue01;
  return <img src={src} alt={alt} />;
}

export default Dice;

import { getVaccineCard, newRegistration } from './methods';
import { readline, getUserInput } from './utils';

const options = `[1] Registration
[2] Vaccine Card
Choise Option: `;

async function main() {
  const input = await getUserInput(options);
  switch (Number(input.trim())) {
    case 1:
      await newRegistration();
      break;
    case 2:
      await getVaccineCard();
      break;
    default:
      break;
  }
  readline.close();
}

main();

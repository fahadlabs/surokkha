import { getVaccineCard, newRegistration } from './methods';
import { readline, getUserInput } from './utils';

async function main() {
  const input = await getUserInput(`[1] Registration
[2] Vaccine Card
Choise Option: `);
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

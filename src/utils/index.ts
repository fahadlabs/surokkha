import { createInterface } from 'readline';

export const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function getUserInput(message: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readline.question(message, (answer) => {
      if (!answer.trim()) {
        reject('Invalid input.');
      }
      resolve(answer.trim());
    });
  });
}

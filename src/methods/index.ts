import { headers, url_getVaccineCard } from '../config';
import { getUserInput } from '../utils';
import axios from 'axios';

export async function newRegistration() {
  throw new Error('Not implemented.');
}

export async function getVaccineCard() {
  const nid = await getUserInput('NID number: ');
  const dob = await getUserInput('Date of birth (MM/DD/YYYY): ');
  let data: { [name: string]: string } = { dob, nid };
  await axios.post(url_getVaccineCard, data, { headers });
  const otp = await getUserInput('OTP: ');
  data = { ...data, otp };
  const { data: result } = await axios.post(url_getVaccineCard, data, {
    headers,
  });
  console.log(result.response.data.data.vaccine_card_link);
}

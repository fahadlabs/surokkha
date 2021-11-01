const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IkxJVkUi.FPCKiT3oLsG_LN03a4ea8ZGSO3Drxe6jK70skLWaddM';

export const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export const url_getVaccineCard =
  'https://surokkha.gov.bd/manage/api/get-vaccine-card';

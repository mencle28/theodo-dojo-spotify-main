import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQC-pm3Ln-9hzsqhBMBAusvAQ-bpLUYIK65ZEKhk3SzS3k7sVuIW7-_29OpVJKfjm7_BrA6r6Xr2JXQN6KXIBs4poRfFfxpq6X5EBxR7oqjH1TLsA2q65dAzc4pW790v4jWxkDeoU6dlY4JlXpdz-4nmmvnKYM2hfZFp9Jc3U8JSlbXs6gcIPDZNjeG5hjjsxqFNl2YhNKS_vlKI0xosW7R7UiyShvy8_qg6nGIZXs0qNSRiS68q-FIoHg13F1fF5vKw-4tZZkdcT9a0NLfIfDVRAGPEPVV8zddo4tyRueSAQnWvMLBT_QmljJ1Q3zUdQ0psiiBaI_TTMk4ec_Ipjz6ceWcJmTBFuCahAKMb5SY-148';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};

import { SavedTrack } from 'spotify-types';

const apiToken: string =
  'BQCpyAVtj1MpZc0hW9M7JCyEf1tzK4pwlKElktpnU_R4CKBddhbcJ_J5jl55-vp3u77gPUreTF4GQn9efO7ANS0ZqNtVmrRDP6Aw8phUPBKa211p8blRWMexd7qk80vqdZpzzZ1Ei0xjF2eUBTnWFITYVm305uKijXcHDxdvNqWpVlx_7zMWPRdh_P4Lj6ZTm-jr76Sei-xI5BxIKydgJEWxgE_Sa7BXIPCmEEKcb55sVJ1iJUxLiJjoaKdJ7n_ja39eNFf3Ypw9t6u7gGbj_8uhGBQux12VrRnncAEoUJmrcS_LD0wilYsVxnj3ttVUuET15OAfudM4gLAfacQ4';

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

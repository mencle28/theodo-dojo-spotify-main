import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const trackUrls = [
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];

  //var trackIndex = 0;
  const [trackIndex, setTrackIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  console.log('logs');
  console.log(tracks);

  const goToNextTrack = () => {
    //incrémente la variable numéro de son
    if (trackIndex < trackUrls.length - 1) {
      setTrackIndex(trackIndex + 1);
      return;
    }
    setTrackIndex(0);
  };
  setIsLoading(tracks == undefined);

  if (isLoading) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blind Test </h1>
        </header>
        <div className="App-images">
          <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
          <p> Le nombre de morceaux disponible est {tracks.length}</p>

          <p>le titre est {tracks[0].track.name}</p>
        </div>

        <div className="App-buttons"></div>
        <audio src={trackUrls[trackIndex]} controls />
        <button onClick={goToNextTrack}>Next track</button>
      </div>
    );
  }
  return <p>Loading</p>;
};

export default App;

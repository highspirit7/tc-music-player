import { genres } from '@/lib/const';
import TrackCardList from './track-card-list';
import { useStore } from '@/store';

function Default() {
  const mainTracks = useStore(state => state.mainTracks);
  return (
    <main className="flex-1 overflow-auto bg-background">
      <div className="sticky top-0 p-4 border-b border-border z-50 bg-background">
        <h1 className="text-2xl font-bold">Your Music</h1>
      </div>
      {genres.map(genre => (
        <TrackCardList tracks={mainTracks[genre]} genre={genre} key={genre} />
      ))}
    </main>
  );
}

export default Default;

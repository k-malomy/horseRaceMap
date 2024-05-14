import RaceCard from '@/ui/race-card';

export default function Home() {
  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-nowrap space-x-4">
        <RaceCard />
        <div className="racecard shrink-0"></div>
        <RaceCard />
        <div className="racecard shrink-0"></div>
        <RaceCard />
        <RaceCard />
        <div className="racecard shrink-0"></div>
        <RaceCard />
        <div className="racecard shrink-0"></div>
        <RaceCard />
      </div>
      <div className="flex flex-nowrap space-x-4">
        <RaceCard></RaceCard>
        <RaceCard></RaceCard>
        <RaceCard></RaceCard>
        <RaceCard></RaceCard>
      </div>
    </div>
  );
}

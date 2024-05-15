import RaceCard from '@/ui/race-card';
import EmptyRaceCard from '@/ui/empty-race-card';
import { races, alignedRaces } from '@/lib/load';

export default function Home() {
  return (
    races.categories.map((category) => {
      return (
        <div key={ category.name } className="p-5 grid grid-rows-7 grid-flow-col gap-4">
          {
            alignedRaces.map((race) => {
              if (race === null) {
                return (
                  <EmptyRaceCard race={race} />
                )
              } else {
                return (
                  <RaceCard race={race} />
                )
              }
            })
          }
        </div>);
    })
  )
}

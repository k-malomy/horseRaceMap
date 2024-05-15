import clsx from 'clsx';
import { Race } from '@/lib/model/race'

export default function RaceCard({
    race,
}: {
    race: Race;
}) {
    return (
        <div className={clsx('racecard shrink-0 bg-white border shadow-md rounded-xl', {
            'shadow-blue-300/50': race.grade === 'G1',
            'shadow-rose-300/50': race.grade === 'G2',
            'shadow-emerald-300/50': race.grade === 'G3',
            'shadow-slate-300/50': race.grade === 'OP',
        })}>
            <div className={clsx('border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5', {
                'bg-violet-800': race.grade === 'G1',
                'bg-rose-700': race.grade === 'G2',
                'bg-emerald-700': race.grade === 'G3',
                'bg-slate-700': race.grade === 'OP',
            })}>
                <h3 className="text-lg font-bold text-gray-50">
                    {race.name} ({race.grade})
                </h3>
            </div>
            <div className="p-4 md:p-5">
                <p className="mt-2 text-gray-600">
                    { race.date } <br/>
                    {race.course}競馬場 {race.type}{ race.dist }m <br />
                    {race.age}{race.sex} { race.weight }
                </p>
            </div>
        </div>
    );
}

function cardColor({
    grade,
}: {
    grade: string;
}) {
    if (grade === 'G1') {
        return 'bg-indigo-800'
    } else if (grade === 'G2') {
        return 'bg-red-800'
    } else if (grade === 'G3') {
        return 'bg-lime-800'
    }
}

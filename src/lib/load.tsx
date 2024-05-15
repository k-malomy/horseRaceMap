import { load } from 'js-yaml'
import { readFileSync } from 'fs'
import { group } from 'console'
import { RaceSystem, Category, Race } from '@/lib/model/race'
import { stringify } from 'querystring'

export const races = load(readFileSync('src/lib/races.yaml')) as RaceSystem

export const alignedRaces = alignRace(races)

function alignRace(races: RaceSystem) {
    let alignedRaces: Array<Race | null> = [];
    const smileRaceNums = getSmileRaceNum(races.categories[0])
    races.categories[0].groups.forEach(group => {
        const smileRaceMap = new Map<string, Array<Race | null>>();
        smileRaceNums.forEach((value: number, smile: string) => {
            smileRaceMap.set(smile, [...Array(value)].map(() => null))
        })

        // sort distance and grade as ascending
        group.races.sort((a, b) => {
            if (a.grade < b.grade) {
                return 1
            } else if (a.grade > b.grade) {
                return -1
            } else {
                return 0
            }
        }).sort((a, b) => a.dist - b.dist).forEach(race => {
            const smile = getSmile(race)
            smileRaceMap.set(smile, [...[race], ...smileRaceMap.get(smile)?.slice(0, -1) ?? []])
        })

        alignedRaces = [
            ...alignedRaces,
            ...smileRaceMap.get('extended') ?? [],
            ...smileRaceMap.get('long') ?? [],
            ...smileRaceMap.get('intermediate') ?? [],
            ...smileRaceMap.get('mile') ?? [],
            ...smileRaceMap.get('sprint') ?? [],
        ] 
    });

    console.log(alignedRaces)
    return alignedRaces
}

function getSmileRaceNum(category: Category) {
    const maxSmiles = new Map<string, number>();
    category.groups.map((group) => {
        const smiles = new Map<string, number>();
        group.races.map((race) => {
            const smile = getSmile(race)
            smiles.set(smile, (smiles.get(smile) ?? 0) + 1)
        });

        smiles.forEach((value: number, smile: string) => {
            maxSmiles.set(smile, Math.max(maxSmiles.get(smile) ?? 0, value))
        })
    });
    console.log(maxSmiles)
    return maxSmiles
}

function getSmile(race: Race): string {
    if (race.dist < 1600) {
        return 'sprint'
    } else if (race.dist < 1900) {
        return 'mile'
    } else if (race.dist < 2100) {
        return 'intermediate'
    } else if (race.dist < 2700) {
        return 'long'
    } else {
        return 'extended'
    }
}

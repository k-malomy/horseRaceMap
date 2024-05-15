export type RaceSystem = {
    categories: Array<Category>
}

export type Category = {
    name: string,
    groups: Array<RaceGroup>
}

export type RaceGroup = {
    num: number,
    races: Array<Race>
}

export type Race = {
    name: string,
    grade: string,
    date: string,
    course: string,
    type: string,
    dist: number,
    age: string,
    sex: string | null,
    weight: string,
}

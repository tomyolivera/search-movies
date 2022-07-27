interface PrimaryImage {
    text: string
    url: string
    width: number
    height: number
}

interface ReleaseDate {
    day: number
    month: number
    year: number
}

interface ReleaseYear {
    startYear: number
    endYear: number
}

interface TitleText {
    text: string
}

interface TitleType {
    isEspisode: boolean
    isSeries: boolean
    text: string
}

export default interface IMovie {
    id: number
    primaryImage: PrimaryImage
    releaseDate: ReleaseDate
    releaseYear: ReleaseYear
    titleText: TitleText
    titleType: TitleType
}
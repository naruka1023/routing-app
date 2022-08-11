export interface releaseType{
    releaseType: string;
    albumCards: albumCard[]
}

export interface albumCard{
    title: string;
    date: string;
    linerNotes?: string;
    imageURL: string
    links: link[];
    songs: songModel[];
}

export interface link{
    url: string;
    image: string;
}

export interface songModel{
    title: string;
    time: string;
    paragraph?: string;
    quoteFlag: boolean;
    lyrics: string
}
export class Game {
    id?: string;
    name: string;
    platform: string;
    cover: string;
    description: string;
    releaseDate: string;
    editor: string;
    genre: string;
    age: string;

    constructor() {
        this.name = '';
        this.platform = '';
        this.cover = '';
        this.description = '';
        this.releaseDate = '';
        this.editor = '';
        this.genre = '';
        this.age = '';
    }

}

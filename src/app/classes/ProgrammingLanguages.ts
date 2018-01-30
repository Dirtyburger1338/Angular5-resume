export class ProgrammingLanguages {

    Id: number;
    Language: string;
    Stars: string;
    Description: string;

    constructor(Id: number, Language: string, Stars: string, Description: string) {
        this.Id = Id;
        this.Language = Language;
        this.Stars = Stars;
        this.Description = Description;
    }
}

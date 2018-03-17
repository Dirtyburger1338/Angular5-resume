export class Rating {

    Id: number;
    Stars: string;
    Description: string;

    constructor(Id: number, Stars: string, Description: string) {
        this.Id = Id;
        this.Stars = Stars;
        this.Description = Description;
    }
}

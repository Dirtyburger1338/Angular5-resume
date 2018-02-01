export class Education {

    Id: number;
    Heading: string;
    Context: string;
    Image: string;

    constructor(Id: number, Heading: string, Context: string, Image: string) {
        this.Id = Id;
        this.Heading = Heading;
        this.Context = Context;
        this.Image = Image;
    }
}

export class Education {

    Id: number;
    ShortDescription: string;
    From: string;
    To: string;
    Heading: string;
    Context: string;
    Image: string;

    constructor(Id: number, ShortDescription: string, From: string, To: string, Heading: string, Context: string, Image: string) {
        this.Id = Id;
        this.ShortDescription = ShortDescription;
        this.From = From;
        this.To = To;
        this.Heading = Heading;
        this.Context = Context;
        this.Image = Image;
    }
}

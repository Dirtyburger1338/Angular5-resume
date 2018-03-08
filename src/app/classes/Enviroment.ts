export class Enviroment {

    Id: number;
    ShortDescription: string;
    Heading: string;
    Context: string;
    Image: string;
    Introduction: string;
    List: string[];
    Link: string;

    constructor(Id: number, ShortDescription: string, Heading: string, Context: string, Image: string
        , Introduction: string, List: string[], Link: string) {
        
        this.Id = Id;
        this.ShortDescription = ShortDescription;
        this.Heading = Heading;
        this.Context = Context;
        this.Image = Image;
        this.Introduction = Introduction;
        this.List = List;
        this.Link = Link;
    }
}

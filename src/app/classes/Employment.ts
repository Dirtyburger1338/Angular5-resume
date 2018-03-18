export class Employment {

    Id: number;
    From: string;
    To: string;
    Employer: string;
    EmployerLogo: string;
    Description: string;

    constructor(Id: number, From: string, To: string, Employer: string, EmployerLogo: string, Description: string) {

        this.Id = Id;
        this.From = From;
        this.To = To;
        this.Employer = Employer;
        this.EmployerLogo = EmployerLogo;
        this.Description = Description;
    }
}

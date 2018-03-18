export class Profile {

    Id: number;
    FirstName: string;
    LastName: string;
    FullName: string;
    Greeting: string;
    DateOfBirth: string;
    Occupation: string;
    City: string;
    Employer: string;
    Image: string;
    Age: number;
    LinkedInUrl: string;
    Link: string;
    EmploymentLogo: string;
    Description: string;
    MainLanguage: string;
    SecondaryLanguage: string;

    constructor(Id: number, FirstName: string, LastName: string, FullName: string, Greeting: string, DateOfBirth: string,
        Occupation: string, City: string, Employer: string, Image: string, LinkedInUrl: string, Link: string, EmploymentLogo: string,
        Description: string, MainLanguage: string, SecondaryLanguage: string) {

        this.Id = Id;
        this.FullName = FullName;
        this.Greeting = Greeting;
        this.DateOfBirth = DateOfBirth;
        this.Occupation = Occupation;
        this.City = City;
        this.Employer = Employer;
        this.Image = Image;
        this.LinkedInUrl = LinkedInUrl;
        this.Link = Link;
        this.EmploymentLogo = EmploymentLogo;
        this.Description = Description;
        this.MainLanguage = MainLanguage;
        this.SecondaryLanguage = SecondaryLanguage;
    }
}

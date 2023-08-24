class InformationPage {
    private name: string;
    private lastName: string;
    private zip: string;
    private continueButton: string

    constructor() {
        this.name='#first-name'
        this.lastName='#last-name'
        this.zip='#postal-code'
        this.continueButton='#continue'
    }

    public setFirstName(name: string) {
        cy.get(this.name).type(name);

    }
    public setLastName(lastName: string){
        cy.get(this.lastName).type(lastName);
    }

    public setZip(zip: string){
        cy.get(this.zip).type(zip);
    }

    public clickOnContinueButton(){
        cy.get(this.continueButton).click();
    }

}

export { InformationPage }

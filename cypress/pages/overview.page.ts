class OverviewPage {
    private finishButton: string;
    
    constructor() {
        this.finishButton="#finish";
    }

    public finishPayment() {
        cy.get(this.finishButton).click();
    }
}

export { OverviewPage }

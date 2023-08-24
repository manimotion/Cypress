class OverviewPage {
    private finishButton: string;
    
    constructor() {
        this.finishButton="#finish";
    }

    public clickOnFinishButton() {
        cy.get(this.finishButton).click();
    }
}

export { OverviewPage }

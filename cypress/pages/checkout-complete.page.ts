class CheckoutPage {
    private header: string

    constructor() {
        this.header=".complete-header";
    }

    public confirmSuccessfulCheckout(text: string){
        cy.get(this.header).invoke('text').should(
            "eq",text)
    }
}

export { CheckoutPage }

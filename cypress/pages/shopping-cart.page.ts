class ShoppingCartPage {
    private button: string;
  
    constructor() {
      this.button = "#checkout";
    }

    public proceedToCheckout() {
        cy.get(this.button).click();
        }
    }

  export { ShoppingCartPage };

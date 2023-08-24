class ShoppingCartPage {
    private button: string;
  
    constructor() {
      this.button = "#checkout";
    }

    public clickOnCheckoutButton() {
        cy.get(this.button).click();
        }
    }

  export { ShoppingCartPage };

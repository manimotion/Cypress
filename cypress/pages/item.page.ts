class ItemPage {
    private button: string;
    private cartButton: string;
  
    constructor() {
      this.button = "#add-to-cart-sauce-labs-bolt-t-shirt";
      this.cartButton = "#shopping_cart_container";
    }

    public addToCart() {
        cy.get(this.button).click();
        }

    public goToCart() {
        cy.get(this.cartButton).click();
        }    
    }

  export { ItemPage };

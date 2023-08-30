class ProductsPage {
    private header: string;
  
    constructor() {
      this.header = ".app_logo";
    }

    public selectProduct(productName: string) {
        cy.get('.inventory_item_name').contains(productName).click();
        }
    }

  export { ProductsPage };

class ProductsPage {
    private header: string;
  
    constructor() {
      this.header = ".app_logo";
    }

    public clickOnItem(index: number) {
        cy.get('.inventory_item_name').eq(index).click();
        }
    }

  export { ProductsPage };
  
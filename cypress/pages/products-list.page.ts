class ProductsPage {
    private header: string;
    private product: string;
  
    constructor() {
      this.header = ".app_logo";
      this.product = ".inventory_item_name"
    }

    public selectProduct(productName: string) {
        cy.get(this.product).contains(productName).click();
        }
    }

  export { ProductsPage };

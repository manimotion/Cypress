import { ItemPage, LoginPage, ProductsPage, ShoppingCartPage, 
    InformationPage, OverviewPage, CheckoutPage } from "../pages/index";

describe("Buy a black t-shirt", () => {
    
    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let itemPage: ItemPage;
    let shoppingCartPage: ShoppingCartPage;
    let informationPage: InformationPage;
    let overviewPage: OverviewPage;
    let checkoutPage: CheckoutPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        productsPage = new ProductsPage()
        itemPage = new ItemPage()
        shoppingCartPage = new ShoppingCartPage();
        informationPage = new InformationPage();
        overviewPage = new OverviewPage();
        checkoutPage = new CheckoutPage()
    });

    it("then the t-shirt should be bought", () => {
        //Arrange
        loginPage.visitLoginPage();
        loginPage.signIn("standard_user","secret_sauce");
        //Act
        productsPage.selectProduct("Sauce Labs Bolt T-Shirt");
        itemPage.addToCart();
        itemPage.goToCart();
        shoppingCartPage.proceedToCheckout();
        informationPage.setUserInfo("cypress","Workshop","00000")
        informationPage.proceedToPayment();
        overviewPage.finishPayment();
        //Assert
        checkoutPage.confirmSuccessfulCheckout("Thank you for your order!");
    });
});

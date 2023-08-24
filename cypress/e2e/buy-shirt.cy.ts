import { ItemPage, LoginPage, ProductsPage, ShoppingCartPage, 
    InformationPage, OverviewPage, CheckoutPage } from "../pages/index";

const loginPage = new LoginPage();
const productsPage = new ProductsPage()
const itemPage = new ItemPage()
const shoppingCartPage = new ShoppingCartPage();
const informationPage = new InformationPage();
const overviewPage = new OverviewPage();
const checkoutPage = new CheckoutPage()

describe("Buy a black t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        loginPage.visitLoginPage();
        loginPage.signIn("standard_user","secret_sauce");
        productsPage.clickOnItem(2);
        itemPage.clickOnAddToCartButton();
        itemPage.clickOnCartButton();
        shoppingCartPage.clickOnCheckoutButton();
        informationPage.setFirstName("cypress");
        informationPage.setLastName("Workshop");
        informationPage.setZip("00000");
        informationPage.clickOnContinueButton();
        overviewPage.clickOnFinishButton();
        checkoutPage.isValidHeader("Thank you for your order!");
    });
});

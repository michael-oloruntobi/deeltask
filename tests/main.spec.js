const { test, expect } = require('@playwright/test');
const { landingPage } = require('../pageObjects/landingPage');
const { fixedContractForm } = require('../pageObjects/fixedContractForm');
const datax = JSON.parse(JSON.stringify(require('../utils/testdata.json')));

test('userSignUp', async ({ page }) => {



    await page.goto(datax.url);
    await expect(page).toHaveTitle(datax.title);

    const landPage = new landingPage(page);
    const getFixedContractForm = new fixedContractForm(page);



    await landPage.getEmailField().type(datax.username);
    await landPage.getPasswordField().type(datax.password);
    await landPage.getButtonField().click();

    await getFixedContractForm.getcreateContract().click();
    await getFixedContractForm.getcreateFixedContract().click();
    await getFixedContractForm.getnameField().type(datax.name);
    await getFixedContractForm.gettaxResidence().type(datax.taxResidence);
    await page.keyboard.press('Enter');
    await getFixedContractForm.getjobTitle().type(datax.jobTitle);
    await getFixedContractForm.getseniorityLevel().type("mid");
    await page.keyboard.press('Enter');
    await getFixedContractForm.getcookie().click();
    await getFixedContractForm.getjobScope().type(datax.workscope);
    await getFixedContractForm.geteffectiveDate().click();

    let label = await landPage.getDates();

    await getFixedContractForm.getlabel(label).click();
    await getFixedContractForm.getsubmitButton().click();
    await getFixedContractForm.getrate().type(datax.rate);
    await getFixedContractForm.getpaymentFrequency().click();
    await getFixedContractForm.getpaymentFrequency().type(datax.paymentFrequency);
    await page.keyboard.press('Enter');
    await getFixedContractForm.getsubmitButton().click();
    await getFixedContractForm.getsubmitButton().click();
    await getFixedContractForm.getnextButton().click();
    await getFixedContractForm.creatContractButton.click();
    await page.waitForLoadState('networkidle');

});
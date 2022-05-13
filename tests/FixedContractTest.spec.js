const { test, expect } = require('@playwright/test');
//Import page object manager
const { POManager } = require('../pageobjects/POManager');
const datax = JSON.parse(JSON.stringify(require('../utils/testdata.json')));


//Set local storage and Login
test.beforeEach(async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    
    
    await page.goto(datax.url);
    await expect(page).toHaveTitle(datax.title);
    await loginPage.setLocStorage();
    await page.goto(datax.url);
    //await loginPage.login(datax.username, datax.password);
    await loginPage.closePopups();
    
  })
  //Test tp create a fixed contract
  test('Create Fixed Contract test',async ({ page }) => {
    const poManager = new POManager(page);
    const landingPage  = poManager.getUserDashboard();
    const fixedContractForm  = poManager.getCreateFixedContractForm();
    const name = datax.name;
    const taxResidence = datax.taxResidence;
    const jobTitle = datax.jobTitle;
    let datebefore = await fixedContractForm.getDates();
    const rate = datax.rate;
    const paymentFrequency = datax.paymentFrequency;
   

    await landingPage.assertPageHeader()
    await landingPage.gotoCreateContractLink();
    await fixedContractForm.fillGeneralInfo(name, taxResidence, jobTitle, datebefore);
    await fixedContractForm.fillPaymentDetails(rate, paymentFrequency);
    await fixedContractForm.fillDefineDates(rate);
    await fixedContractForm.fillBenefits();
    await fixedContractForm.fillCompliance();

  })










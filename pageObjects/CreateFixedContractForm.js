const { expect } = require('@playwright/test');

class CreateFixedContractForm {

    constructor(page) {
        this.page = page;        
        this.nameField = page.locator("[name='name']");
        this.taxResidence = page.locator("#react-select-3-input");
        this.jobTitle = page.locator("[name='jobTitle']");
        this.seniorityLevel = page.locator("#react-select-4-input");
        this.cookie = page.locator("#CybotCookiebotDialogBodyButtonAccept");
        this.jobScope = page.locator("[name='scope']");
        this.jobScopeDropdown = page.locator("[class='icon unselectable color-primary scopes-dropdown-icon flex']");
        this.jobScopeQA = page.locator("[class='deel-ui__button__content']");
        this.effectiveDate = page.locator("[name='effectiveDate']");
        this.submitButton = page.locator("[type='submit']");
        this.rate = page.locator("[name='rate']");
        this.paymentFrequency = page.locator(".input-container >> nth=0");
        this.amount = page.locator("[data-qa='full-amount']");
        this.nextButton = page.locator("[data-qa='next']");
        this.creatContractButton = page.locator("[data-qa='create-contract']");




    }

    // function to fill general info
async fillGeneralInfo(name, taxResidence, jobTitle, date){

    //Contractor Name
    await this.nameField.type(name);

    //Enter tax Residence
    await this.taxResidence.type(taxResidence);
    await this.page.keyboard.press('Enter');

    //Fill Job Title
    await this.jobTitle.type(jobTitle);

    //Fill Seniority level
    await this.seniorityLevel.type("mid");
    await this.page.keyboard.press('Enter');

    //Fill Job Scope
    await this.jobScopeDropdown.click();
    //assert the right JobScope is picked
    await expect(this.jobScopeQA.nth(13)).toContainText('Quality Assurance Engineer');
    await this.jobScopeQA.nth(13).click();

    //assert text selected appears in input box
    await expect(this.jobScope).toContainText('The Quality Assurance (QA) Engineer\'s goal');
    
    
    
    // today's date - 1
    await this.effectiveDate.click();
    await this.page.locator(date).click();

    //Submit and Go to Next page
    await this.submitButton.click();

}

async fillPaymentDetails(rate, paymentFrequency) {

    await this.rate.type(rate);
    await this.paymentFrequency.click();
    await this.paymentFrequency.type(paymentFrequency);
    await this.page.keyboard.press('Enter');
    await this.submitButton.click();
}

async fillDefineDates(rate) {

    // Assert Amount is equal to rate set
    await expect(this.amount).toContainText(rate);
    //Go to next page
    await this.submitButton.click();
}

async fillBenefits() {


    await this.nextButton.click();
}

async fillCompliance() {

//Submit details and create contract
    await this.creatContractButton.click();
    // Wait for contract to be created before closing browser
    await this.page.waitForLoadState('domcontentloaded');
}



 
//function to get previous day
async getDates() {
    let d = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = d.getDate() - 1;
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    let cht = month + " " + day + ", " + year + "']";
    let label = "[aria-label" + "= '" + cht;
    return label;
}

    


}

module.exports = { CreateFixedContractForm }
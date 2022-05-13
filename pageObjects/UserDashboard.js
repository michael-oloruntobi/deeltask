const { expect } = require('@playwright/test');

class UserDashboard{

constructor(page){
    this.page = page;
    this.pageHeading = page.locator("[data-qa='heading']");
    this.createContractLink = page.locator("[href='/create']");
    this.createFixedContract = page.locator("[href='/create/fixed']");
    this.contractsLink = page.locator("[href='/contracts']");
    this.reportsLink = page.locator("[href='/reports']");
    this.complianceDocumentsLink = page.locator("[href='/compliance-documents']");
    this.invoicesLink = page.locator("[href='/invoices']");
    this.teamSettingsLink = page.locator("[href='/team-settings']");
    this.appsAndPerksLink = page.locator("[href='/integrations-store']");
    this.taxFormsLink = page.locator("[href='/taxes']");
    this.organizationSettingsLink = page.locator("[href='/settings/organization-settings']");
}

async assertPageHeader() {
    //Assert login message
    await expect(this.pageHeading).toContainText('Palia!');
}

async gotoCreateContractLink(){

    await this.createContractLink.click();
    await this.createFixedContract.click();
}


}

module.exports = { UserDashboard }
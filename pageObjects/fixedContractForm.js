class fixedContractForm {

    constructor(page) {
        this.page = page;
        this.emailField = page.locator("#mui-1");
        this.createContract = page.locator("[href='/create']");
        this.createFixedContract = page.locator("[href='/create/fixed']");
        this.nameField = page.locator("[name='name']");
        this.taxResidence = page.locator("#react-select-3-input");
        this.jobTitle = page.locator("[name='jobTitle']");
        this.seniorityLevel = page.locator("#react-select-4-input");
        this.cookie = page.locator("#CybotCookiebotDialogBodyButtonAccept");
        this.jobScope = page.locator("[name='scope']");
        this.effectiveDate = page.locator("[name='effectiveDate']");
        this.submitButton = page.locator("[type='submit']");
        this.rate = page.locator("[name='rate']");
        this.paymentFrequency = page.locator(".input-container >> nth=0");
        this.nextButton = page.locator("[data-qa='next']");
        this.creatContractButton = page.locator("[data-qa='create-contract']");




    }






    getEmailField() {

        return this.emailField;
    }

    getcreateContract() {

        return this.createContract;
    }

    getcreateFixedContract() {

        return this.createFixedContract;
    }
    getnameField() {

        return this.nameField;
    }

    gettaxResidence() {

        return this.taxResidence;
    }

    getjobTitle() {

        return this.jobTitle;
    }

    getseniorityLevel() {

        return this.seniorityLevel;
    }

    getcookie() {

        return this.cookie;
    }

    getjobScope() {

        return this.jobScope;
    }

    geteffectiveDate() {

        return this.effectiveDate;
    }

    getlabel(label) {

        return this.page.locator(label);
    }

    getsubmitButton() {

        return this.submitButton;
    }

    getrate() {

        return this.rate;
    }

    getpaymentFrequency() {

        return this.paymentFrequency;
    }

    getnextButton() {

        return this.nextButton;
    }

    getcreatContractButton() {

        return this.creatContractButton;
    }

}

module.exports = { fixedContractForm }
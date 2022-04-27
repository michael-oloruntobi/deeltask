class landingPage {

    constructor(page) {
        this.page = page;
        this.emailField = page.locator("#mui-1");
        this.passwordField = page.locator("#mui-2");
        this.buttonField = page.locator("[type='submit']");

    }

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




    getEmailField() {

        return this.emailField;
    }

    getPasswordField() {

        return this.passwordField;
    }

    getButtonField() {

        return this.buttonField;
    }



}

module.exports = { landingPage }
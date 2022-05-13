const { LoginPage } = require('./LoginPage');
const { UserDashboard } = require('./UserDashboard');
const { CreateFixedContractForm } = require('./CreateFixedContractForm')


class POManager {
    constructor(page) {
      this.page = page
      this.loginPage = new LoginPage(page)
      this.userDashboard = new UserDashboard(page)
      this.fixedContractForm  = new CreateFixedContractForm (page)

    }

    getLoginPage() {
        return this.loginPage
      }

    getUserDashboard() {
        return this.userDashboard
      }
      getCreateFixedContractForm () {
        return this.fixedContractForm 
      }
    

    }

    module.exports = { POManager }
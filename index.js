var customerName = 'bob';
var bestCustomer = undefined

const LeastFavoriteCustomer = 'sheesh'

function upperCaseCustomerName(customerName) {
   window['customerName'] = 'BOB';
      return customerName;
}

function setBestCustomer(bestCustomer) {
   window['bestCustomer'] = 'not bob';
      return bestCustomer;
}

function overwriteBestCustomer(bestCustomer) {
   window['bestCustomer'] = 'maybe bob';
      return bestCustomer;
}

function changeLeastFavoriteCustomer(LeastFavoriteCustomer) {
   throw 'Assignment to constant variable.'
}

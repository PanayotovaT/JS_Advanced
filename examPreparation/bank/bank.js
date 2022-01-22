class Bank {

    constructor(bankName) {

        this._bankName = bankName;
        this.allCustomers = [];

    }


    newCustomer({ firstName, lastName, personalId }) {
        let hasCustomer = this.allCustomers.find(x => x.personalId === personalId)
        if (hasCustomer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        this.allCustomers.push({ firstName, lastName, personalId });
        return { firstName, lastName, personalId };
    }

    depositMoney(personalId, amount) {

        let hasCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!hasCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }
      
        if (!hasCustomer.hasOwnProperty('totalMoney')) {
            hasCustomer.totalMoney = 0;
        }
        if (hasCustomer.totalMoney) {
            hasCustomer.totalMoney += amount;
        } else {
            hasCustomer.totalMoney = amount;
            hasCustomer.transactions = [];
        }
        hasCustomer.transactions.push(`${hasCustomer.firstName} ${hasCustomer.lastName} made deposit of ${amount}$!`)

        return `${hasCustomer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        
        let hasCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!hasCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }
                 
        if (hasCustomer.totalMoney < amount) {
            throw new Error(`${hasCustomer.firstName} ${hasCustomer.lastName} does not have enough money to withdraw that amount!`)
        } else {
            
            hasCustomer.totalMoney -= amount;
            hasCustomer.transactions.push(`${hasCustomer.firstName} ${hasCustomer.lastName} withdrew ${amount}$!`)
        }
        return `${hasCustomer.totalMoney}$`
    }

    customerInfo(personalId) {
          
        let hasCustomer = this.allCustomers.find(x => x.personalId === personalId);

        if (!hasCustomer) {
            throw new Error(`We have no customer with this ID!`);
        }
        let result = [];
   
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${hasCustomer.firstName} ${hasCustomer.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${hasCustomer.totalMoney}$`);
        if(hasCustomer.transactions.length > 0) {

            result.push(`Transactions:`);
            for (let i = hasCustomer.transactions.length - 1; i >= 0; i--) {
                result.push(`${i + 1}. ${hasCustomer.transactions[i]}`);
            }
        }

        return result.join('\n').trim()

    }
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: ' Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


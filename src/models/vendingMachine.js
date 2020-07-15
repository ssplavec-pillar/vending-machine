class VendingMachine {
    display = 'INSERT COIN';
    amountInserted = 0;

    insert = (coin) => {
        switch (coin) {
            case 'dime':
                this.amountInserted += .1;
                break;
            
            case 'nickel':
                this.amountInserted += .05;
                break;

            default:
                break;
        }
        
        this.display = this.amountInserted.toFixed(2);
    };
};

export default VendingMachine;
class VendingMachine {
    display = 'INSERT COIN';
    amountInserted = 0;

    insert = (coin) => {
        this.amountInserted += this.getCoinValue(coin);
        this.display = this.amountInserted.toFixed(2);
    };

    getCoinValue = (coin) => {
        switch (coin) {
            case 'dime':
                return .1;
            
            case 'nickel':
                return .05;

            case 'quarter':
               return .25;
    
            default:
                return 0;
        }
    }
};

export default VendingMachine;
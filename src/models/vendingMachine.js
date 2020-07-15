class VendingMachine {
    display = 'INSERT COIN';
    amountInserted = 0;

    insert = (coin) => {
        if (coin === 'dime') {
            this.amountInserted += .1
        } else {
            this.amountInserted += .05
        }
        
        this.display = this.amountInserted.toFixed(2);
    };
};

export default VendingMachine;
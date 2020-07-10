class VendingMachine {
    display = 'INSERT COIN';
    amountInserted = 0;

    insert = () => {
        this.amountInserted += .05
        this.display = this.amountInserted.toFixed(2);
    };
};

export default VendingMachine;
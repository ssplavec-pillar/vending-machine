class VendingMachine {
    display = 'INSERT COIN';
    amountInserted = 0;
    coinReturn = [];
    productBin = '';

    insert = (coin) => {
        if (coin === 'penny') {
            this.coinReturn.push(coin);
            return;
        }
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

    pressButton = (product) => {
        switch (product) {
            case 'cola':
                if (this.amountInserted == 1) {
                    this.dispenseProduct(product);
                    this.display = 'THANK YOU';
                } else {
                    this.display = 'PRICE: 1.00';
                }
                break;
            
            case 'chips':
                this.display = 'PRICE: 0.50';
                break;
            
            default:
                break;
        }
    }

    dispenseProduct = (product) => {
        this.productBin = product;
    }
};

export default VendingMachine;
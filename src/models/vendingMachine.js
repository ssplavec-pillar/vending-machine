import Coin from './coin';

class VendingMachine {
    display = 'INSERT COIN';
    amountInserted = 0;
    coinReturn = [];
    productBin = '';
    productCatalog = {
        chips: {
            price: 0.50,
        },
        cola: {
            price: 1.00,
        },
        candy: {
            price: 0.65,
        },
    }

    insert = (coin) => {
        if (this.getTypeOfCoin(coin) === undefined) {
            this.coinReturn.push(coin);
            return;
        }
        this.amountInserted += this.getCoinValue(coin);
        this.display = this.amountInserted.toFixed(2);
    };

    getTypeOfCoin = (coin) => {
        if (coin.weight == 5 && coin.size == 21.21) {
            return 'nickel';
        }
        if (coin.weight == 2.268 && coin.size == 17.91) {
            return 'dime';
        }
        if (coin.weight == 6.25 && coin.size == 24.3) {
            return 'quarter';
        }
    }

    getCoinValue = (coin) => {
        const coinType = this.getTypeOfCoin(coin);

        switch (coinType) {
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

    pressButton = (productRequested) => {
        if (this.amountInserted >= this.productCatalog[productRequested].price) {
            this.dispenseProduct(productRequested);
            this.coinReturn.push(new Coin(5, 21.21));
        } else {
            this.display = `PRICE: ${this.productCatalog[productRequested].price.toFixed(2)}`;
        }
    }

    dispenseProduct = (product) => {
        this.productBin = product;
        this.display = 'THANK YOU';
    }
};

export default VendingMachine;
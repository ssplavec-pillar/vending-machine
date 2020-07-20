import VendingMachine from "./vendingMachine";
import Coin from "./coin"

let machine;
const penny = new Coin(2.5, 19.05);
const nickel = new Coin(5, 21.21);
const dime = new Coin(2.268, 17.91);
const quarter = new Coin(6.25, 24.3);

beforeEach(() => {
    machine = new VendingMachine();
});

describe('Vending Machine', () => {
    describe('Deterine Coin Type', () => {
        it('should return nickel when coin has dimensions of a nickel', () => {
            const coinType = machine.getTypeOfCoin(nickel);

            expect(coinType).toBe('nickel');
        });
        it('should return dime when coin has dimensions of a dime', () => {
            const coinType = machine.getTypeOfCoin(dime);

            expect(coinType).toBe('dime');
        });
        it('should return quarter when coin has dimensions of a quarter', () => {
            const coinType = machine.getTypeOfCoin(quarter);

            expect(coinType).toBe('quarter');
        });
        it('should return undefined when coin is unknown', () => {
            const coinType = machine.getTypeOfCoin(penny);

            expect(coinType).toBe(undefined);
        });
    });

    describe('Determine Coin Value', () => {
        it('should return .05 for a coin with the dimensions of a nickel', () => {
            const value = machine.getCoinValue(nickel);
    
            expect(value).toBe(.05);    
        });
    });

    describe('Accept Coins', () => {
        it ('should display default message when no coins inserted', () => {
            expect(machine.display).toBe('INSERT COIN');
        });
    
        it ('should display 5 cents when a nickel is inserted', () => {
            machine.insert(nickel);
    
            expect(machine.display).toBe('0.05');
        });
    
        it ('should display 10 cents when two nickels are inserted', () => {
            machine.insert(nickel);
            machine.insert(nickel);
    
            expect(machine.display).toBe('0.10');
        });
    
        it ('should  display 10 cents when a dime is inserted', () => {
            machine.insert(dime);
    
            expect(machine.display).toBe('0.10');
        });
    
        it ('should display 20 cents when two dimes are inserted', () => {
            machine.insert(dime);
            machine.insert(dime);
    
            expect(machine.display).toBe('0.20');
        });
    
        it('should display 25 cents when one quarter is inserted', () => {
            machine.insert(quarter);
    
            expect(machine.display).toBe('0.25');
        });
    
        it('should reject a penny', () => {
            machine.insert(penny);
    
            expect(machine.coinReturn.length).toBe(1);
            expect(machine.display).toBe('INSERT COIN');
        });
    });

    describe('Select Product', () => {
        describe ('Cola', () => {
            it('should display 1.00 when the cola button is pressed', () => {
                machine.pressButton('cola');

                expect(machine.display).toBe('PRICE: 1.00');
            });

            it('should dispense cola when amount equals price', () => {
                machine.insert(quarter);
                machine.insert(quarter);
                machine.insert(quarter);
                machine.insert(quarter);

                machine.pressButton('cola');

                expect(machine.productBin).toBe('cola');
                expect(machine.display).toBe('THANK YOU');
            });

            it('should not dispense cola if amount does not equal price', () => {
                machine.insert(quarter);
                machine.insert(quarter);
                machine.insert(quarter);

                machine.pressButton('cola');

                expect(machine.productBin).toBe('');
                expect(machine.display).toBe('PRICE: 1.00');
            });
        });

        describe ('Chips', () => {
            it('should display 0.50 when the chips button is pressed', () => {
                machine.pressButton('chips');

                expect(machine.display).toBe('PRICE: 0.50');
            });

            it('should dispense chips when amount equals price', () => {
                machine.insert(quarter);
                machine.insert(quarter);

                machine.pressButton('chips');

                expect(machine.productBin).toBe('chips');
                expect(machine.display).toBe('THANK YOU');
            });

            it('should not dispense chips if amount does not equal price', () => {
                machine.insert(quarter);

                machine.pressButton('chips');

                expect(machine.productBin).toBe('');
                expect(machine.display).toBe('PRICE: 0.50');
            });
        });

        describe('Candy', () => {
            it('should display 0.65 when the candy button is pressed', () => {
                machine.pressButton('candy');

                expect(machine.display).toBe('PRICE: 0.65');
            });

            it('should dispense candy when amount equals price', () => {
                machine.insert(quarter);
                machine.insert(quarter);
                machine.insert(dime);
                machine.insert(nickel);

                machine.pressButton('candy');

                expect(machine.productBin).toBe('candy');
                expect(machine.display).toBe('THANK YOU');
            });

            it('should not dispense candy if amount does not equal price', () => {
                machine.insert(quarter);

                machine.pressButton('candy');

                expect(machine.productBin).toBe('');
                expect(machine.display).toBe('PRICE: 0.65');
            });
        });
    });
});
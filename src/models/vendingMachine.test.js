import VendingMachine from "./vendingMachine";

let machine;
beforeEach(() => {
    machine = new VendingMachine();
});

describe('Vending Machine', () => {

    describe('Accept Coins', () => {
        it ('should display default message when no coins inserted', () => {
            expect(machine.display).toBe('INSERT COIN');
        });
    
        it ('should display 5 cents when a nickel is inserted', () => {
            machine.insert('nickel');
    
            expect(machine.display).toBe('0.05');
        });
    
        it ('should display 10 cents when two nickels are inserted', () => {
            machine.insert('nickel');
            machine.insert('nickel');
    
            expect(machine.display).toBe('0.10');
        });
    
        it ('should  display 10 cents when a dime is inserted', () => {
            machine.insert('dime');
    
            expect(machine.display).toBe('0.10');
        });
    
        it ('should display 20 cents when two dimes are inserted', () => {
            machine.insert('dime');
            machine.insert('dime');
    
            expect(machine.display).toBe('0.20');
        });
    
        it('should display 25 cents when one quarter is inserted', () => {
            machine.insert('quarter');
    
            expect(machine.display).toBe('0.25');
        });
    
        it('should reject a penny', () => {
            machine.insert('penny');
    
            expect(machine.coinReturn.length).toBe(1);
            expect(machine.display).toBe('INSERT COIN');
        });
    });

    describe('Select Product', () => {
        it('should display 1.00 when the cola button is pressed', () => {
            machine.pressButton('cola');

            expect(machine.display).toBe('PRICE: 1.00');
        });

        it('should dispense cola', () => {
            machine.insert('quarter');
            machine.insert('quarter');
            machine.insert('quarter');
            machine.insert('quarter');

            machine.pressButton('cola');

            expect(machine.productBin).toBe('cola');
            expect(machine.display).toBe('THANK YOU');
        });

        it('should not dispense cola if amount does not equal price', () => {
            machine.insert('quarter');
            machine.insert('quarter');
            machine.insert('quarter');

            machine.pressButton('cola');

            expect(machine.productBin).toBe('');
        });
    });
});
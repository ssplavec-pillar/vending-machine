import VendingMachine from "./vendingMachine";

describe('Vending Machine', () => {
    it ('should display default message when no coins inserted', () => {
        const machine = new VendingMachine();

        expect(machine.display).toBe('INSERT COIN');
    });

    it ('should display 5 cents when a nickel is inserted', () => {
        const machine = new VendingMachine();

        machine.insert('nickel');

        expect(machine.display).toBe('0.05');
    });

    it ('should display 10 cents when two nickels are inserted', () => {
        const machine = new VendingMachine();

        machine.insert('nickel');
        machine.insert('nickel');

        expect(machine.display).toBe('0.10');
    });

    it ('should  display 10 cents when a dime is inserted', () => {
        const machine = new VendingMachine();

        machine.insert('dime');

        expect(machine.display).toBe('0.10');
    });

    it ('should display 20 cents when two dimes are inserted', () => {
        const machine = new VendingMachine();

        machine.insert('dime');
        machine.insert('dime');

        expect(machine.display).toBe('0.20');
    });

    it('should display 25 cents when one quarter is inserted', () => {
        const machine = new VendingMachine();

        machine.insert('quarter');

        expect(machine.display).toBe('0.25');
    });

    it('should reject a penny', () => {
        const machine = new VendingMachine();

        machine.insert('penny');

        expect(machine.coinReturn.length).toBe(1);
        expect(machine.display).toBe('INSERT COIN');
    })

});
import VendingMachine from "./vendingMachine";

describe('Vending Machine', () => {
    it ('should display default message when no coins inserted', () => {
        const machine = new VendingMachine();

        expect(machine.display).toBe('INSERT COIN');
    });

    it ('should display 5 cents when a nickel is inserted', () => {
        const machine = new VendingMachine();

        machine.insert('nickel');

        expect(machine.display).toBe('.05');
    });

    it ('should display 10 cents when two nickels are inserted', () => {
        const machine = new VendingMachine();

        machine.insert('nickel');
        machine.insert('nickel');

        expect(machine.display).toBe('.10');
    });

});
import VendingMachine from "./models/vendingMachine";

describe('Vending Machine', () => {
    it ('should display default message when no coins inserted', () => {
        const machine = new VendingMachine();

        expect(machine.display).toBe('INSERT COIN');
    });
});
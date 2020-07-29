const { default: Coin } = require("./coin");

describe('Coin', () => {
    it('should construct a coin when called with a name', () => {
        const coin = new Coin('dime');

        expect(coin.name).toBe('dime');
        expect(coin.weight).toBe(2.268);
        expect(coin.size).toBe(17.91);
    });
});
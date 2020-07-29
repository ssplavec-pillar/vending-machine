export default class Coin {
    name = '';
    weight = 0;
    size = 0;
    value = 0;

    constructor(name, weight, size) {
        this.name = name;
        this.weight = weight ? weight : this.getWeight(name);
        this.size = size ? size : this.getSize(name);
    }

    getWeight = (name) => {
        switch(name) {
            case 'penny':
                return 2.5;
            case 'nickel':
                return 5;
            case 'dime':
                return 2.268;
            case 'quarter':
                return 6.25;
            }
    }

    getSize = (name) => {
        switch(name) {
            case 'penny':
                return 19.05;
            case 'nickel':
                return 21.21;
            case 'dime':
                return 17.91;
            case 'quarter':
                return 24.3;
        }
    }
}
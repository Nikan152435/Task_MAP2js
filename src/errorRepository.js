class ErrorRepository {
    constructor() {
        this.errorCodes = new Map();
    }

    addError(code, message) {
        this.errorCodes.set(code, message);
    }

    translate(code) {
        return this.errorCodes.get(code) || 'Unknown error';
    }
}

module.exports = ErrorRepository;
class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, this.constructor);
        } else { 
        this.stack = (new Error(message)).stack; 
        }
    }
}    
  

export class AccountNotFoundError extends ExtendableError {}
export class NoAccountsFoundError extends ExtendableError {}
export class InvalidAddressError extends ExtendableError {}
export class InvalidHunterAddressError extends ExtendableError {}
export class InvalidEmailError extends ExtendableError {}
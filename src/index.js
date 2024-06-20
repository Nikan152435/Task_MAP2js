const ErrorRepository = require('./errorRepository');

const repo = new ErrorRepository();
repo.addError(1, 'Access denied');
console.log(repo.translate(1));  // Output: "Access denied"
console.log(repo.translate(2));  // Output: "Unknown error"
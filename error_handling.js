function errorHandler(err, req, res, next) {
    if (err && err.status === 404) {
        return res.status(404).json({ message: 'Route not found' });
    }

    if (condition) {
        
    }
}

module.exports = errorHandler;

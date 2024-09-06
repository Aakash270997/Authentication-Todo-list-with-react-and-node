const CatchAsync = (fun) => (req, res, next) => {
    return Promise
    .resolve(fn(req, res, next))
    .catch(e => {
        console.log("promise can be Bracked");
        next(e)
    })
}

module.exports = CatchAsync
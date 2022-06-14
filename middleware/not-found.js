const notFound = (req,res) => {
    res.status(404).send('<h1>Route Does not exist</h1>');
}

module.exports = notFound;
const axios = require('axios')


module.exports = {
    getNews: function (req, res, next) {
        var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
        console.log(req.query.abstract)
        let options = {
            url: url,
            method: 'GET',
            params: {
                'api-key': "1a8b0718a7ec458a9b04f95dcc020440",
                'fq': req.query.abstract
            }
        }
        axios(options)
            .then(function (news) {
                res.status(200).json(news.data.response.docs)
            })
            .catch(function (err) {
                res.status(400).json(err.message)
            })
    }
}
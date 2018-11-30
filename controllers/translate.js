require('dotenv').config()

const { Translate } = require('@google-cloud/translate');
const projectId = 'helpers-1543488997202';
const axios = require('axios')

class Controller {
    static translate(req, res) {
        const translate = new Translate({
            projectId: projectId,
        });

        const text = req.body.text
        const target = req.body.target
        translate
            .translate(text, target)
            .then(results => {
                const translation = results[0];
                res.json({
                    translation
                })
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    }

    static listLang(req, res) {
        const translate = new Translate({
            projectId: projectId
        })
        translate
            .getLanguages()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = Controller
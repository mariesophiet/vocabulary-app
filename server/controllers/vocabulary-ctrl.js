const Vocabulary = require('../models/vocabulary-model')

createWord = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a word',
        })
    }

    const vocab = new Vocabulary(body)

    if (!vocab) {
        return res.status(400).json({ success: false, error: err })
    }

    vocab
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: vocab._id,
                message: 'Word created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Word not created!',
            })
        })
}

updateWord = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Vocabulary.findOne({ _id: req.params.id }, (err, vocab) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Word not found!',
            })
        }
        vocab.lang_1 = body.lang_1
        vocab.lang_2 = body.lang_2
        vocab.level = body.level
        vocab.repeat = body.repeat
        vocab.group = body.group
        vocab
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: vocab._id,
                    message: 'Word updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Word not updated!',
                })
            })
    })
}

deleteWord = async (req, res) => {
    try {
    await Vocabulary.findOneAndDelete({ _id: req.params.id }, (err, vocab) => {
        
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!vocab) {
            return res
                .status(404)
                .json({ success: false, error: `Word not found` })
        }

        return res.status(200).json({ success: true, data: vocab })
    })} catch (err) {
        console.log(err)
    }
    
}

getWordById = async (req, res) => {
    await Vocabulary.findOne({ _id: req.params.id }, (err, vocab) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!vocab) {
            return res
                .status(404)
                .json({ success: false, error: `Word not found` })
        }
        return res.status(200).json({ success: true, data: vocab })
    }).catch(err => console.log(err))
}

getVocabulary = async (req, res) => {
    await Vocabulary.find({}, (err, vocab) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!vocab.length) {
            return res
                .status(404)
                .json({ success: false, error: `Word not found` })
        }
        return res.status(200).json({ success: true, data: vocab })
    }).catch(err => console.log(err))
}

// works with hardcoded date 
getVocabularyByDate = async (req, res) => {
    await Vocabulary.find({ repeat: {$lte: new Date() }}, (err, vocab) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!vocab) {
            return res
                .status(404)
                .json({ success: false, error: `Word not found` })
        }
        return res.status(200).json({ success: true, data: vocab })
    }).catch(err => console.log(err))
}

module.exports = {
    createWord,
    updateWord,
    deleteWord,
    getVocabulary,
    getWordById,
    getVocabularyByDate
}
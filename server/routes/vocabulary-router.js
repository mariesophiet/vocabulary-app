const express = require('express')

const VocabCtrl = require('../controllers/vocabulary-ctrl')

const router = express.Router()

router.post('/vocabulary', VocabCtrl.createWord)
router.get('/vocabulary/learn', VocabCtrl.getVocabularyByDate)
router.put('/vocabulary/:id', VocabCtrl.updateWord)
router.delete('/vocabulary/:id', VocabCtrl.deleteWord)
router.get('/vocabulary/:id', VocabCtrl.getWordById)
router.get('/vocabulary', VocabCtrl.getVocabulary)
module.exports = router
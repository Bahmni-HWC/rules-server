var express = require('express');
var router = express.Router();

var programEncounterController = require('../src/controllers/programEncounterController');
var individualController = require('../src/controllers/individualController');
var programEnrolmentController = require('../src/controllers/programEnrolmentController');
var encounterController = require('../src/controllers/encounterController');


router.post('/api/decision_program_encounter_rule', programEncounterController.decisionRules);

router.post('/api/decision_encounter_rule', encounterController.decisionRules);

router.post('/api/decision_individual_rule', individualController.decisionRules);

router.post('/api/decision_program_enrolment_rule',programEnrolmentController.decisionRules);

router.post('/api/visitschedule_program_enrolment_rule',programEnrolmentController.visitScheduleRules);

router.post('/api/visitschedule_encounter_rule',encounterController.visitScheduleRules);

router.post('/api/visitschedule_program_encounter_rule',programEncounterController.visitScheduleRules);

router.post('/api/visitschedule_individual_rule',individualController.visitScheduleRules);

router.post('/api/checklist_program_enrolment_rule',programEnrolmentController.checkListRules);
module.exports = router;

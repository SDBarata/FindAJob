const express = require("express");
const jobController = require("../controllers/job.controller");
const model = require("../models/model");
const router = express.Router(); // ou então import { Router } from "express"; e cria-se um const routes = new Router();

const JOBS_ROUTE = "/jobs";

router.post(JOBS_ROUTE, jobController.createJob);

router.get(JOBS_ROUTE, jobController.getAllJobs);

router.get(`${JOBS_ROUTE}/:id`, jobController.getJobById);

router.patch(`${JOBS_ROUTE}/:id`, jobController.editJob);

router.delete(`${JOBS_ROUTE}/:id`, jobController.deleteJob);

module.exports = router;

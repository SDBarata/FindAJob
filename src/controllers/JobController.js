

const JobController {
    async data(req, res) {
        const newJob = new Model({
            title: req.body.title,
            description: req.body.description,
            company: req.body.company,
            location: req.body.location,
            jobType: req.body.jobType,
            jobFunction:req.body.jobFunction,
            salary: req.body.salary,
            creationDate: req.body.creationDate,
            updatedDate: req.body.updatedDate,
        });
    }
}
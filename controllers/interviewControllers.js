import interviewServices from "../services/interviewServices.js";

const interviewControllers = {
    createInterview: async (req,res) => {
        try {
            if (!req.body.name) {
                return res.status(400).json({ message: 'Content can not be empty!' });
            }
            const interview = await interviewServices.createObject(req.body);
            res.status(201).json(interview);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getInterviews: async (req, res) => {
        try {
            const interviews = await interviewServices.getAllObjects(req.body);
            res.status(200).json(interviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getInterviewById: async (req, res) => {
        try {
            const interview = await interviewServices.getObjectById(req.params.id);
            if (!interview) {
                return res.status(404).json({ message: 'Interview not found' });
            }
            res.status(200).json(interview);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateInterview: async (req, res) => {
        try {
            const interview = await interviewServices.updateObject(req.params.id, req.body);
            if (!interview) {
                return res.status(404).json({ message: 'Interview not found' });
            }
            res.status(200).json(interview);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default interviewControllers;
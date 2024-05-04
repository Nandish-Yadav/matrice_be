import {mongoose} from "mongoose";

const interviewSchema = mongoose.Schema({
    name: String,
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    feed_back: String,
    jobId: mongoose.Schema.Types.ObjectId,
    rating: { type: Number, min: 0, max: 100, default: 0 },
    
},{strict: false});

export default mongoose.model('interviews', interviewSchema);
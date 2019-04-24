exports.ticketSchema = {
    _id: {type: Number},
    url: {type: String},
    external_id: {type: String},
    created_at: {type: String},
    type: {type: String},
    subject: {type: String},
    description: {type: String},
    priority: {type: String},   
    status: {type: String},
    submitter_id: {type: Number},
    assignee_id: {type: Number},
    organization_id: {type: Number},
    tags: {type: Array},
    has_incidents: {type: Boolean},
    due_at: {type: String},
    via: {type: String}
};
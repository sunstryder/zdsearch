exports.organizationSchema = {
    _id: {type: Number},
    url: {type: String},
    external_id: {type: String},
    name: {type: String},
    domain_names: {type: Array},
    created_at: {type: String},
    details: {type: String},
    shared_tickets: {type: Boolean},
    tags: {type: Array},
};
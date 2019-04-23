exports.usersSchema = {
    _id: {type: Number},
    url: {type: String},
    external_id: {type: String},
    name: {type: String},
    alias: {type: String},
    created_at: {type: String},
    active: {type: Boolean},
    verified: {type: Boolean},
    shared: {type: Boolean},
    locale: {type: String},
    timezone: {type: String},
    last_login_at: {type: String},
    email: {type: String},
    phone: {type: String},
    signature: {type: String},
    organization_id: {type: Number},
    tags: {type: Array},
    suspended: {type: Boolean},
    role: {type: String}
}

exports.organizationsSchema = {
    _id: {type: Number},
    url: {type: String},
    external_id: {type: String},
    name: {type: String},
    domain_names: {type: Array},
    created_at: {type: String},
    details: {type: String},
    shared_tickets: {type: Boolean},
    tags: {type: Array},
}

exports.ticketsSchema = {
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
  }

  // exports.findByKey = (key, value, entityType) => {
  //   const keyType = exports.findTypeByKey(key);
  //   const searchResults = exports.findResultsBy(keyType, value, entityType);

  // };
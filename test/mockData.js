exports.ORG_MOCK = [
	{
		'_id': 121,
		'url': 'http://initech.zendesk.com/api/v2/organizations/121.json',
		'external_id': '3fffbf20-9172-4d1d-923b-f247d9132e3a',
		'name': 'Hotcâkes',
		'domain_names': [
			'recrisys.com',
			'qiao.com',
			'makingway.com',
			'shopabout.com'
		],
		'created_at': '2016-01-02T06:07:59 -11:00',
		'details': 'MegaCorp',
		'shared_tickets': true,
		'tags': [
			'Howard',
			'Moreno',
			'Benton',
			'Bonner'
		]
	},
	{
		'_id': 122,
		'url': 'http://initech.zendesk.com/api/v2/organizations/122.json',
		'external_id': '33c4e38d-bfa3-4b12-9bb6-6f547524cf33',
		'name': 'Geekfarm',
		'domain_names': [
			'comstar.com',
			'zytrex.com',
			'austech.com',
			'enervate.com'
		],
		'created_at': '2016-04-10T11:12:35 -10:00',
		'details': 'Non profit',
		'shared_tickets': true,
		'tags': [
			'Hensley',
			'Garza',
			'Roberts',
			'Vega'
		]
	}
];

exports.TICKET_MOCK = [
	{
		'_id': '2217c7dc-7371-4401-8738-0a8a8aedc08d',
		'url': 'http://initech.zendesk.com/api/v2/tickets/2217c7dc-7371-4401-8738-0a8a8aedc08d.json',
		'external_id': '3db2c1e6-559d-4015-b7a4-6248464a6bf0',
		'created_at': '2016-07-16T12:05:12 -10:00',
		'type': 'problem',
		'subject': 'A Catastrophe in Hungary',
		'description': 'Ipsum fugiat voluptate reprehenderit cupidatat aliqua dolore consequat. Consequat ullamco minim laboris veniam ea id laborum et eiusmod excepteur sint laborum dolore qui.',
		'priority': 'normal',
		'status': 'closed',
		'submitter_id': 9,
		'assignee_id': 65,
		'organization_id': 105,
		'tags': [
			'Massachusetts',
			'New York',
			'Minnesota',
			'New Jersey'
		],
		'has_incidents': true,
		'due_at': '2016-08-06T04:16:06 -10:00',
		'via': 'web'
	},
	{
		'_id': '87db32c5-76a3-4069-954c-7d59c6c21de0',
		'url': 'http://initech.zendesk.com/api/v2/tickets/87db32c5-76a3-4069-954c-7d59c6c21de0.json',
		'external_id': '1c61056c-a5ad-478a-9fd6-38889c3cd728',
		'created_at': '2016-07-06T11:16:50 -10:00',
		'type': 'problem',
		'subject': 'A Problem in Morocco',
		'description': 'Sit culpa non magna anim. Ea velit qui nostrud eiusmod laboris dolor adipisicing quis deserunt elit amet.',
		'priority': 'urgent',
		'status': 'solved',
		'submitter_id': 14,
		'assignee_id': 7,
		'organization_id': 118,
		'tags': [
			'Texas',
			'Nevada',
			'Minnesota',
			'Arizona'
		],
		'has_incidents': false,
		'due_at': '2016-08-19T07:40:17 -10:00',
		'via': 'voice'
	},
];

exports.USER_MOCK = [
	{
		'_id': 67,
		'url': 'http://initech.zendesk.com/api/v2/users/67.json',
		'external_id': '01dd136a-bf3b-4340-94ee-8ecbea6fd65f',
		'name': 'Benjamin Stephenson',
		'alias': 'Miss Louisa',
		'created_at': '2016-04-20T12:26:44 -10:00',
		'active': true,
		'verified': true,
		'shared': false,
		'locale': 'zh-CN',
		'timezone': 'Oman',
		'last_login_at': '2016-04-06T12:17:21 -10:00',
		'email': 'louisastephenson@flotonic.com',
		'phone': '9914-712-033',
		'signature': 'Don\'t Worry Be Happy!',
		'organization_id': 122,
		'tags': [
			'Fairhaven',
			'Kraemer',
			'Mayfair',
			'Saranap'
		],
		'suspended': true,
		'role': 'agent'
	},
	{
		'_id': 11,
		'url': 'http://initech.zendesk.com/api/v2/users/11.json',
		'external_id': 'f844d39b-1d2c-4908-8719-48b5930bc6a2',
		'name': 'Shelly Clements',
		'alias': 'Miss Campos',
		'created_at': '2016-06-10T06:50:13 -10:00',
		'active': true,
		'verified': true,
		'shared': true,
		'locale': 'zh-CN',
		'timezone': 'Moldova',
		'last_login_at': '2016-02-28T04:06:24 -11:00',
		'phone': '9494-882-401',
		'signature': 'Don\'t Worry Be Happy!',
		'organization_id': 103,
		'tags': [
			'Camptown',
			'Glenville',
			'Harleigh',
			'Tedrow'
		],
		'suspended': false,
		'role': 'agent'
	},
];
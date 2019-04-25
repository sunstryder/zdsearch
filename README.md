# Zendesk Search

## Starting up

First, install dependencies using npm:

`npm i`

Afterwards, you'll be able to run the app using 

`npm start`

## Usage

`zdsearch` takes commands using the following syntax:

### Searching

```javascript
    zdsearch$ <dataset> [field] [value]

    //example search usage
    zdsearch$ organizations details megacorp

    //returns
    ...,
    - 
        _id:            121
        url:            http://initech.zendesk.com/api/v2/organizations/121.json
        external_id:    3fffbf20-9172-4d1d-923b-f247d9132e3a
        name:           Hotcâkes
        domain_names: 
            - recrisys.com
            - qiao.com
            - makingway.com
            - shopabout.com
        created_at:     2016-01-02T06:07:59 -11:00
        details:        MegaCorp
        shared_tickets: true
        tags: 
            - Howard
            - Moreno
            - Benton
            - Bonner
    -
  ...
```

```<dataset>``` can be `organizations`, `users` or `tickets`. Pressing Tab can autocomplete this command.

```[fields]``` is an attribute that you want to search for. e.g: `_id`, `tags`, `suspended`. Tab to autocomplete is enabled for this argument.

```[value]``` the value of the attribute you want to find. e.g: `23`, `howard`, `true`

NB: For empty `[value]` or multi-word `[value]`, wrap the argument in "doublequotes" e.g. : `tickets tags "american samoa"`

### Fields

```javascript
    zdsearch$ fields 

    //returns
    Here are all the searchable fields for each set: 
    ~~~~~~~~~~~ User Fields ~~~~~~~~~~~~~

    - _id
    - url
    - external_id
    - name
    - alias
    - created_at
    - active
    - verified
    - shared
    - locale
    - timezone
    - last_login_at
    - email
    - phone
    - signature
    - organization_id
    - tags
    - suspended
    - role

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ...
```

`fields` will show all searchable fields across the datasets.

### Help

Enter ```help``` at any time to get the full list of commands.

### Quitting

Enter `quit` or `exit` to shut down the app.

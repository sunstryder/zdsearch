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
```

```<dataset>``` can be `organizations`, `users` or `tickets`. Pressing Tab can autocomplete this command.

```[fields]``` an attribute that you want to search for. e.g: `_id`, `tags`, `suspended`. You can get the list of searchable fields by running the `fields` command.

```[value]``` the value of the attribute you want to find. e.g: 23, howard, true

NB: For empty `[value]` or multi-word `[value]`, wrap the argument in "doublequotes" e.g. : tickets tags "american samoa"

### Searchable Fields

```
    zdsearch$ fields [dataset]
```

`fields` will show all searchable fields across the datasets, passing an argument to this command will show only the fields for that dataset.

### Help

Enter ```help``` at any time to get the full list of commands.

### Quitting

Enter `quit` or `exit` to shut down the app.

## Instructions

Using the provided data (tickets.json and users.json and organization.json ) write a simple command line application to search the data and return the results in a human readable format.

1. Where the data exists, values from any related entities should be included in the results. 

2. The user should be able to search on any field, full value matching is fine (e.g. “mar” won’t return “mary”). 

3. The user should also be able to search for empty values, e.g. where description is empty.


for multi word searches such as "Don't Worry Be Happy!", put the search term in quotes like so.
for empty searches use ""
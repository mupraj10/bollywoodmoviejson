### Bollywood JSON Movie Collection

A collection of bollywood movies in json file format

Inspired by [JSON Movie Collection](https://github.com/jsonmc/jsonmc/blob/master/readme.markdown)

### Contributin

Please read [this](./contributing.md)

If you're looking for issues to contribute, check those that does not have a "taken" label. 

Always reference your pull requests with the respective issue by adding Fixes #100 on your commit message, PR title or PR description. A template is available when submitting your PR.

### A movie has the following details

Movie attribute | 	Details
----------------|--------------
Release date	| YYYY-MM-DD release date
Categories	| Action, adventure, comedy, animation, family, fantasy, sci-fi
Director |	Directors of the movie
Writers	| Screenplay and story writers
Actors	| Main casts of the movie
Year	| Movie released year
Runtime	| Runtime in mins
Songs  | Songs found in the soundtrack of the film 
Storyline	| Brief description of the movie
Poster | Link to img in posters folder same name as movie title 

Example movie file

````
{
    "name": "Padmaavat",
    "year": 2018,
    "runtime": 163,
    "categories": [
      "period drama"
    ],
    "release-date": "2018-01-25",
    "director": "Sanjay Leela Bhansali",
    "writer": [
      "Sanjay Leela Bhansali",
      "Prakash Kapadia"
    ],
    "actors": [
      "Deepika Padukone",
      "Shahid Kapoor",
      "Ranvir Singh"
    ],
    "storyline": "Loosely based on the epic poem Padmavat by Malik Muhammad Jayasi",
    "songs": [
        "Ghoomar",
        "Ek Dil Ek Jaan",
        "Khalibali",
        "Naniowale Ne",
        "Holi",
        "Binte Dil"
    ], 
    "poster": "./posters/padmaavat.jpeg"
  }
  ```
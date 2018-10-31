# Contributing to Bollywood Movie JSON

All files are valid json files: every key should be double-quoted.

The JSON output should be the default "pretty" json output provided by node, with two spaces indent.

When in doubt, the output should match the `JSON.stringify(data, null, 2)` function output. `data` being the contents of the json file.

## File Names

All filenames should be lower-case. Spaces should be replaced by dashes ("-").

## Movies

Each movie should be added to its own year folder and follow the "File Names" rule (above).
If the year is not present add it. 

### Storyline / Description

Should have the "storyline" key and should only be the official one.

### Release Date

Should have the "release-date" key on the format "YYYY-MM-DD" in India.

### Director / Writer / Actors

The keys are "director" or "writer" or "actors". Note that only the "actors" keys is plural.

If there is only one member, it should be a plain string. Else, it should be an array with strings.

### Categories

Always lower-case and singular.

### Year

Just the integer number. No quotes.

### Runtime

Length of the movie in minutes. Integer, no quotes.

### Songs

Array of strings. Only the sounds on the offical soundtrack

### Poster

Add the official poster as a jpeg to the posters folder and link it here

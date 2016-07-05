# Test Project for ViaPlay

## Tools

- Build: For building my application I used [webpack](https://webpack.github.io/) with [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack).
- Linter: To keep my style clean and consistant I used [EsLint](http://eslint.org/) with the standard, and the React plugins, and some additional rules. `npm run lint`
- CSS: I used [PostCSS](http://postcss.org/) to make my life easier. It's a pre/post CSS processor.
- **Pre-commit hooks:** `EsLint` (linter tool), and `npm test` to make the code stable, and clean.


## Testing

For testing I used:
- karma
- Mocha
- phantomjs
- chai, chai-enzyme

Running the teste: `npm test`

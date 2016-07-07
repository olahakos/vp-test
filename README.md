# Test Project for ViaPlay
[![CircleCI](https://circleci.com/gh/olahakos/vp-test.svg?style=svg)](https://circleci.com/gh/olahakos/vp-test)

## Start the application

**1. With Docker:**
```
$ docker pull quay.io/akos/vp-test
$ docker run -it -p 8080:80 quay.io/akos/vp-test
```
After this, you can see the application on your `http://localhost:8080`.

---

**2. from repository:**

After cloning the repository:
```
$ npm install
$ npm start
```
By default it starts with PORT=3000 environment variable, so you can find the application on `http://localhost:3000`.

You can **build the application** with the `npm run build` command.

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

Running the tests: `npm test`

## Deployment

- The code is obviously in GitHub
- Continuous Integration: Here I used Circle CI. It runs the tests on every commit, and warn you if it fails. On the `dev`, and `master` branches if it passes the tests than it creates a docker image, and upload it to Quay.io
- [Quay.io](Quay.io): Docker repository, can store my current and previous docker images.

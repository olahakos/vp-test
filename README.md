# Test Project for ViaPlay
[![CircleCI](https://circleci.com/gh/olahakos/vp-test.svg?style=svg)](https://circleci.com/gh/olahakos/vp-test)

This is just a little test application for Viaplay. It's a movie detail page. The important parameters could be override with environment variables.

I had a little `XMLHttpRequest` error because I'm not whitelisted at the TrailerAddict API server, but I mocked out the server response.

The application based on [React](https://facebook.github.io/react/).

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

---

**3. Production environment:**

The site is available [here](http://ec2-52-34-31-204.us-west-2.compute.amazonaws.com/).
It's an AWS micro instance with Ubuntu 14.x.

In live environment you can run your Docker with [Upstart](http://upstart.ubuntu.com/), (or on CoreOS [systemd](https://coreos.com/using-coreos/systemd/) is a bit more easy)

Here is my upstart config file: /etc/init/vp-test.config

```sh
description "VP-test"
author "Akos Olah"
start on filesystem and started docker
stop on runlevel [!2345]
respawn
pre-start script
    # prepare environment
    /usr/bin/docker pull quay.io/akos/vp-test:latest
end script

script
  /usr/bin/docker run --rm \
        --name vp-test  \
        -p 80:80 \
        quay.io/akos/vp-test:latest
end script
```

And finally start the service:
```
$ sudo service vp-test start
```

## Tools

- Build: For building my application I used [webpack](https://webpack.github.io/) with [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack).
- Linter: To keep my style clean and consistant I used [EsLint](http://eslint.org/) with the standard, and the React plugins, and some additional rules. `npm run lint`
- CSS: I used [PostCSS](http://postcss.org/) to make my life easier. It's a pre/post CSS processor.
- **Pre-commit hooks:** `EsLint` (linter tool), and `npm test` to make the code stable, and clean.
- To use the new fancy JS language elements I used [Babel](https://babeljs.io/).
- I used [Font Awesome](http://fontawesome.io/) for the little icons.
- [Lodash](https://lodash.com/) of course to validate, and handle Objects, and Arrays.
- For the XML parsing I used [xml2js](https://www.npmjs.com/package/xml2js)
- Data fetching with [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)

## Testing

I wrote some unit tests for the project with these tools:
- karma
- Mocha
- phantomjs
- chai, chai-enzyme

Running the tests: `npm test`

## Deployment

- The code is obviously in GitHub
- Continuous Integration: Here I used [Circle CI](https://circleci.com/). It runs the tests on every commit, and warn you if it fails. On the `dev`, and `master` branches if it passes the tests than it creates a docker image, and upload it to Quay.io
- [Quay.io](Quay.io): Docker repository, can store my current and previous docker images.

## Missing from the project

I wanted to work a little bit more with the animations, like little hover effects on the search box, and the profile box, but unfortunately I run out of time.

The other thing what is missing is the mobile layout. I prepared the layout for several breakpoints, but I had no time for implement the specific mobile layouts.

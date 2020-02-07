# vue-poc

## URLs to test
In order to see a stream or activity items below the stream, you'll need to access the participants route with an id that corresponds to a participant on try.donordrive.com with a stream (only Twitch for now, will update to pull in Mixer and YouTube) and/or activity items.

Navigating to /participants/15882 will show activity items.
Navigating to /participants/19461 will show a stream.

## Airtable API key and base ID
To show icons, I'll need to send you an API key and base ID for Airtable, where I'm hosting a prototype for a design system repository. Send me an email (mtodd@donordrive.com) or Slack (Michael Todd), and I'll share those two things, which you'll add to an .env.development.local file at the root level.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

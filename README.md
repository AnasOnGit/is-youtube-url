# Is-YouTube-URL
Verify if YouTube URL is valid

# Available Options
- Verify YouTube URL
- Extract YouTube Video ID
- Extract YouTube Channel ID
- Check if Video URL is valid

## What's New?
`YouTube shorts URL supported`

## Installation
`using npm`
```
npm install is-youtube-url
```
`using Yarn`
```bash
yarn  add is-youtube-url
```

## Usage
### Verify URL
```javascript
import { isValidUrl } from "is-youtube-url";

// example url
let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

console.log(isValidUrl(url)) //true
console.log(isValidUrl("google.com")); //false
```

### Extract YouTube Video ID
```javascript
import { getVideoId } from "is-youtube-url";

// example url
let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
console.log(getVideoId(url)); //dQw4w9WgXcQ
```

### Extract YouTube Channel ID
```javascript
import { getChannelId} from "is-youtube-url";

// example url
let url = "https://www.youtube.com/c/AnasandAmmar";
console.log(getChannelId(url)); //AnasandAmmar
```

### Is video URL valid
```javascript
import { isVideo } from "is-youtube-url";

// example url
let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
console.log(isVideo(url)); //true

console.log(isVideo("https://www.youtube.com/c/AnasandAmmar")); //false
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



# Support
[Support My Work](https://paypal.me/anasikhlas)
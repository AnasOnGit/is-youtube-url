// all possible youtube urls
const possibleDomains = [
  "https://www.youtube.com/",
  "https://www.youtube.com/shorts/",
  "http://www.youtube.com/",
  "https://youtube.com/",
  "http://youtube.com/",
  "http://youtu.be/",
  "https://youtu.be/",
  "https://m.youtube.com/",
  "http://m.youtube.com/",
  "m.youtube.com/",
  "https://youtube.com/shorts/I1I1i1i1I1I",
];
// possible video links on youtube
const possibleVideoLinks = [
  "youtu.be",
  "https://www.youtube.com/shorts/",
  "https://youtube.com/shorts/",
  "http://m.youtube.com/shorts/",
  "https://m.youtube.com/shorts/",
  "youtube.com/watch?v=",
  "m.youtube.com/watch?v=",
  "https://www.youtube.com/embed/",
  "https://www.youtube.com/watch/",
  "https://www.youtube.com/live/",
];

// possbile channel link format on youtube
const possibleChannelLinks = [
  ".youtube.com/@",
  ".youtube.com/channel/",
  ".youtube.com/c/",
  ".youtube.com/user/",
]

// check if url is valid
const isValidUrl = (url) => {
  return possibleDomains.some((domain) => url.includes(domain));
};

//   extract channel id from url
const getChannelId = (url) => {
  let isValidChannelLink = possibleChannelLinks.some((domain) => url.includes(domain));
  if (isValidChannelLink) {
    switch(true) {
      case url.includes("youtube.com/channel/"):
        return url.split("/")[4];
      case url.includes("youtube.com/user/"):
        return url.split("/")[4];
      case url.includes("youtube.com/c/"):
        return url.split("/")[4];
      case url.includes("youtube.com/@"):
        return url.split("youtube.com/")[1];
      default:
        return null;
    }
  } else {
    return null;
  }
};


// verify is video valid
const isVideo = (url) => {
  if (isValidUrl(url)) {
    return possibleVideoLinks.some((videoUrl) => url.includes(videoUrl));
  } else {
    return false;
  }
};

// extract video id from url
const getVideoId = (url) => {
  if (isVideo(url)) {
    
    switch (true) {
      case url.includes("youtu.be"):
        return url.split("/")[3];
      case url.includes("https://www.youtube.com/shorts/"):
        console.log(url)
        return url.split("/")[4].split("?")[0];
      case url.includes("https://www.youtube.com/embed/"):
        return url.split(".com/embed/")[1].split("?")[0]
        return url;
      case url.includes("https://www.youtube.com/live/"):
        return url.split(".com/live/")[1].split("?")[0]
        return url;
      case url.includes("https://www.youtube.com/watch/"):
        return url.split(".com/watch/")[1].split("?")[0]
        return url;
      case url.includes("youtube.com") || url.includes("m.youtube.com"):
        return url.split("=")[1];
      default:
        return null;
    }
  } else {
    console.log("not valid");
    return null;
  }
};

module.exports = {
  getVideoId,
  isValidUrl,
  getChannelId,
  isVideo,
};

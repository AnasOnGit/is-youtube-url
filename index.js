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
// check if url is valid
const isValidurl = (url) => {
  return possibleDomains.some((domain) => url.includes(domain));
};

//   extract channel id from url
const getChannelId = (url) => {
  if (isValidurl(url)) {
    if (url.includes("channel")) {
      return url.split("/")[4];
    } else if (url.includes("user")) {
      return url.split("/")[4];
    }
    if (url.includes("c")) {
      return url.split("/")[4];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
// extract video id from url
const getVideoId = (url) => {
  if (isValidurl(url)) {
    if (url.includes("youtu.be")) {
      return url.split("/")[3];
    } else if (
      url.includes("https://www.youtube.com/shorts/") ||
      url.includes("https://youtube.com/shorts/")
    ) {
      return url.split("/")[4].split("?")[0];
    } else if (url.includes("youtube.com")) {
      return url.split("=")[1];
    } else if (url.includes("m.youtube.com")) {
      return url.split("=")[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

let channelUrl = "https://www.google.com/c/AnasandAmmar";

console.log(getChannelId(channelUrl));

module.exports = {
  getVideoId,
  isValidurl,
  getChannelId,
};

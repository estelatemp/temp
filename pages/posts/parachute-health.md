## Parachute Health
> "Better way to order medical equipment" modernize healthcare by digitizing it, gives providers with tools to improve patient outcomes"

- Caregivers: faxing med equipment orders sucks, going back and forth on insurance sucks, tracking orders sucks and takes away time from your patient.

- Order what the patient needs, answer some insurance questions, physician signs off. Order goes straight to supplier with necessary documentation.

- Talk to suppliers via online chat, no more phone calls. Track orders online! No more med equipment headaches


-----
Spoke with Eric Collins, my would-be EM. Easygoing flow of conversation, talked about pandemic, his 2 kids under 6, and his thoughts on what the company looks like moving forward. He prefers mindful hiring over mass-hiring. Remote-first future.

Tech portion: was given file with no extension of 1 million scraped tweets. For each burough of NY tweets, find how many have links in them.

```js
const fs = require("fs");

let buroughs = {};
const tweetText = fs.readFile("./tweets/tweets_aa.txt", (err, data) => {
  if (err) throw err;
  let tweets = String(data).split("\n");
  for (tweet of tweets) {
    let split = tweet.split("\t");
    if (split[1] && split[1].includes("http")) {
      buroughs[split[0]] = (buroughs[String(split[0])] || 0) + 1;
      console.log(buroughs);
    }
  }
  return buroughs;
});
```


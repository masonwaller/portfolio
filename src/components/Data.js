import portfolio from "./images/portfolio.png";
import beach from "./images/beach.png";
import dog from "./images/dog.png";
import nba from "./images/nba.png";
import actor from "./images/actor.png";

const data = [
  {
    title: "Portfolio",
    lang: "React, Material-UI, React-Router",
    image: portfolio,
    link: "",
    repo: "https://github.com/masonwaller/portfolio/tree/master",
    desc:
      "Incorporates material-ui with react to create a multi-page website, displaying the accomplishments, projects, and contact information of yours truly."
  },
  {
    title: "Beach Lyfe",
    lang:
      "React, Redux, Semantic-UI, React-Router, Rails, Nexmo, GoogleMaps API, Postgres, Bcrypt",
    image: beach,
    link: "https://www.youtube.com/watch?v=HMQmavGmqjk",
    repo: "https://github.com/masonwaller/mod-5-proj",
    desc:
      "Built a React app using Redux to help users find beaches, rate beaches, and get directions to those beaches. Implemented Nexmo so users could send a text containing the the beaches location."
  },
  {
    title: "NBA Stats",
    lang: "React, Semantic-UI, React-Router, Rails, Postgres, Bcrypt",
    image: nba,
    link: "https://www.youtube.com/watch?v=CA_7VQVVUD8",
    repo: "https://github.com/masonwaller/mod-4-project-react",
    desc:
      "Developed a user friendly app to keep track of your favorite NBA teams and players. Uses Bcrypt to authenticate users and protect user information."
  },
  {
    title: "Guess That Actor",
    lang: "JavaScript, Rails, Postgres, YouTube API",
    image: actor,
    link: "https://agile-reaches-30710.herokuapp.com/",
    repo: "https://github.com/masonwaller/mod-3-proj",
    desc:
      "Single-page JavaScript web Trivia game that integrates YouTube's API to test your knowledge of actors and actresses."
  },
  {
    title: "Austin Dog Parks",
    lang: "Rails, SQLite3, Active Storage",
    image: dog,
    link: "https://www.youtube.com/watch?v=bZ7gqBOAKN0&t=3s",
    repo: "https://github.com/masonwaller/mod-2-project",
    desc:
      "Developed using the MVC framework with Rails to help dog owners in the Austin, TX area find parks and other dogs around."
  }
];
export default data;

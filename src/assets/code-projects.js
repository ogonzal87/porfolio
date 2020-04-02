const faceFilterImg = "./images/code/face-filter.gif";
const dsImg = "./images/code/oskrds.gif";
const emotionImg = "./images/code/emotion-recognition.gif";
const pokemonImg = "./images/code/pokemon.gif";
const designCalImg = "./images/code/design-cal.gif";
const chameleonImg = "./images/code/cam-aleon.gif";
const designDebatesImg = "./images/code/design-debates.jpg";

const codeProjects = [
  {
    title: "Instagram face filter",
    description: "Made a few face filers (effects) for Instagram.",
    src: require(faceFilterImg),
    buttonName: "Play with the filter",
    href: "https://instagram.com/a/r/?effect_id=1077625679243023"
  },
  {
    title: "OSKRHQ.DS 2.0",
    description:
      "This sandbox showcases my Design System's architecture and consumption of Design Tokens.",
    src: require(dsImg),
    buttonName: "Examine the system",
    href:
      "https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
  },
  {
    title: "Emotion recognition",
    description:
      "Created an app that recognizes face gestures and displays the emotion using Machine Learning and the browser.",
    src: require(emotionImg),
    buttonName: "Play with it",
    href: "https://emotion-recognition.surge.sh/"
  },
  {
    title: "Cam-aleon",
    description:
      "App I created that takes a color shown to the camera and colors a really cool chameleon I drew.",
    src: require(chameleonImg),
    buttonName: "Play with it",
    href: "https://cam-aleon.surge.sh/"
  },
  {
    title: "Pokemon game",
    description:
      "A Pokemon game app I created using Vanilla Javascript and CSS Custom Properties. Wanted to build it without relying on any UI Framework/Libraries like React.",
    src: require(pokemonImg),
    buttonName: "Play with it",
    href: "https://pokemon-game.surge.sh/"
  },
  {
    title: "Design debates",
    description:
      "A democratic approach for when you can't decide which design solution is best. This app let's you show two designs for light targeted feedback.",
    src: require(designDebatesImg),
    buttonName: "Play with it",
    href: "https://design-debates.netlify.com/"
  }
  //   {
  //     title: "Money time",
  //     description:
  //       "Find out how much does a design meeting in the Bay Area costs... I created it to be mindful of a meeting's purpose and other people’s time. ⏰ = 💵 and the users we design for end up paying for it one way or another.",
  //     src: require(designCalImg),
  //     buttonName: "Play with it",
  //     href: "https://money-time.surge.sh/"
  //   }
];

export default codeProjects;

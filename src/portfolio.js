/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hoàng Anh Tiến",
  title: "Hi all, I'm Tiến",
  subTitle: emoji(
    "A passionate Backend Developer and System Design 🚀 with experience building Backend and Mobile applications with Java / Golang / Kotlin / Spring Boot and other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PMmjWNC5bx6Fvtq8Pc235pZmRMa9o474/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/hoangtien2k3",
  linkedin: "https://www.linkedin.com/in/hoangtien2k3/",
  gmail: "hoangtien2k3qx1@gmail.com",
  gitlab: "https://gitlab.com/hoangtien2k3",
  facebook: "https://www.facebook.com/hoangtien2k3.vn",
  medium: "https://medium.com/@hoangtien2k3",
  stackoverflow: "https://stackoverflow.com/users/17357931/hoangtien2k3?tab=profile",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Backend / System for your web and mobile applications"
    ),
    emoji(
      "⚡ Passionate about Java backend development Reactive programming (reactor-core)"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Cloudinary/ Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "stack-overflow",
      fontAwesomeClassname: "fab fa-stack-overflow"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "apple",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "dev",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Transport Technology",
      logo: require("./assets/images/transpotLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "API",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Mobile App",
      progressPercentage: "35%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer OutSource",
      company: "Viettel Telecom",
      companylogo: require("./assets/images/viettelTelecomLogo.png"),
      date: "May 2024 – Present",
      desc: "Participate in the project to develop Order project, services at Viettel",
      descBullets: [
        "Order Project using Java8 and Oracle",
        "Sme Hub using Java11 and MariaDB and Mysql, using reactive programming"
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "TLH Viet Nam",
      companylogo: require("./assets/images/tlhVietNamLogo.png"),
      date: "Feb 2024 – May 2024",
      desc: "Participate in projects and do web backend with Java, kafka, k8s, docker ...",
      descBullets: [
        "Using Java17 and Java11, core frameword spring boot, spring data jpa",
        "Learn about spring boot and spring webflux (reactor-core)"
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "Cen Group",
      companylogo: require("./assets/images/cenGroupLogo.png"),
      date: "Sep 2023 – Feb 2024",
      desc: "Vietnam's leading real estate group, owning a diverse ecosystem: Real Estate & Startup Investment ...",
      descBullets: [
        "Using Java and Kotlin to develop golf course booking app: Fastee App",
        "Learn and get guided backend project using python"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES AND STARTUPS I HAVE WORKED WITH AND THEIR PROJECTS",
  projects: [
    {
      image: require("./assets/images/smeViettelLogo.png"),
      projectName: "Viettel SME",
      projectDesc: "Service connection: vContract, Invoice, Mysign, Social Insurance, CA ...",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sme.viettel.vn/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/viettelLogo.png"),
      projectName: "Viettel Telecom",
      projectDesc: "Network services and sim numbers for mobile devices",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vietteltelecom.vn/vx/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fasteeLogo.png"),
      projectName: "Fastee App",
      projectDesc: "Fastee online golf course booking application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fastee.vn/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build a fanpage about programming",
      subtitle: "Share knowledge, receive code",
      slides_url: "https://github.com/hoangtien2k3/programming-books",
      event_url: "https://www.facebook.com/hoangtien2k3"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Favorite Song 🎙️"),
  subtitle: "I AM A TRUE SKE, I ALWAYS LISTEN TO MTP MUSIC",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://zingmp3.vn/embed/song/ZW69BZOF?start=false%20frameborder=%220%22%20allowfullscreen=%22true%22",
    "https://zingmp3.vn/embed/song/ZZEEOWEW?start=false%20frameborder=%220%22%20allowfullscreen=%22true%22"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: emoji(
    "Feel free to download my resume 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact with me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+84) 828007853",
  email_address: "hoangtien2k3qx1@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "hoangtien_2k3", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

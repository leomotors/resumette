export const fullVersionLink = "https://resume.leomotors.vercel.app";
export const sourceLink = "https://github.com/Leomotors/resumette";

export const introData = {
  name: "Nutthapat Pongtanyavichai",
  nickname: "Leo",
  phone: import.meta.env.DEV ? import.meta.env.VITE_PHONE : "",
  email: import.meta.env.DEV ? import.meta.env.VITE_EMAIL : "",
  github: "Leomotors",
  linkedin: "leo-nutthapat",
  location: "Samut Prakan, Thailand",
  website: "leomotors.github.io",
};

export const technologies = [
  {
    section: "Languages:",
    details:
      "C/C++, JavaScript, TypeScript (Strong), Node.js, Python, Dart, C#",
  },
  {
    section: "Preferred Combo:",
    details: "SvelteKit + TailwindCSS, TypeScript",
  },
  {
    section: "Library/Framework:",
    details:
      "React, Next, Vue, Svelte/Kit, Bootstrap, TailwindCSS, Mocha, Jest, discord.js, UWP+WinUI (C++/C#)",
  },
  {
    section: "Tools:",
    details:
      "Git, GitHub, VSCode, Visual Studio, zsh, Markdown, LaTeX, LaTeX Markdown Combo",
  },
  {
    section: "Other:",
    details:
      "Vercel, Netlify, Github Actions, Firebase, DigitalOcean (Droplet), Microsoft Azure (Functions)",
  },
];

export const educations = [
  {
    head: "Triam Udom Suksa School (High School)",
    details: "Science Math, 2019-2022 (GPAX 3.95)",
  },
  {
    head: "Chulalongkorn University",
    details: "B.Eng. Computer Engineering, 2022-",
  },
];

export const workExperiences = [];

export const awards = [
  {
    name: "1st Prize in Samsung Innovation Campus: IDEATHON (2019)",
    details:
      "10-day camp learning about programming. IDEATHON is held at the end of the camp to let students apply their knowledge.",
  },
  {
    name: "Silver Medal Award & Determination Award in Thailand Olympiad in Informatics (2021)",
    details:
      "A competition where around 90 students from each center solve algorithmic puzzle. Winning medal award in this competition open chance for students to be accepted by every university including Chulalongkorn.",
  },
  {
    name: "2nd Place in NITAD Hackathon (2022)",
    details:
      "A Hackathon focuses on making ideas for the creation of innovation that solves garbage problems in low-income community.",
  },
  {
    name: "IPST Camp 2.2 (2022)",
    details:
      "IOI Training Camp to find representative of Thailand, made into the final selection round of 9 people",
  },
  {
    name: "APIO 2022 Participant",
    details:
      "IOI-Format contest but for Asia-Pacific, featuring very hard algorithmic problems",
  },
];

export const projects = [
  {
    name: "Food Busters",
    details:
      "A team formed for AIS JUMP Thailand Hackathon. My role was main developer. My work includes building sized app to be prototype for our idea with Flutter, Build websites to list their Prototype, Website and API for running Image Classification Model, Firebase CRUD App for storing and showing awesome quotes",
    url: "github.com/Food-Busters",
  },
  {
    name: "Crack 'n' Code Pre-TOI18 Programming Contest",
    details:
      "Setting up server (DigitalOcean Droplet) and CMS (github.com/cms-dev/cms) to hold a programming contest with over 100 registered contestants, also created the website for this contest:",
    url: "cnc-pretoi18.netlify.app",
  },
  {
    name: "Anime Captcha",
    details:
      "Full-Stack web minigame written in SvelteKit inspired by Anime Captcha Meme, feel free to try it:",
    url: "anime-captcha.vercel.app",
  },
  {
    name: "Cocoa Discord Utils",
    details:
      "Library on npm create to simplify making discord bots, is used in all of my discord bots",
    url: "github.com/Leomotors/cocoa-discord-utils",
  },
  {
    name: "Salim Bot",
    details: "A 'Salim' Discord Bot",
    url: "github.com/Leomotors/Salim-Bot",
  },
  {
    name: "harunon.js",
    details:
      "Multipurpose Discord Bot running on my friends server. Can stream musics from YouTube and have used multiple discord.js features. (Embed, Interaction Components)",
    url: "github.com/CarelessDev/harunon.js",
  },
  {
    name: "@leomotors/music-bot",
    details:
      "Discord Bot for streaming music from YouTube, has search feature and utilize amazing cool embed, is part of harunon.js and leomotors/cminusminus",
    url: "github.com/Leomotors/music-bot",
  },
  {
    name: "Terminal Video Player",
    details:
      "As it name suggests, play a video with ASCII Characters in Terminal, it also supports color!",
    url: "github.com/Leomotors/Terminal-Video-Player",
  },
];

export const interests = [
  "Areas : RGB, Anime, r/battlestations, Windows Insider",
  "Typing : 80-100 WPM (English) 40-50 WPM (Thai)",
  "Games : Any game that can be played with friends happily",
  "Music : J-POP, Anime, Meme",
];

// import { DiscordIcon } from "./img/discord";
import { GithubIcon } from "./img/github";
import { LinkedinIcon } from "./img/linkedin";

export type SocialMedia = {
  name: string;
  username: string;
  url: string;
  Icon: (props: JSX.IntrinsicElements["svg"]) => JSX.Element;
  blurb: string;
  action: string;
};

export const socials: SocialMedia[] = [
  // {
  //   name: "Discord",
  //   username: "drixitel",
  //   url: "https://discord.com/users/496553620993605643",
  //   Icon: DiscordIcon,
  //   blurb: "I am most active on Discord, feel free to add me!",
  //   action: "reach out",
  // },
  {
    name: "LinkedIn",
    username: "Michelle Pichardo",
    url: "https://www.linkedin.com/in/michelle-pichardo-munoz/",
    Icon: LinkedinIcon,
    blurb: "Connect with me on LinkedIn!",
    action: "let's connect",
  },
  {
    name: "GitHub",
    username: "Drixitel",
    url: "https://github.com/Drixitel",
    Icon: GithubIcon,
    blurb: "Check out my projects on GitHub!",
    action: "see more",
  },
];

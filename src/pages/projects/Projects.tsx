import WindowBorder from "@/components/desktop/Window";

import Icon from "./Icon";

import hacker from "@/assets/icons/hacker_exe_icon.png";
import ur from "@/assets/icons/ultimate_reality_icon.png";
import { useState } from "react";
import ProjectHeader from "./ProjectHeader";

import ADAICON1 from "@/assets/ada-1.jpeg";
import ADAICON2 from "@/assets/ada-2.jpeg";

const Projects = () => {
  const projects: {
    name: string;
    image: string;
    info: {
      title: string;
      summary: string;
      link: string;
      images: string[];
      widget: JSX.Element;
    };
  }[] = [
    {
      name: "Hacker.exe",
      image: hacker,
      info: {
        title: "Hacker.Exe - Hacking Simulator",
        summary: `This was my first ever game. Although this game had very mixed reviews, it taught me a lot about video games and how much effort and thought goes into making them. The creation of this game took roughly 3 months, during my sophomore summer break in high school.

          More About The Game:
          * The game is heavily inspired by point and click horror games

          * All of the graphics were made by me

          * The game was made using the GameMaker Studio 2 game engine

          This game also garnered around 100,000 downloads on the google play store before it got taken down due to deprecated api's.
        `,
        link: "https://www.linkupgames.com/hacker-exe-home-page",
        images: [
          "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-684721-52.jpg",
          "https://i.ytimg.com/vi/A0JYD-w-GFY/maxresdefault.jpg",
        ],
        widget: (
          <iframe
            src="https://widgets.gamejolt.com/package/v1?key=93u6qx5V"
            width="100%"
            height="245"
          ></iframe>
        ),
      },
    },
    {
      name: "UR.exe",
      image: ur,
      info: {
        title: "Ultimate Reality - A Pixelated Adventure",
        summary: `This game fueled my passion for indie games. I learned a lot about pixel art games with this game. This game is a platform beat'em up created in GameMaker Studio 2. Save the multiverse from an evil entity that threatens to control all that there is!

        More Info:
        * Game was inspired by a comic book character created when I was a kid
        * The soundtrack was outsourced and has many different genre's incorporated
        * The game takes inspiration from the combat style in Marvel's Spiderman

        This game became popular in GameJolt and was featured as a prominent game in their website. The game has also gotten picked up by VoxPop Games as a VoxPop game exclusive.
        `,
        link: "https://gamejolt.com/games/ultimatereality/406940",
        images: [
          "https://m.gjcdn.net/game-screenshot/600/2221985-t9b739jy-v4.webp",
          "https://m.gjcdn.net/game-screenshot/600/2411152-jsk7cdgx-v4.webp",
          "https://m.gjcdn.net/game-screenshot/600/2867848-rggcprjz-v4.webp",
        ],
        widget: (
          <iframe
            src="https://widgets.gamejolt.com/package/v1?key=YTpcvSoi"
            width="100%"
            height="245"
          ></iframe>
        ),
      },
    },
    {
      name: "term-calendar.exe",
      image:
        "https://static-00.iconduck.com/assets.00/terminal-icon-512x478-wh766b7f.png",
      info: {
        title: "Terminal Calendar - Built with Ada",
        summary: `A fully functional calendar with a custom ASCII font that displays the calendar year of the user's choosing!

        This program served as a proof-of-concept, developed for a class to explore diverse programming languages and their applications. 

        Learning different syntax styles, such as the one used in Ada, was both rewarding and practical. This experience allowed to broadened my understanding of different programming paradigms and their influence on various domains.
        `,
        link: "",
        images: [ADAICON1, ADAICON2],
        widget: <div />,
      },
    },
    {
      name: "jumble.nvim",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADWCAMAAAAHMIWUAAAAwFBMVEWvr6////8br1AAAAC0tLStra0ctFI0NDSDg4OcnJxISEi3t7f4+PhfX18ct1QeHh6KiooPXysOWikkJCQXFxcXlUQRbjIaqk47OztkZGR5eXmioqIbrU8JOhrv7+8tLS0Sdjbj4+MNDQ1QUFCUlJQMTSNtbW0ZoUoVhT3ExMQUfjoEGwxNTU0Xk0MKQB0WjUEGJhEDEQjR0dEHLhULSSEQaDAFIhAEGAvm5uYJPBvX19cEGQsOXSoIMxcGKxQNVCf3H2kHAAANlUlEQVR4nO2d61rbOBCGHdsxh0AIBEhIgDQkQFsobaAHtifu/65WM1ISy5YdeSRLeNn5sdunuyC/kWPNNycHrbdjge8LcGj/s/43zQ/r86OPVb2wTqOo42FZH6w/I2Zt9+t6YP0Qoc2dL+yeNWCc16fsH9vOV3a94A6jPEq6H9m/zhwv7Zp1mzF+S8Iwec/+sLvndG3HrDeM8LQbMks+sT8OL10u7pZ1xvjeIyqDvf0RRVfPDld3ybo3ZKifk3Bpt98Z7E936ztkvTxgqCdr1DAZ/GF/88HZBbhjZc5S9OM2lOz8IVK6UHu2TPqtJax7+7uWbMicpEdG9XeQyKxhcs3+epxd+SayZdJNU8yKt5wt2wZn6eI8zFlyyP5DT/6MZxYXTouMQtbplcUV0b7mSQH2G/tPozTqFvuLfSu2K8MWscIt12937FgPUK+7StYQXaj99Wd8zB7OO53YhnVmUfo2LmJlN/CwHViyeIcBnGa/q6udBRfqfvnNYbfT8Ti2tTDAbmTtR8e2FoQ1eyWsYXLCrmjCXSim9ybWPuMg6Ey0WPvOWJkLxWCPnwXrmc2Fh1qsB+5YGSxzoaLpm2BlXoVwod4CaxhyF+ptsCYvDHY8fROs3IU6exusYfIO/as3wRomH98Oa5h89sPa71hcUpMVYZ2zMn94x96a2qwhcxfPLH7IHR1WcJrn1lzw8RWPlGqxWvyQ4TPezNraZ//Xtp1F4zH7Xd8HOqhhiIEKs3XXmm4UpSPuxXEJCIRsE2+n8XwnZXO2q0+aqGF4wYTz6scpi7eHq+CPHAYoiTfBhzKifcLtYSYm8UeXlHnGX9Y/NiEtnl44nSEriyPCzX5D21kUySlURaSp0AaL1c9tmbJKYbvSmCnkmfZpO9thzl60OBJWgRQE3svR0bURa0+JUx4fjgGWxBrEI4wxdROwSqyMNuGJPDKrOt25IRbeYQvuEncWUnJ/chFhbd7PrlkxCT4ksQbxHI6a281YBbAnrlmxuIEY7Yp32GGzuKXubNc5KwZs+7TTPW73IykzV21j3bO2ng/oIVs8aN8XRMFfIWvrckJ3UmPwXU5JsF5YeZKYqARicKz1/P5XwcplT48IC471NQHWF2vrjC570Kv4p4qX6JkVYUdE5xgc67/nlb0nb6xcCRB3dk45aD2ytsANIsZH4jFkVU+qwfpkbUF4YUbc2fakslfhlRXLJolKIAjg3PpYBdYvKyqBXSIryvcqXoVnViyjoNYWxPAoP9LfWd+sKHv6RNgOeBXqaphXydp6juhKQMj3xrBijdcVERbl+xfNWMUrYG1dDg1kTwX57oU1zpRv7+0ayJ4xyPdPWnksH6zbk2ytOui0HjEn0N7SlO9eWHvR1TTzVxE9J8Dl+7vNsJ5Y5XrN1uUWRqqJsod7FZvluzfWdEUzVD3fHdGVAD9oXzbWinhjXWeBwJ34Puie0hMgXL4/vFJWuOtEdg984qdzUbVChoXP76n8oPXFOoaNmMHjuLPy87BqhawEQL7flR60vlh3sN55aw9Td8tvGqZciAkQXlewKJPv3liZxwOOMGzvt9Vxgb1T1HLfjfLdH6vweOR6Fl7lTC1vaJfLd4+s4tpeJCeAN4pRYeP7qKw23icrv7aME3B7B70IVFiQ778LYP2y8mvLOAGDL3QlwL2KgqSAZ9YAK4YylR7nF/QESBCDfP9HKd99s3In4Evm2oxge0Xy3Tsr77WJ5HMRu+LIsqdIvvtnFWePfC4mvyNyKZT4hXmv4hWwBqqwNnbFUYthY7V898J6lmUNQAocyrCn9AQIM5TviX9WOBYyrHj2yEdFF2TPPRWWJwUS36xwFVlWfvZcSI9jVAJU2cNr+uST2zkrxgzzrPyouMvDUmUPl+9ffbI+My1y96Bg5UeF/PRE2dNvmxy0fwfeWKcoqA9VrOKoeC/BQr/jAVkJZGr63LI+okvTVbMK3SMHP0H2HJOVACSz1/LdKesHXr+SFLHyp6d09iSoBMiwUk2fS9a2eFgUs6pqlwZ/DWRPgLEK4VU4ZJ0vM8MlrDzL+CSV8yQX9FIoSb67Y10OHypnFTJF9ty/GsHuL78Xzlhv1o+dUlbl2fNikABZy3cD1kr1/rPUcVLOyp6ek+zZ04UECLHuS8j3h3MT1gPlqCQlK47uWKm2DawB1z3S2YOyh5oTWHoVBnXhUaQalaRiheLoaP0V3My6/o6tdvadiezBWPSPW6P+HMWoJAUrHz60vvLNrFz3fJW+sx+NZA/U9P24MupFijVYH7NZJQ1WEXOTfgomn5CuFYzLdzLrb3hg7GxkzQ8f0mFdOrNpWFACW/R5J0MD1qNuflRSnhVugOswrMyqOHswAUKWPeiAklkTTA/flLLOFXF4PVbF2ZPc/jIZ2sOeeHRW/sDYL2HdVuVXNFkDcfZIw+MWBgkQJt/7lB/jrCJOUsi6r8yb6bOi7pFui3MjJRDPKT/VXvrx+B26VLPOMvdgZVaue6RACo4FpOYEaLZkZd+hxXJUUoYVC3lUBWUVWFXNkQ+uYVesDPZv2oVasUJJpbpQsAqriLlJZ49JAoRi7VSVsjRtcskKztJC3b9ZiVWcPen7IzFSAtWtLVVkp6ZNClZ0lgrahaqxijoI6ez55hRWZkWBuZNihUKeCzVpZVYRc0tX9ndR9lgcB1K+vFxpj9mX3or1EnzPwsKqyqxc96TXw+5zcgdIRcuygrs4X+/rz7LCquqs+bOHj5Guhy1rmXsYHo3t9Pf1Mp9ANmEVMbfUrcITIBYnHxabzHqxfhAvn8PY4qou16awct1zl3qwG9V9VbIUKw9XL+uB177ELCoo1yaxilqD1O/DBAix8b2SpX2J5djFrI94E+XzvXRWHsSXPjtQAuQEiL6lfETZIU77wxgSzu8skTXo3GdYk1u4o2rf2ZXvn500L+kcfM+ANVao6898cudPJrJH05aaDh79szSerF+DrEyxzGpW96VpQqu/ywUmMnEJ1ahrm6wiAVKrC8VjMOCqZVId2XjTzyg3wtwuK0+A1LmzGFtTBRJzcUQueJLaWIXsqXFnGevhS6R4Q08+PoxTQk6S2liFEqhvZ0UsPB/4V8T95WyOfVazDpDNxlkVCR1l7kqOsVlnFR0gdcEi61SBpc5JnqVdKPus/Owjl0JtsLYcPdzEKgWKa2A1ToCUWeXZclB+I0rm6mANk5NFXUqger1Ee5VlrIWVB2/JdV9lRqiD+RCJPvp6WBnsXWR1GK4B6+otMDWxciF9ZV8JkOrWnq8wwV4Xqxjqbx2WVo/IXajCekRjVh6ptjT515CVVw9/+lYfawKw5FIoq6zchfpTH6voALG6s/Qa+BF6l7WxijcY2NxZg3r/7XpZQ6PGd8usGIWqkdWwA8QuK9zGdbKKbM/rYM31XVlmtZwAed2sdhMgr5zVsAOkWaxhCLKH3PjeMFaeALEhe14/q2kHSLNYzXrBm8aaGHWANItV1H0ZOscNYeUdIIZKoCmsZo3vDWO1kABpDqvoAHkbrMYJkCaxmiqBRrGKEVjUDpBmsZqNwGoYK5M9v8gdII1jTQbfqUqgcaxM9lCVQANZybKnkazEDpBGsoYhqRSqoaykDpCGsvImjIpKoKmslARIY1kJHSDeWJOE8kLJHGwV2UNinXJ7NshdPaBdKDpN9Q1rNSvIHgorHxMeGeWal6b18oKCfT3F36CfACGwjiKLrBH9FZo4UWBSofG9OiuUX+4vbTYmsAZtYcE9HVa0iGEjsqbsqczK30KxeqM1BXVt8UT/PdwZW7avVnj1YWXWA7tFVgz2E2FTB9DjIlrEZrpKoDJrP+pbrE2B4Ycn1VGxRWxV4K376kMC64HFbSWxYtTpOFX1PNJLgDSQlZdTSwXeIy0l0DzWLrhL95mr2tFJgDSOFaP/Z7nLGmvInqaxYjHbSHFd8Mb3DfO+GsaKvVlz5YVBufpW6aU1jFXZIibscVMHSLNYU/30CuOvPiy+ugaxSs6S0qYHpbKH4jf5YeXtHarxhmu7vCpNgFRnjSyiwlhmPVbsUZoox1amrEwJwBTjaqwTg4F/qtU1RR13lrKv/lPAFr36MG6j21yJFQaJ9NsdK8ZfmKmFmuunLzQUnSuJvLIbjAx0lD9SqNWfGezxlhWLcq9mKbBuvp++2IDqOGswOyrqFdwXxTGYy6vImm16FZ3YVUU/fYltq9fqKftBy1lbz1vHB2YGSy/uFosXrTBxaqqUns2HuzkblTzWSuPDe4YGff6/bkO9d9tiMWKRs2TFdGLhdIOBdUWjkjJ2Xu4s2bB6WctGJcmbisXDZc6SBauZVfT5b2yrw7qXac2XUjtr4agkCTUq6qe3afWzFo1KSqHilNXNzpKpOWDlo5JK3huZn55bj7lgxcDJ1yLYSs6SkTlhXb0fV7Wrh5WcJRNzw6oalSRQlVPM6zFHrPjWIcUYXOzhdnUNrtbJj0oCc+AspcwZK3ehpNcV8vrK8nCLTXPHmhtHzkdcT92t75IVXajVrF5Mwx3U7iylzCkrlpuId5S4cpZS5pZ1/cryCpEla+aYFadNPoSqSY0O1na8Hp82OYDIknp4Vo3mnBVdqIU7Zyll7llxVFJRCLdW88CKLpQzZyllPlhbezN3zlLKvLB6sv9Z/5v2llj/BaTki49lRxvOAAAAAElFTkSuQmCC",
      info: {
        title: "jumble.nvim - Randomize your colorschemes!",
        summary: `Say goodbye to tedious manual theme changes! With this plugin, your theme will automatically update to a random theme at a specified time interval.

        - Choose Your interval: Set how often you want your theme to refresh (e.g., every day, every other week)
        - Random Themes: Set your theme randomly after the set time interval. Choose from a list of themes you provide or from all the themes installed`,
        link: "https://github.com/LinkUpGames/jumble.nvim",
        images: [
          "https://private-user-images.githubusercontent.com/71405160/432564955-418c4550-4caf-462a-b145-c50a251f5d02.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA2MzM2NzgsIm5iZiI6MTc1MDYzMzM3OCwicGF0aCI6Ii83MTQwNTE2MC80MzI1NjQ5NTUtNDE4YzQ1NTAtNGNhZi00NjJhLWIxNDUtYzUwYTI1MWY1ZDAyLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjIyVDIzMDI1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM1OGI1MGE0NGRhZWZjM2JmNmY1YWIyNDAxN2QzZTQyMDA0MTY2NmYzNzYxNjJlODk5ZGU4ODhjZjk0MmMyNjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.-n4jES5GFTimZY-ppKy5UrBKYy3K8aBWmGZh_41nJWk",
        ],
        widget: <div />,
      },
    },
  ];

  // STATES
  const [iconTouch, setIconTouch] = useState<string>("");

  return (
    <WindowBorder title="Projects" className="flex flex-col gap-2">
      {/* Header */}
      <ProjectHeader iconName={iconTouch} />

      {/* Icons */}
      <div className="w-full h-full flex flex-row flex-wrap gap-3 justify-center md:justify-normal flex-1">
        {projects.map((project, index) => (
          <Icon
            onHover={() => setIconTouch(project.name)}
            key={index}
            name={project.name}
            image={project.image}
            info={project.info}
          />
        ))}
      </div>
    </WindowBorder>
  );
};

export default Projects;

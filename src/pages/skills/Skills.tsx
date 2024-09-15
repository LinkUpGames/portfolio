import WindowBorder from "@/components/desktop/Window";

import SkillHeader from "./SkillHeader";
import SkillIcon from "./SkillIcon";

const Skills = () => {
  // SKILLS
  const skills = [
    {
      name: "C",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
      level: 0.85,
    },
    {
      name: "Java",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1a0WBC7gzH2m5vruS5y6ITiFyhgd4-2iPIw&s",
      level: 0.89,
    },
    {
      name: "Fortran",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fortran_logo.svg/255px-Fortran_logo.svg.png?20201010021443",
      level: 0.75,
    },
    {
      name: "React",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256",
      level: 0.95,
    },
    {
      name: "Node",
      image: "https://www.svgrepo.com/show/376337/node-js.svg",
      level: 0.92,
    },
    {
      name: "Godot",
      image:
        "https://godotengine.org/assets/press/logo_vertical_color_light.png",
      level: 0.78,
    },
    {
      name: "Game Maker",
      image:
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/gamemaker/gamemaker.png",
      level: 0.95,
    },
    {
      name: "Unity",
      image: "https://i.redd.it/tu3gt6ysfxq71.png",
      level: 0.64,
    },
    {
      name: "C#",
      image:
        "https://banner2.cleanpng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg",
      level: 0.85,
    },
    {
      name: "GraphQL",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png",
      level: 0.86,
    },
    {
      name: "Go Lang",
      image:
        "https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png",
      level: 0.85,
    },
    {
      name: "Rust",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPfVUnqyk_LaBCU9Vme5bo_c8xQTsmFIwRg&s",
      level: 0.58,
    },
    {
      name: "AWS",
      image:
        "data:image/png;base64,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",
      level: 0.79,
    },
    {
      name: "Python",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX/////zDszbJn/yzYtapf+ySb8////zTr812MdYI9ch6tdhar91lz9zSxvka/f5+392W7M2eD78cv99t4jZpVVgqMjZpP///z+yi91kqn91V381mTT3+gva5Yuapm6y9jv9Pf93X38++/13HX+z0aswc+Do711mbc7cJh+mrRhh6bI1d1Ke6EgYY6ZssR6n76mvNCOp73m7fP74Y385J/96Kz67L784Ib+6bVmiqX9+OP89db60k62ydj822389dj+2oNcWN3GAAAHGElEQVR4nO2ci1biOhRAW/qIBcrLSHNBQkHAF3JHEcXB0fn/r5qklRGFpinQtJ11NktHGGRlr5M0ac6JmgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsYDfHk1r57KxSOQv4+IdTvpmMz7Nu36GcX7cxNik1TWr2aKnXo5T2euwZ/05Nip32pMiSzTPHLNGSGOycNbNu6J74lw63izNk73Au/awbuw/NKxzrtsYsFTCMfXk/Hkbcz7rBSenjXhLD4ik240ffd3ChOqp/ZQaBcTiysld+1s1OwHUwCPHNra3Z/ankiMTXWTdbnuZd0OIZ+9FjXxNJRac4/fSGfg3Ji1xHpeUM25yIc4e3985ni9KPF2SDWJQF3CRYylTWfkx0KhnESZbNToBZYnMh/X/jFcluWqKZtTkR9aCT0svPGIYDU6ab1jNstzzjcNT1Pl/xr+QES3icXbMTcB8aOp/LsB+ya1R6n2G75amFXdL8u0apSy/haC3LhktTNj+aOw0v/rcSt4hrw2LMiGtDdr9Qm41nNwluo4pi+BkyirFpCoyKb5gUMMwJYFh8w8o/bzh1RPwLhnURD+1/wFAMGOYQ/3Z2fVOuSCK+0ObQ0B+XHafNc2eSiK+zgeG82gk4aQwen4Z2bBtS9ZtRvP/UEGV4QQwUPAyDWFZ3McxOsJ8gu5TE0NA3MCx9npGjLbvRe5ihriMyespC0K8lSy7tb8ji6D57ygVt2e2zYxiyMHaV99Ta8buowFDX3RPFUZyJ15f7YkYa6uRNqWI9HUFBDHXdelRpeMAtoNiQ7yY2dhsi912d4G1KISzhe03zOrsN2VBUt75J5ToaGI41bTjaLcj6aUuV4ENaIQwyM6cERRiiqirD8V1ahib79KUVZaiTn4oMZbOBicE8Q/o7Moa6u1AjaMvmyhLDs9xDFCmoo64aw4e0Qkhf2Kc/WZGCOhqpmfXP0zLkIbQbRnQMdVfNQGwmLFmTJRiFLUvUS8lKjWE7FUM69QXTfWjoqpkRm6ncVpQwz6cuBKOQ91JFhsINwX1x+pqn/SS6YBSqMzx+DHu0fcs+2XsV9dFCxxBf1VkEvQERCxY2hiae+Oxz4wWLaUgxrvFrjD0cuMIxmGdDGrEjzuQcZ3of1qScVmOuMnk15KdippXaTi6vZ7/qH3e1C0QEU31uDalzdzmu217sarJVdZGEYN4MTWf6S2bfwVtW2VKtgIbO2W3wdi5p70bzvPflm0tEi+3cGlLzR/hu7+dy/jxo7KT76loWm+RlBfNkiM+CWljvff7quoRFKUiWbeLyb0HPlOmeuTPE4WG0VoMQHiLugHT0FX0tJy+YH0N87bGh5z27McvMxOTFENf4/HA6chP0v3wZxqy86ZRfPltyM1w+DWNi2H5g08MTSUEwJ4Z3vN5+lYafQkPRPg2dajz3kIafrhM1huJTTMEBtHn0vvVBKIqhcEc4yHG23FT8WAzV7CYKd/WdPpsJ3+LvZfdD0Y6wMH3Y8zX7XbSrexCKdvVFh3z4sUp7bqRkaCjKzGgPAsNf7P+TrDQTQRRl1zZOxWwPQ57EFe9bH4ClKkMqqFTgp7kWKU0VrJOqK1WIKsenFZsNw9htzz1RV6mgafWITD59YYZvx75n+sBQVqjAiaj6ov/F5Tj3B7mnKg0jKveYoW2fpGOotuqLRWpn4RePoVZNo5cicqG6xNR/2RFFHkOtmkYIMygw1ez77b9aEozD6vFXNIg0Mqn13q5kD3rp8cehQebqq6AD/FkJbxtWj2yIrNFTdqcu/HH5zsGY0jCDho9vaFjoMcMTFwzP78+uazflkPt4Q0MeQiyrs8zWbxs7xhB1uycn3b+PjR+/P+12B4+tjE8F7SbGUL7JPDuVS8SGBn+L/fVr82kRiInhqZBQNHzklpgrjSXiNcdenxwwWxgdMMwFYAiG+SeRISJko9hE5W7aASS4x0ek+7h4bBjr3yiIofz9IQoP+HqrV1Qow4bsjjByV3zl4vGMahhFo1EIQ+n06EYaohX+DpkXwnARfTTrWww/7/zscG+HLDNstzzvkhlgo7ux+TIIDK3TQsTQk9xr+zLoBmGFW0YbTkl5lpsujNcNnw43JM/ZNToRK8kE4kbdwZCPXaQyuXQQ9olkN/07EO2gkxoKjzIfSEs2iB+90n4MJgtF9UBHIf5sSIj7+jTUhq2Gy6tP3UHWzU7Aeo0SB0LB3kXwZjTK28aokFbymiGkpt7pWPDqy2R+biZ/ZecQlolKoI3iCbKOOpKvySCjla0VZD2zwfDCklzcWBeFush8Yrc6VvxwJFanQPPgFqvfyCIkKnuGiOsav4t1Dd3C1laL58ZJp9rpVL/TaTwvV3nOTyQgr2kyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKxx8ZjrJGDmPECgAAAABJRU5ErkJggg==",
      level: 0.92,
    },
  ].sort((a, b) => b.level - a.level);

  return (
    <WindowBorder
      title="Skills"
      className="!p-0 h-full flex flex-col"
      windowClassName="h-full flex"
    >
      {/* Header */}
      <SkillHeader />

      {/* Content */}
      <div className="w-full p-4 flex flex-1">
        <div className="p-4 w-full rounded-lg border-2 border-dark flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-2 h-full flex-shrink-0 overflow-y-auto bg-dark-status">
          {skills.map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </div>
      </div>
    </WindowBorder>
  );
};

export default Skills;

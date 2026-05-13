// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Complete list of peer-reviewed publications, working papers and work in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-professional-passions",
          title: "professional passions",
          description: "I&#39;m passionate about local climate policies, data and public registries.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Please download the PDF for my full academic CV (last updated 03/2026).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-personal",
          title: "personal",
          description: "I share some personal information about me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "projects-regional-climate-policy",
          title: 'Regional climate policy',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/climatepolicy/";
            },},{id: "projects-plural-economics",
          title: 'Plural Economics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pluralecon/";
            },},{id: "projects-public-registries",
          title: 'Public registries',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/publicregistries/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

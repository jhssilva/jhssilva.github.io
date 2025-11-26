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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Academic publications and theses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects, from web development to data science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A selection of my open-source contributions and code repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A detailed overview of my professional experience and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-hello-world",
        
          title: "Hello, world! 👋",
        
        description: "A little bit about me and this portfolio.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hello-world/";
          
        },
      },{id: "projects-les-vitrines-de-dourdan",
          title: 'Les Vitrines de Dourdan',
          description: "Website for Dourdan shop windows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_les_vitrines/";
            },},{id: "projects-audishell",
          title: 'Audishell',
          description: "Hearing center website.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_audishell/";
            },},{id: "projects-medical-data-hub",
          title: 'Medical Data Hub',
          description: "Privacy-first platform enabling researchers to query and process sensitive medical data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_medical_data_hub/";
            },},{id: "projects-true-worth",
          title: 'True Worth',
          description: "LLM-powered platform for financial data analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_true_worth/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/hugo-silva-resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%68%73%73%69%6C%76%61%39%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jhssilva", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jhssilvaa", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
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

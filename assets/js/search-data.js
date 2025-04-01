// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-homepage",
    title: "Homepage",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Projects/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Team/";
          },
        },{id: "nav-opportunities",
          title: "Opportunities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Opportunities/index.html";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-medical-robotic-system-lab-is-active",
          title: 'Medical Robotic System lab is active!',
          description: "",
          section: "News",},{id: "news-we-are-looking-for-graduate-students",
          title: 'We are looking for graduate students',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-uhf-magnetic-actuation",
          title: 'UHF Magnetic Actuation',
          description: "explore novel magnetic medical robotic concepts at ultrahigh fields",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-mri-based-tracking",
          title: 'MRI-based Tracking',
          description: "develop MRI sequences and tracking algorithms for magnetic microrobots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-wireless-magnetic-tracking",
          title: 'Wireless Magnetic Tracking',
          description: "develops NMR Magnetic sensors for wireless tracking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
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

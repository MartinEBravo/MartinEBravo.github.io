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
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-first-post-of-the-blog",
      
        title: "First Post of the Blog!",
      
      description: "Welcome to the blog! This is the first post.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/first-post/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-kth-ai-student",
          title: 'KTH AI Student',
          description: "Dive into the world of AI with this hands-on, beginner-friendly course for students curious about Fullstack AI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aistudent/";
            },},{id: "projects-hybrid-ecologies-for-ai-and-society",
          title: 'Hybrid Ecologies for AI and Society',
          description: "A groundbreaking research initiative exploring the intersection of artificial intelligence, ethics, and society, in collaboration with the National Center for Artificial Intelligence (CENIA).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cenia/";
            },},{id: "projects-3rd-place-winner-of-the-chilean-air-force-hackathon",
          title: '3rd Place Winner of the Chilean Air Force Hackathon',
          description: "An innovative solution designed to address fire detection and monitoring challenges, securing 3rd place in the prestigious Dosafíos competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fach/";
            },},{id: "projects-heymomo-ai-assistant",
          title: 'HeyMomo AI Assistant',
          description: "HeyMomo is an AI-powered virtual assistant designed for kids, integrated with the SoyMomo Space 3.0 smartwatch, to make learning and communication fun and safe.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heymomo/";
            },},{id: "projects-movie-rating-predictor-service",
          title: 'Movie Rating Predictor Service',
          description: "This project is a serverless ML system that predicts IMDb ratings for movies using a dynamic dataset from Kaggle.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/movie-predictor/";
            },},{id: "projects-threads-reviews-text-mining",
          title: 'Threads Reviews Text Mining',
          description: "This project is a text mining analysis of reviews from the Threads platform, using different NLP techniques to extract insights.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/threads/";
            },},{id: "projects-interpreting-object-detection-using-b-text-cos",
          title: 'Interpreting Object Detection using $B\text{-}\cos$',
          description: "This project explores the application of the B-cos method for inherently interpretable deep learning models, extending its use to object detection tasks using YOLO.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/yolo-bcos/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%74%69%6E%31%36%62%72%61%76%6F%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MartinEBravo# your GitHub user name", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/martinbraav", "_blank");
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

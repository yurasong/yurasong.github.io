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
          description: "Publications by category in reverse chronological order. An asterisk (*) indicates co-first authorship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects, scientific collaborations, and community initiatives.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "If a full CV is required, please download it using the button at the top right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Workshops, invited lectures and training activities in bioinformatics and computational biology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-private-defence-passed-public-defence-will-be-on-15-april",
          title: 'Private defence passed! Public defence will be on 15 April.',
          description: "",
          section: "News",},{id: "news-phd-defence-successfully-completed",
          title: 'PhD Defence Successfully Completed',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-starting-post-doctoral-position-at-ulb",
          title: 'Starting post-doctoral position at ULB',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "projects-scientific-community-engagement-and-conference-service",
          title: 'Scientific community engagement and conference service',
          description: "Conference organisation, session chairing, and science outreach",
          section: "Projects",handler: () => {
              window.location.href = "/projects/archive_01_EKC.html";
            },},{id: "projects-korean-scientists-and-engineers-association-in-belgium",
          title: 'Korean Scientists and Engineers Association in Belgium',
          description: "Academic service, community leadership, and science outreach",
          section: "Projects",handler: () => {
              window.location.href = "/projects/archive_02_KOSEABE.html";
            },},{id: "projects-scientific-seminars-and-community-outreach",
          title: 'Scientific seminars and community outreach',
          description: "Science communication, academic event organisation and visual design for scientific communities in Belgium",
          section: "Projects",handler: () => {
              window.location.href = "/projects/design_01_poster_for_event.html";
            },},{id: "projects-conference-posters-and-scientific-presentations",
          title: 'Conference posters and scientific presentations',
          description: "Selected conference posters, scientific visualisation and presentation design in cancer biology, epithelial plasticity, and single-cell genomics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/design_02_poster_for_conference.html";
            },},{id: "projects-innate-immunity-controls-prostate-stem-cell-plasticity",
          title: 'Innate immunity controls prostate stem cell plasticity',
          description: "NF-κB-driven basal cell reprogramming during prostate tumor initiation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_01_NatCan_2025.html";
            },},{id: "projects-epithelial-plasticity-regeneration-and-tissue-dynamics",
          title: 'Epithelial plasticity, regeneration, and tissue dynamics',
          description: "Mechanical regulation of epithelial stem cell plasticity, tissue remodelling, and regenerative cell-state transitions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_02_Epithelial-plasticity.html";
            },},{id: "projects-cancer-plasticity-emt-and-tumour-progression",
          title: 'Cancer plasticity, EMT and tumour progression',
          description: "Single-cell and multi-omics dissection of EMT, tumour plasticity, metastatic progression, and therapy resistance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_03_EMT.html";
            },},{id: "projects-mammary-gland-lineage-identity-and-multi-omics-landscapes",
          title: 'Mammary gland lineage identity and multi-omics landscapes',
          description: "Transcriptional, chromatin, and cell–cell communication dynamics across mammary gland development",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_04_Heliyon.html";
            },},{id: "projects-translational-cancer-genomics-and-bioinformatics",
          title: 'Translational cancer genomics and bioinformatics',
          description: "Computational oncology, liquid biopsy analysis, NGS benchmarking, and epigenetic mechanisms of drug resistance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research_05_NCC-era.html";
            },},{id: "teachings-introductory-ngs-course",
          title: 'Introductory NGS Course',
          description: "Introductory course on NGS data analysis, including Galaxy, RNA-seq and ATAC-seq.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2020JUN_Introductory-NGS.html";
            },},{id: "teachings-lecture-series-iv",
          title: 'Lecture Series IV',
          description: "Invited lecture at the College of Medicine, Korea University.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2025OCT_Lecture_Series_IV.html";
            },},{id: "teachings-analysis-of-single-cell-rna-seq-data-with-python",
          title: 'Analysis of Single-Cell RNA-seq Data with Python',
          description: "Hands-on workshop series on single-cell RNA-seq analysis using Python and Scanpy.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/2026MAR_scRNAseq_basic.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_YuraSong_2026Apr.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%72%61.%73%6F%6E%67@%75%6C%62.%62%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XzRSQFYAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yurasong", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yurasong", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/yurasong.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yura__song", "_blank");
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

(() => {
'use strict';
// Public profile facts from the supplied CVs and Zoey’s role correction.
const profile = {
  "name": "Zoey (Ziyi) Sun",
  "role": "AI and Data Scientist",
  "employer": "Dragonfly Data Science",
  "location": "Wellington, New Zealand",
  "email": "ziyisun27@gmail.com",
  "education": [
    "PhD in Artificial Intelligence, Victoria University of Wellington, Oct 2021–Feb 2025.",
    "M.S. in Computer Application Technology, Shandong University of Finance and Economics, Sep 2018–Jun 2021.",
    "B.S. in Digital Media Technology, Shandong University of Finance and Economics, Sep 2014–Jun 2018."
  ],
  "experience": [
    "Dragonfly Data Science, AI and Data Scientist, Nov 2025–present. Contributes to the MBIE-funded New Zealand–NASA Catalyst: Strategic project “Integrating machine learning and remote sensing for dynamic forest mapping,” in partnership with NASA Earth Exchange (NEX). Predicts tree height and forest characteristics from aerial imagery with LiDAR training and validation. Researches tree crown segmentation and forest classification; builds reproducible training, inference and deployment workflows with Git, CI and cloud infrastructure. Collaborates with a multidisciplinary team. She is employed by Dragonfly, not NASA.",
    "ElementX, R&D Intern, Aug–Oct 2025. Contributed to AI chatbot backends, SQL data management and structured LLM response evaluation. Built n8n AI proposal and document workflows with human review before delivery. Stack: LLMs, SQL, Ruby, n8n.",
    "Victoria University of Wellington, Research Assistant, Mar–Aug 2025. Extended individual tree crown segmentation research with Manaaki Whenua – Landcare Research.",
    "Callaghan Innovation, Digital & AI Intern, Oct 2024–Mar 2025. Contributed to GovGPT and PaperBoi, conversational assistants for government information and scientific literature. Improved RAG workflows using Python, GitHub, Azure AI Studio and AWS.",
    "Victoria University of Wellington, PhD Researcher, Oct 2021–Feb 2025. Collaborated with Manaaki Whenua – Landcare Research, supervised by Mengjie Zhang and Bing Xue. Developed CNN and Transformer models, large aerial imagery pipelines and distributed multi-GPU training. The résumé reports 10% improved detection and 8% improved segmentation accuracy; baseline details are not supplied.",
    "Applied AI projects in China: automotive wheel hub weld seam positioning (May–Nov 2020) with FAW and China National Heavy Duty Truck Group; glass flaw detection (Feb–Aug 2021). Contributed datasets, YOLO models, client demonstrations and practical integration.",
    "Master’s research, Sep 2018–Jun 2021: single-image dehazing with semi-supervised learning, attention mechanisms and CycleGAN. SADnet combines channel, spatial and self-attention. ICycleGAN integrates iterative dehazing into CycleGAN to preserve texture and colour."
  ],
  "skills": [
    "Python",
    "SQL",
    "Java",
    "C/C++",
    "LaTeX",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "OpenCV",
    "CNNs",
    "Transformers",
    "U-Net",
    "YOLO",
    "Pandas",
    "NumPy",
    "SciPy",
    "aerial imagery",
    "LiDAR",
    "remote sensing",
    "RAG",
    "LLM evaluation",
    "n8n",
    "Git",
    "CI",
    "multi-GPU training",
    "Azure AI Studio",
    "AWS",
    "Linux",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "semantic retrieval",
    "image dehazing",
    "statistical analysis",
    "experimental evaluation",
    "Codex",
    "ChatGPT",
    "Claude Code",
    "Gemini"
  ],
  "interests": [
    "fishing",
    "hiking",
    "cycling",
    "swimming",
    "badminton",
    "cooking",
    "reading",
    "traveling"
  ],
  "languages": [
    "English (fluent)",
    "Chinese (native)"
  ],
  "limits": "Salary, current job availability, visa status, private client information and confidential project details are not provided. Do not infer these. Contact Zoey directly for opportunities."
};

// Complete list from Xpert-CV-ZH.pdf. Years reflect final publication details.
const publications = [
  {
    "year": "2026",
    "title": "YOLO-ITC: A New YOLO Method for Instance Segmentation of Individual Tree Crowns",
    "aliases": ["YOLO-ITC", "YOLO ITC"],
    "research": {
      "basis": "Publisher abstract, not a full-text review",
      "problem": "YOLO-ITC addresses detection and instance segmentation of small and medium tree crowns, including crowded stands.",
      "data": "It uses aerial imagery from Wellington, New Zealand, covering isolated trees and dense forests in rural landscapes.",
      "method": "The method adapts YOLOv7 with a detection design for smaller crowns, a densely connected backbone block that reuses features, and efficient attention for long-range dependencies.",
      "result": "The abstract reports better detection and mask accuracy than the evaluated baselines.",
      "limitation": "The abstract does not provide exact scores, improvement percentages, dataset size or training settings; these require the full paper."
    },
    "authors": [
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang",
      "Jan Schindler"
    ],
    "venue": "IEEE Transactions on Emerging Topics in Computational Intelligence",
    "details": "10(1), 51–65. Early access: 2025.",
    "url": "https://doi.org/10.1109/TETCI.2025.3543833"
  },
  {
    "year": "2026",
    "title": "YOLOv8-UT: A Unified Training Approach for Cross-Environment Tree Crown Instance Segmentation in Aerial Imagery",
    "authors": [
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang",
      "Jan Schindler"
    ],
    "venue": "PRICAI 2025: Trends in Artificial Intelligence",
    "details": "Lecture Notes in Computer Science, vol. 16455, pp. 298–314. Springer.",
    "url": "https://doi.org/10.1007/978-981-95-7084-3_19"
  },
  {
    "year": "2025",
    "title": "Feature Fusion to Improve YOLOv8 for Segmenting and Classifying Aerial Images of Tree Crowns",
    "authors": [
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang",
      "Jan Schindler"
    ],
    "venue": "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
    "details": "18, 14752–14765.",
    "url": "https://doi.org/10.1109/JSTARS.2025.3576780"
  },
  {
    "year": "2025",
    "title": "YOLOv8E: an efficient YOLOv8 method for instance segmentation of individual tree crowns in Wellington City, New Zealand",
    "authors": [
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang",
      "Jan Schindler"
    ],
    "venue": "Journal of the Royal Society of New Zealand",
    "details": "55(6), 1854–1879.",
    "url": "https://doi.org/10.1080/03036758.2024.2424802"
  },
  {
    "year": "2025",
    "title": "Efficient tree mapping through deep distance transform (DDT) learning",
    "authors": [
      "Jan Schindler",
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang"
    ],
    "venue": "ISPRS Open Journal of Photogrammetry and Remote Sensing",
    "details": "17, 100095.",
    "url": "https://doi.org/10.1016/j.ophoto.2025.100095"
  },
  {
    "year": "2023",
    "title": "An Improved Mask R-CNN for Instance Segmentation of Tree Crowns in Aerial Imagery",
    "authors": [
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang",
      "Jan Schindler"
    ],
    "venue": "38th International Conference on Image and Vision Computing New Zealand (IVCNZ)",
    "details": "pp. 1–6.",
    "url": "https://doi.org/10.1109/IVCNZ61134.2023.10343827"
  },
  {
    "year": "2022",
    "title": "SADnet: Semi-supervised Single Image Dehazing Method Based on an Attention Mechanism",
    "authors": [
      "Ziyi Sun",
      "Yunfeng Zhang",
      "Fangxun Bao",
      "Ping Wang",
      "Xunxiang Yao",
      "Caiming Zhang"
    ],
    "venue": "ACM Transactions on Multimedia Computing, Communications, and Applications",
    "details": "18(2), Article 58, pp. 1–23.",
    "url": "https://doi.org/10.1145/3478457"
  },
  {
    "year": "2021",
    "title": "ICycleGAN: Single image dehazing based on iterative dehazing model and CycleGAN",
    "authors": [
      "Ziyi Sun",
      "Yunfeng Zhang",
      "Fangxun Bao",
      "Kai Shao",
      "Xinxin Liu",
      "Caiming Zhang"
    ],
    "venue": "Computer Vision and Image Understanding",
    "details": "203, 103133.",
    "url": "https://doi.org/10.1016/j.cviu.2020.103133"
  }
];

const projects = {
  "forest": {
    "title": "Machine learning for dynamic forest mapping",
    "meta": "Dragonfly Data Science · Nov 2025–present",
    "description": "At Dragonfly Data Science, I contribute to an MBIE Catalyst project with NASA Earth Exchange (NEX), combining machine learning and remote sensing to map forest structure and monitor change across New Zealand.",
    "context": "LiDAR provides detailed measurements of forest structure, but coverage is incomplete. The project uses models trained on paired aerial imagery and LiDAR-derived canopy heights to predict synthetic canopy height models (synCHMs) in areas without LiDAR coverage.",
    "contributions": [
      "Develop and evaluate machine learning models for tree-height prediction from aerial imagery, using LiDAR for training and validation.",
      "Research tree crown segmentation and forest classification.",
      "Build reproducible data preparation, training, validation and inference workflows with Git, continuous integration and cloud infrastructure."
    ],
    "skills": [
      "Machine learning",
      "Remote sensing",
      "Aerial imagery",
      "LiDAR",
      "U-Net",
      "Git / CI",
      "Cloud infrastructure"
    ],
    "cardTitle": "Dynamic forest mapping",
    "category": "Current work",
    "summary": "Predicting canopy height from aerial imagery, with LiDAR for training and validation.",
    "approach": [
      "Prepare and align aerial imagery with LiDAR-derived canopy height models.",
      "Train and evaluate models that infer forest structure from imagery, with representative training data and validation.",
      "Combine structural mapping with satellite observations to support monitoring of forest growth and disturbance over time."
    ],
    "outcomeTitle": "The wider goal",
    "outcome": "The project aims to support a regularly updated national forest monitoring system for New Zealand, with applications in forest management, conservation and carbon assessment. My work focuses on developing and evaluating the machine learning methods that contribute to this goal.",
    "image": "assets/dragonfly-canopy.png",
    "imageAlt": "Aerial imagery beside a model-predicted synthetic canopy height map",
    "imageCaption": "Project illustration: aerial imagery and a model-predicted synthetic canopy height map (synCHM).",
    "imageWidth": 249,
    "imageHeight": 240,
    "imageClass": "canopy",
    "cardSkills": [
      "Machine learning",
      "Aerial imagery",
      "LiDAR"
    ]
  },
  "crowns": {
    "title": "Object detection and instance segmentation",
    "meta": "PhD research · 2021–2025",
    "description": "My PhD in Artificial Intelligence at Victoria University of Wellington focused on object detection and instance segmentation in aerial imagery. Individual tree crowns provided a challenging application: they overlap, vary in size, and can be difficult to distinguish from their surroundings.",
    "context": "Working with Manaaki Whenua – Landcare Research, and supervised by Mengjie Zhang and Bing Xue, I developed CNN- and Transformer-based approaches to identifying objects and delineating individual instances. This research continued during my research assistant role in 2025.",
    "contributions": [
      "Designed, trained, and optimised models for tree detection and instance segmentation.",
      "Built pipelines for large aerial imagery datasets and distributed multi-GPU training.",
      "Evaluated model performance with statistical analysis and published findings in journals and conferences."
    ],
    "skills": [
      "Python",
      "PyTorch",
      "YOLO",
      "Transformers",
      "Computer vision",
      "Instance segmentation"
    ],
    "image": "assets/tree-research.png",
    "link": "#research",
    "linkLabel": "Explore the publications",
    "cardTitle": "Object detection & segmentation",
    "category": "Doctoral research",
    "summary": "Teaching models to find individual objects and trace their boundaries in complex aerial images.",
    "approach": [
      "Investigate detection and instance segmentation using YOLO, Mask R-CNN and Transformer-based methods.",
      "Explore feature fusion and training strategies for varied imaging conditions and environments.",
      "Prepare large aerial imagery datasets, train on multiple GPUs, and evaluate the resulting models."
    ],
    "outcomeTitle": "Research outputs",
    "outcome": "The work includes improved Mask R-CNN, YOLOv8E, YOLO-ITC and feature fusion methods, with journal and conference publications. The full publication list includes authors, venues and links to the papers.",
    "imageAlt": "Original aerial image beside detected tree crowns with bounding boxes and red instance masks",
    "imageCaption": "Original research example: aerial imagery with object detections and individual instance masks.",
    "imageWidth": 1306,
    "imageHeight": 661,
    "imageClass": "research",
    "cardSkills": [
      "Computer vision",
      "YOLO",
      "Instance segmentation"
    ]
  },
  "rag": {
    "title": "GovGPT and PaperBoi: retrieval-augmented assistants",
    "meta": "Callaghan Innovation · 2024–2025",
    "description": "I contributed to GovGPT and PaperBoi, two conversational AI projects that make specialised information easier to explore. GovGPT helps New Zealanders navigate government services and policy information, while PaperBoi supports discovery and knowledge transfer from scientific literature.",
    "context": "As a Digital & AI Intern at Callaghan Innovation, I worked with an Agile team to improve the retrieval of relevant government and scientific information for conversational AI.",
    "contributions": [
      "Implemented and improved retrieval-augmented generation (RAG) workflows.",
      "Worked on retrieval relevance and the quality of government and scientific information returned to users.",
      "Contributed to cloud-based AI workflows using Azure AI Studio and AWS."
    ],
    "skills": [
      "Python",
      "LLMs",
      "RAG",
      "Azure AI Studio",
      "AWS",
      "GitHub"
    ],
    "cardTitle": "GovGPT & PaperBoi",
    "category": "Conversational AI",
    "summary": "Making government information and scientific literature easier to explore through conversation.",
    "image": "assets/retrieval-workflow.svg",
    "imageAlt": "Workflow diagram showing government information and scientific literature passing through retrieval into a source-grounded answer",
    "imageCaption": "Concept diagram of source-grounded conversation across government information and scientific literature; not a product screenshot.",
    "imageWidth": 960,
    "imageHeight": 512,
    "imageClass": "workflow",
    "cardSkills": [
      "Python",
      "RAG",
      "Azure AI Studio",
      "AWS"
    ],
    "outcomeTitle": "Focus",
    "outcome": "Improving retrieval relevance and connecting useful source material to conversational AI responses."
  },
  "agents": {
    "title": "LLM evaluation and document automation",
    "meta": "ElementX · 2025",
    "description": "During my R&D internship at ElementX, I worked on agentic AI across conversational interfaces, model evaluation, and automated document workflows.",
    "context": "My work combined backend development with practical evaluation and automation, including AI-assisted proposal generation with human review.",
    "contributions": [
      "Contributed to chatbot backend development and SQL application data management.",
      "Evaluated LLM response accuracy through structured testing and evaluation research.",
      "Built end-to-end n8n workflows to generate proposal drafts, route them for review, and deliver approved documents."
    ],
    "skills": [
      "LLMs",
      "SQL",
      "Ruby",
      "n8n",
      "LLM evaluation",
      "Workflow automation"
    ],
    "cardTitle": "LLM evaluation & document workflows",
    "category": "AI workflows",
    "summary": "Evaluating chatbot responses and connecting AI-generated drafts with human review and delivery.",
    "image": "assets/document-workflow.svg",
    "imageAlt": "Workflow diagram showing structured response evaluation alongside drafts, human review and document delivery",
    "imageCaption": "Concept diagram of response evaluation and human-reviewed document automation; not a product screenshot.",
    "imageWidth": 960,
    "imageHeight": 512,
    "imageClass": "workflow",
    "cardSkills": [
      "LLMs",
      "SQL",
      "Ruby",
      "n8n"
    ],
    "outcomeTitle": "Focus",
    "outcome": "Bringing structured evaluation and human review into practical AI-assisted workflows."
  },
  "inspection": {
    "title": "Visual inspection and positioning",
    "cardTitle": "Visual inspection & positioning",
    "meta": "Industrial applications · 2020–2021",
    "category": "Applied computer vision",
    "summary": "Finding weld seams and glass defects with computer vision in industrial settings.",
    "description": "I worked on two industrial computer vision projects: positioning wheel-hub weld seams and identifying defects in glass. My contributions covered data collection and annotation, detection model development, and practical integration.",
    "context": "The wheel-hub project ran from May to November 2020 with FAW and China National Heavy Duty Truck Group. The glass-defect project followed from February to August 2021.",
    "contributions": [
      "Contributed to collecting, preparing and annotating image datasets for the detection tasks.",
      "Developed YOLO-based detection models for weld-seam positioning and glass flaws.",
      "Supported client demonstrations and practical integration of computer vision into industrial workflows."
    ],
    "skills": [
      "Computer vision",
      "YOLO",
      "Dataset development",
      "Object detection"
    ],
    "cardSkills": [
      "Computer vision",
      "YOLO",
      "Object detection"
    ],
    "image": "assets/weld-inspection.png",
    "imageAlt": "Wheel-hub manufacturing images and a detected weld-seam region",
    "imageCaption": "Original project images: industrial wheel-hub inspection and weld-seam positioning.",
    "imageWidth": 2062,
    "imageHeight": 720,
    "imageClass": "industrial",
    "gallery": [
      {
        "image": "assets/glass-detection.png",
        "alt": "Glass samples with an inset showing a detected defect",
        "caption": "Original project images: glass-defect detection."
      }
    ]
  },
  "dehazing": {
    "title": "Single-image dehazing",
    "cardTitle": "Single-image dehazing",
    "meta": "Master’s research · 2018–2021",
    "category": "Image restoration",
    "summary": "Exploring how deep learning can recover colour, texture and detail in hazy images.",
    "description": "My master’s research at Shandong University of Finance and Economics explored single-image dehazing: recovering a clearer image from one degraded by haze. The research combined semi-supervised learning, attention mechanisms and image-to-image translation.",
    "context": "The challenge is to improve visibility while preserving realistic colours and fine image details. This work led to the SADnet and ICycleGAN publications.",
    "contributions": [
      "Developed SADnet, a semi-supervised dehazing method combining channel, spatial and self-attention.",
      "Developed ICycleGAN, integrating iterative dehazing with CycleGAN to preserve texture and colour.",
      "Conducted image restoration experiments and documented the methods in peer-reviewed publications."
    ],
    "skills": [
      "Deep learning",
      "Semi-supervised learning",
      "Attention",
      "CycleGAN",
      "Image restoration"
    ],
    "cardSkills": [
      "Deep learning",
      "Attention",
      "CycleGAN"
    ],
    "image": "assets/dehazing-example.webp",
    "imageAlt": "Illustrative landscape comparison: a hazy mountain scene on the left and a clear mountain lake on the right",
    "imageCaption": "Dehazing illustration selected for this portfolio; not an experimental comparison from SADnet or ICycleGAN.",
    "imageWidth": 960,
    "imageHeight": 640,
    "imageClass": "dehazing",
    "links": [
      {
        "label": "Read SADnet",
        "url": "https://doi.org/10.1145/3478457"
      },
      {
        "label": "Read ICycleGAN",
        "url": "https://doi.org/10.1016/j.cviu.2020.103133"
      }
    ]
  }
};

// A finite English-language FAQ; no generative model is simulated.
const topics = [
  {
    "words": ["projects", "portfolio projects", "selected work", "case studies"],
    "answer": "Zoey’s selected projects cover six areas: dynamic forest mapping at Dragonfly; PhD research in object detection and instance segmentation; GovGPT and PaperBoi at Callaghan Innovation; LLM evaluation and document workflows at ElementX; industrial visual inspection; and single-image dehazing. The project gallery includes background, contributions, methods and images for each.",
    "source": "#work"
  },
  {
    "words": ["dehazing", "haze", "image restoration"],
    "answer": "Zoey’s master’s research explored single-image dehazing with semi-supervised learning, attention mechanisms and CycleGAN. Her publications include SADnet, which combines channel, spatial and self-attention, and ICycleGAN, which integrates iterative dehazing with CycleGAN. The dehazing image in the portfolio illustrates the topic; it is not an experimental comparison from these papers.",
    "source": "#work"
  },
  {
    "words": [
      "dragonfly",
      "current",
      "currently",
      "working on",
      "work on",
      "nasa",
      "nex",
      "lidar"
    ],
    "answer": "Zoey is an AI and Data Scientist at Dragonfly Data Science in Wellington (November 2025–present). She develops and evaluates machine learning models using aerial imagery and LiDAR, and builds reproducible training, validation and inference workflows. Her work includes a New Zealand–NASA research partnership through Dragonfly.",
    "source": "#experience"
  },
  {
    "words": [
      "education",
      "degree",
      "university",
      "studied",
      "study",
      "master",
      "bachelor"
    ],
    "answer": "Zoey holds a PhD in Artificial Intelligence from Victoria University of Wellington (2021–2025), an M.S. in Computer Application Technology (2018–2021), and a B.S. in Digital Media Technology (2014–2018), both from Shandong University of Finance and Economics.",
    "source": "#education"
  },
  {
    "words": [
      "research",
      "phd",
      "segmentation",
      "computer vision",
      "detection"
    ],
    "answer": "Zoey’s research covers image dehazing, object detection and instance segmentation. Her PhD at Victoria University of Wellington developed CNN- and Transformer-based methods for aerial imagery, with Manaaki Whenua – Landcare Research. Her master’s research explored attention mechanisms and CycleGAN for image dehazing.",
    "source": "#research"
  },
  {
    "words": [
      "generative",
      "llm",
      "rag",
      "chatbot",
      "govgpt",
      "paperboi",
      "callaghan",
      "ai experience"
    ],
    "answer": "At Callaghan Innovation (October 2024–March 2025), Zoey contributed to GovGPT and PaperBoi, improving RAG for government information and scientific literature. At ElementX (August–October 2025), she worked on chatbot backends, LLM response evaluation and n8n document automation. Her experience includes Python, SQL, Azure AI Studio and AWS.",
    "source": "#work"
  },
  {
    "words": [
      "elementx",
      "n8n",
      "automation",
      "agentic",
      "proposal"
    ],
    "answer": "At ElementX, Zoey built n8n workflows for AI-assisted proposal and document generation, human review and delivery. She also contributed to chatbot backend development, SQL data management and structured LLM response evaluation.",
    "source": "#experience"
  },
  {
    "words": [
      "skills",
      "tools",
      "stack",
      "python",
      "pytorch",
      "tensorflow",
      "technolog",
      "programming"
    ],
    "answer": "Zoey’s technical skills include Python, SQL, Pandas, NumPy, PyTorch, TensorFlow, scikit-learn and OpenCV. She works with CNNs, Transformers, YOLO, RAG, semantic retrieval and LLM evaluation. Her engineering experience includes Git, continuous integration, multi-GPU training, Azure AI Studio, AWS, Linux and n8n.",
    "source": "#skills"
  },
  {
    "words": [
      "publication",
      "published",
      "paper",
      "journal",
      "yolov8",
      "yolo-itc",
      "icycle",
      "sadnet",
      "ddt"
    ],
    "answer": "Zoey publishes as Ziyi Sun. This portfolio lists eight publications: YOLO-ITC and YOLOv8-UT (2026); YOLOv8 feature fusion, YOLOv8E and DDT learning (2025); improved Mask R-CNN (2023); SADnet (2022); and ICycleGAN (2021). Each entry includes its authors, publication details and a publisher link.",
    "source": "#research"
  },
  {
    "words": [
      "experience",
      "career",
      "background",
      "journey",
      "worked"
    ],
    "answer": "Zoey is an AI and Data Scientist at Dragonfly. Her experience includes an R&D internship at ElementX, research at Victoria University of Wellington, and a Digital & AI internship at Callaghan Innovation. Earlier projects involved industrial computer vision for weld-seam positioning and glass-defect detection.",
    "source": "#experience"
  },
  {
    "words": [
      "contact",
      "email",
      "connect",
      "collaborat",
      "hire",
      "opportunit",
      "available",
      "linkedin"
    ],
    "answer": "You can contact Zoey at ziyisun27@gmail.com or through LinkedIn. For collaboration, opportunities or availability, please ask her directly; those details are not included in her public profile.",
    "source": "#contact"
  },
  {
    "words": [
      "hobbies",
      "hobby",
      "outside",
      "free time",
      "interests",
      "hiking",
      "cooking"
    ],
    "answer": "Outside work, Zoey enjoys fishing, hiking, cycling, swimming, badminton, cooking, reading and traveling.",
    "source": "#about"
  },
  {
    "words": [
      "where",
      "based",
      "location",
      "wellington",
      "new zealand"
    ],
    "answer": "Zoey is based in Wellington, New Zealand, and works at Dragonfly Data Science.",
    "source": "#about"
  },
  {
    "words": [
      "language",
      "english",
      "mandarin"
    ],
    "answer": "Zoey’s languages are English and Chinese. Her professional experience includes English-language research publications, conference presentations and multidisciplinary collaboration.",
    "source": "#skills"
  }
];

const publicationAliases = [[], ['YOLOv8-UT','YOLOv8 UT'], ['YOLOv8 feature fusion','feature fusion'], ['YOLOv8E'], ['DDT','deep distance transform'], ['Mask R-CNN','Mask RCNN'], ['SADnet'], ['ICycleGAN']];
function normalizedTitle(text) { return String(text).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }

// Match named papers before broad FAQ keywords such as "paper" or "research".
function findPublications(question, history = []) {
  const match = text => {
    const q = ` ${normalizedTitle(text)} `;
    return publications.filter((paper,index) => [paper.title,paper.url,...(paper.aliases || []),...(publicationAliases[index] || [])].some(alias => q.includes(` ${normalizedTitle(alias)} `)));
  };
  const direct = match(question);
  if (direct.length) return direct;
  // Carry a named paper into a follow-up, but never into unrelated work questions.
  if (/\b(?:it|its|this paper|that paper|the paper|this study|that study)\b|^(?:and\s+)?(?:what|which|how)\b.*\b(?:dataset|method|methodology|results|limitations|baseline|accuracy|contribution)\b/i.test(question)) {
    for (const message of [...history].reverse()) {
      if (message.role !== 'user') continue;
      const previous = match(message.content);
      if (previous.length) return previous;
    }
  }
  return [];
}

function answerLocally(question, history = []) {
  const q = String(question).toLowerCase().trim();
  const unknown = () => ({mode:'local', answer:'That detail isn’t in Zoey’s public profile, so I can’t confirm it. Please ask about her experience, research or skills, or contact Zoey directly.', source:'#contact'});
  if (/[\u3400-\u9fff]/u.test(q) || /\bsalary\b|\bvisa\b|\bage\b|birthday|married|home address|phone|private|secret|ignore.*instructions/iu.test(q)) return unknown();
  if (/^(hi|hello|hey)[!.\s]*$/iu.test(q)) return {mode:'local', answer:'Hello. I can answer questions about Zoey’s professional experience, technical skills and publications. What would you like to know?', source:'#about'};
  const papers = findPublications(question,history);
  if (papers.length) {
    const answers = papers.map(paper => {
      const heading = `${paper.title} (${paper.year}).`;
      if (/\bauthors?\b|who.*(?:wrote|written)/i.test(q)) return `${heading}\n\nAuthors: ${paper.authors.join(', ')}.`;
      if (!paper.research) return `${heading}\n\nThis portfolio has the citation, but no verified research summary for this paper yet. Please read the publisher page for its methods and findings.`;
      const note = paper.research;
      const request = normalizedTitle(question).replace(normalizedTitle(paper.title), '');
      const wantsSummary = /summary|summari[sz]e|overview|tell me about/i.test(request);
      let body = [note.problem,note.data,note.method,note.result].join(' ');
      if (!wantsSummary && /\b(?:map|precision|recall|f1|exact|percent|percentage|score|numbers?|metrics?|training settings|dataset size)\b|how much|how many/i.test(request)) body = note.limitation;
      else if (!wantsSummary && /\b(?:dataset|data set|imagery|data)\b/i.test(request)) body = note.data;
      else if (!wantsSummary && /\b(?:method|methodology|architecture|novelty|contribution)\b/i.test(request)) body = note.method;
      else if (!wantsSummary && /\b(?:results?|findings?)\b/i.test(request)) body = `${note.result} ${note.limitation}`;
      else if (!wantsSummary && /\blimitations?\b/i.test(request)) body = 'The available abstract is not enough to assess the study’s limitations. Please consult the full paper.';
      return `${heading}\n\n${body}\n\nBased on the publisher abstract.`;
    });
    return {mode:'local',answer:answers.join('\n\n'),source:papers.length === 1 ? papers[0].url : '#research'};
  }
  if (/\b(?:summary|summari[sz]e|explain|findings|methodology)\b.*\b(?:paper|publication|study)\b|\b(?:paper|publication|study)\b.*\b(?:summary|findings|methodology)\b/i.test(q)) {
    return {mode:'local',answer:'Which paper would you like to explore? Please include its title or DOI so I can find the relevant publication.',source:'#research'};
  }
  const matches = topics.map(topic => ({...topic, score:topic.words.reduce((score, word) => score + (q.includes(word) ? (word.length > 5 ? 2 : 1) : 0), 0)})).filter(topic=>topic.score>0).sort((a,b)=>b.score-a.score);
  if (!matches.length) return unknown();
  return {mode:'local', answer:matches[0].answer, source:matches[0].source};
}

const allowedSources = ['#about','#experience','#skills','#education','#work','#research','#contact',...publications.map(paper=>paper.url)];

function resolveChatApiBase(configuredBase, pageHref) {
  const page = new URL(pageHref);
  if (page.protocol === 'file:') return '';
  const isLocal = url => ['localhost','127.0.0.1','[::1]'].includes(url.hostname);
  if (!configuredBase?.trim()) return isLocal(page) ? page.origin : '';
  try {
    const base = new URL(configuredBase.trim());
    if (base.username || base.password || base.search || base.hash || base.pathname !== '/') return '';
    if (base.protocol !== 'https:' && !(page.protocol === 'http:' && isLocal(page) && base.protocol === 'http:' && isLocal(base))) return '';
    return base.origin;
  } catch { return ''; }
}

function createChatClient({apiBase='', pageHref, fetchImpl=fetch} = {}) {
  const base = resolveChatApiBase(apiBase,pageHref);
  return {
    enabled: Boolean(base),
    // Allow time for a free backend to wake up before the model's own timeout.
    timeoutMs: base && new URL(base).origin !== new URL(pageHref).origin ? 90000 : 25000,
    async ask(messages, signal) {
      if (!base) throw new Error('AI backend is not configured.');
      const response = await fetchImpl(`${base}/api/chat`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        credentials:'omit', body:JSON.stringify({messages}), signal
      });
      if (!response.ok) {
        const error = new Error('AI assistant unavailable.');
        error.reason = response.status === 429 ? 'rate_limited' : 'provider_unavailable';
        throw error;
      }
      const result = await response.json();
      if (!['ai','local'].includes(result?.mode) || typeof result.answer !== 'string' || !result.answer.trim() || result.answer.length > 12000) throw new Error('Invalid response.');
      return result;
    }
  };
}


const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Keep every citation in the HTML; enhance the list with a compact initial view.
const publicationItems = $$('#publications .publication');
const publicationToggle = $('#publications-toggle');
const publicationPreviewCount = 3;
let publicationsExpanded = false;

function updatePublications() {
  publicationItems.forEach((item, index) => {
    item.hidden = !publicationsExpanded && index >= publicationPreviewCount;
  });
  publicationToggle.setAttribute('aria-expanded', String(publicationsExpanded));
  $('#publications-toggle-label').textContent = publicationsExpanded ? 'Show fewer publications' : 'Show all publications';
  const visibleCount = publicationsExpanded ? publicationItems.length : Math.min(publicationPreviewCount, publicationItems.length);
  $('#publication-status').textContent = `Showing ${visibleCount} of ${publicationItems.length}`;
}
if (publicationItems.length > publicationPreviewCount) {
  updatePublications();
  $('#publication-actions').hidden = false;
  publicationToggle.addEventListener('click', () => {
    publicationsExpanded = !publicationsExpanded;
    updatePublications();
    // Keep the control in view when the expanded list above it disappears.
    if (!publicationsExpanded) publicationToggle.scrollIntoView({block: 'nearest', behavior: 'instant'});
  });
}

// Native horizontal scrolling supports touch, trackpads and keyboard navigation.
const projectTrack = $('#project-track');
const projectCards = $$('.project-track .project');
const previousProject = $('#projects-previous');
const nextProject = $('#projects-next');
const projectDialog = $('#project-dialog');
let projectOpener, projectScrollTimer;

function projectOffset(index) {
  return projectCards[index].offsetLeft - projectCards[0].offsetLeft;
}
function visibleProjectIndex() {
  const end = Math.max(0, projectTrack.scrollWidth - projectTrack.clientWidth);
  if (end > 2 && projectTrack.scrollLeft >= end - 2) return projectCards.length - 1;
  return projectCards.reduce((closest, card, index) =>
    Math.abs(projectOffset(index) - projectTrack.scrollLeft) < Math.abs(projectOffset(closest) - projectTrack.scrollLeft) ? index : closest, 0);
}
function updateProjectControls() {
  const index = visibleProjectIndex();
  previousProject.disabled = projectTrack.scrollLeft <= 2;
  nextProject.disabled = projectTrack.scrollLeft >= projectTrack.scrollWidth - projectTrack.clientWidth - 2;
  $('#project-count').textContent = `${String(index + 1).padStart(2, '0')} / ${String(projectCards.length).padStart(2, '0')}`;
  $('#project-progress').style.width = `${(index + 1) / projectCards.length * 100}%`;
}
function scrollToProject(index) {
  const bounded = Math.max(0, Math.min(projectCards.length - 1, index));
  projectTrack.scrollTo({left: projectOffset(bounded), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
}
previousProject.addEventListener('click', () => scrollToProject(visibleProjectIndex() - 1));
nextProject.addEventListener('click', () => scrollToProject(visibleProjectIndex() + 1));
projectTrack.addEventListener('scroll', () => {
  clearTimeout(projectScrollTimer);
  projectScrollTimer = setTimeout(updateProjectControls, 100);
}, {passive: true});
projectTrack.addEventListener('keydown', event => {
  if (event.target !== projectTrack) return;
  const index = visibleProjectIndex();
  const destinations = {ArrowLeft:index - 1, ArrowRight:index + 1, Home:0, End:projectCards.length - 1};
  if (Object.hasOwn(destinations, event.key)) {
    event.preventDefault();
    scrollToProject(destinations[event.key]);
  }
});
window.addEventListener('resize', updateProjectControls);
$('.project-controls').hidden = false;
updateProjectControls();

function projectFigure(src, alt, caption, type = '') {
  const figure = element('figure', `project-detail-image ${type ? `project-detail-image--${type}` : ''}`);
  const picture = element('img');
  picture.src = src;
  picture.alt = alt;
  figure.append(picture, element('figcaption', '', caption));
  return figure;
}
function projectList(title, items) {
  const section = element('section', 'project-detail-section');
  section.append(element('h3', '', title));
  const list = element('ul');
  items.forEach(item => list.append(element('li', '', item)));
  section.append(list);
  return section;
}
function openProject(id, opener) {
  const project = projects[id];
  if (!project) return;
  const detail = $('#project-detail');
  detail.replaceChildren();
  const intro = element('div', 'project-detail-intro');
  const title = element('h2', '', project.title);
  title.id = 'project-dialog-title';
  title.tabIndex = -1;
  const lead = element('p', 'project-detail-lead', project.description);
  intro.append(element('p', 'eyebrow', project.category), title, element('p', 'project-detail-meta', project.meta));
  if (!project.gallery?.length) intro.append(lead);
  detail.append(intro);
  if (project.gallery?.length) {
    const gallery = element('div', 'project-detail-gallery');
    gallery.append(projectFigure(project.image, project.imageAlt, project.imageCaption, project.imageClass));
    project.gallery.forEach(item => gallery.append(projectFigure(item.image, item.alt, item.caption)));
    detail.append(gallery);
  } else {
    detail.append(projectFigure(project.image, project.imageAlt, project.imageCaption, project.imageClass));
  }
  const body = element('div', 'project-detail-body');
  if (project.gallery?.length) body.append(lead);
  const context = element('section', 'project-detail-section');
  context.append(element('h3', '', 'Project context'), element('p', '', project.context));
  body.append(context);
  if (project.approach?.length) body.append(projectList('The approach', project.approach));
  body.append(projectList('My contribution', project.contributions));
  if (project.outcome) {
    const outcome = element('section', 'project-detail-section');
    outcome.append(element('h3', '', project.outcomeTitle || 'Focus'), element('p', '', project.outcome));
    body.append(outcome);
  }
  const tags = element('div', 'project-detail-tags');
  tags.setAttribute('aria-label', 'Methods and tools');
  project.skills.forEach(skill => tags.append(element('span', 'skill-chip', skill)));
  body.append(tags);
  const links = [...(project.links || []), ...(project.link ? [{url:project.link, label:project.linkLabel}] : [])];
  if (links.length) {
    const nav = element('div', 'project-detail-links');
    links.forEach(item => {
      const link = element('a', 'quiet-link', item.label);
      link.href = item.url;
      if (item.url.startsWith('#')) link.addEventListener('click', () => projectDialog.close());
      else { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      nav.append(link);
    });
    body.append(nav);
  }
  if (project.sourceNote) body.append(element('p', 'project-source-note', project.sourceNote));
  detail.append(body);
  projectOpener = opener;
  document.body.classList.add('project-dialog-open');
  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  title.focus({preventScroll: true});
}
$$('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
$('#project-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
  if (event.target !== projectDialog) return;
  const bounds = projectDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) projectDialog.close();
});
projectDialog.addEventListener('close', () => {
  document.body.classList.remove('project-dialog-open');
  projectOpener?.focus({preventScroll: true});
});

const input = $('#chat-input');
const messageLog = $('#chat-messages');
const chatClient = createChatClient({apiBase:window.ZOEY_CONFIG?.chatApiBase, pageHref:location.href});
let aiEnabled = chatClient.enabled, busy = false, controller, generation = 0;
let conversation = [];

function showConversation(visible) {
  messageLog.hidden = !visible;
  $('#chat-reset').hidden = !visible;
  $('#chat-send').setAttribute('aria-expanded',String(visible));
}
showConversation(false);

function showMode(ai, fallback = false, reason = '') {
  $('#chat-mode').textContent = ai ? 'AI assistant' : 'Profile Q&A';
  $('#chat-disclosure').textContent = ai
    ? 'Messages are sent to Groq to answer from Zoey’s public profile. Answers may be imperfect.'
    : fallback ? (reason === 'rate_limited' ? 'The AI assistant has reached its usage limit. Showing a prepared profile answer; please try again later.' : 'The AI assistant is unavailable. Showing a prepared profile answer.') : 'Prepared answers from Zoey’s profile and publications.';
}

// Try the configured backend on each question: a cold start or transient failure
// must not permanently disable AI for this visit. No messages are stored locally.
showMode(aiEnabled);

function addMessage(role, text, source, waiting = false, mode = '') {
  const message = element('div',`message ${role}${waiting ? ' waiting' : ''}`);
  if (role === 'assistant') {
    const badge = element('span','assistant-icon');
    badge.setAttribute('role','img');
    badge.setAttribute('aria-label',waiting ? 'Assistant is thinking' : 'Portfolio assistant');
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    for (const [name,value] of Object.entries({viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':'1.6','stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true',focusable:'false'})) svg.setAttribute(name,value);
    const use = document.createElementNS('http://www.w3.org/2000/svg','use');
    use.setAttribute('href','#icon-bot');
    svg.append(use);
    badge.append(svg);
    message.append(badge);
  }
  if (mode === 'local') message.append(element('span','message-kind','Saved profile answer'));
  message.append(element('p','',text));
  if (source && allowedSources.includes(source)) {
    const link = element('a','message-source',source.startsWith('https:') ? 'Read the publication' : 'Explore the profile');
    link.href = source;
    if (source.startsWith('https:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    message.append(link);
  }
  messageLog.append(message);
  messageLog.scrollTop = messageLog.scrollHeight;
  return message;
}

function setBusy(value) {
  busy = value;
  $('#chat-send').disabled = value;
  input.readOnly = value;
  $$('#suggested-questions button').forEach(button=>button.disabled=value);
  $('#chat-form').setAttribute('aria-busy',String(value));
}

async function submitQuestion(question) {
  const text = question.trim().slice(0,1200);
  if (!text || busy) return;
  const requestGeneration = generation;
  input.value = '';
  input.style.height = '';
  showConversation(true);
  addMessage('user',text);
  conversation.push({role:'user',content:text});
  conversation = conversation.slice(-9);
  setBusy(true);
  const waiting = addMessage('assistant', 'Looking up profile information…', null, true);
  const requestController = new AbortController();
  controller = requestController;
  const timer = setTimeout(()=>requestController.abort(),chatClient.timeoutMs);
  const wakeTimer = aiEnabled ? setTimeout(()=>{
    if (requestGeneration === generation) waiting.querySelector('p').textContent = 'The assistant is taking a little longer to connect. Thank you for waiting…';
  },8000) : null;
  let result;
  try {
    if (aiEnabled) {
      result = await chatClient.ask(conversation,requestController.signal);
      if (requestGeneration !== generation) return;
      showMode(result.mode === 'ai',result.mode !== 'ai',result.reason);
    } else {
      result = answerLocally(text,conversation);
      showMode(false);
    }
  } catch (error) {
    if (requestGeneration !== generation) return;
    result = answerLocally(text,conversation);
    showMode(false,true,error.reason);
  } finally {
    clearTimeout(timer);
    clearTimeout(wakeTimer);
  }
  if (requestGeneration !== generation) return;
  waiting.remove();
  // Older backends may return an outdated prepared answer; use the current
  // bundled knowledge for every local fallback and keep its mode explicit.
  if (result.mode === 'local') result = {...result,...answerLocally(text,conversation)};
  addMessage('assistant', result.answer, result.source,false,result.mode);
  conversation.push({role:'assistant',content:result.answer.slice(0,1200)});
  setBusy(false);
  input.focus({preventScroll:true});
}

$('#chat-form').addEventListener('submit',event=>{event.preventDefault();submitQuestion(input.value);});
input.addEventListener('keydown',event=>{
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault();submitQuestion(input.value); }
});
input.addEventListener('input',()=>{input.style.height='auto';input.style.height=`${Math.min(input.scrollHeight,110)}px`;});
$$('[data-question]').forEach(button=>button.addEventListener('click',()=>submitQuestion(button.dataset.question)));
$('#chat-reset').addEventListener('click',()=>{
  generation++;
  controller?.abort();
  conversation=[];
  messageLog.replaceChildren();
  showConversation(false);
  input.value=''; input.style.height='';
  showMode(aiEnabled); setBusy(false); input.focus({preventScroll:true});
});


})();

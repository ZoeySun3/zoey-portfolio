// Public profile facts from Zoey’s CVs (data scientist.pdf, Xpert-CV-ZH.pdf) and her confirmed role.
// Shared with the chat backend (zoey-chat-api/public/content.js); keep the exports unchanged.
export const profile = {
  "name": "Zoey (Ziyi) Sun",
  "role": "Data Scientist",
  "employer": "Dragonfly Data Science",
  "location": "Wellington, New Zealand",
  "email": "ziyisun27@gmail.com",
  "linkedin": "https://www.linkedin.com/in/zoey-sun/",
  "github": "https://github.com/ZoeySun3",
  "summary": "Applied AI scientist with a PhD in artificial intelligence and industry experience, building practical, reliable AI solutions from early prototypes to real-world deployment. Builds models that read landscapes from aerial imagery and LiDAR, and has worked on retrieval-augmented assistants and LLM evaluation.",
  "education": [
    "PhD in Artificial Intelligence, Victoria University of Wellington, Oct 2021–Feb 2025.",
    "M.S. in Computer Application Technology, Shandong University of Finance and Economics, Sep 2018–Jun 2021.",
    "B.S. in Digital Media Technology, Shandong University of Finance and Economics, Sep 2014–Jun 2018."
  ],
  "experience": [
    "Dragonfly Data Science, Data Scientist, Nov 2025–present. Works on the MBIE-funded New Zealand–NASA Catalyst: Strategic project “Integrating machine learning and remote sensing for dynamic forest mapping,” in partnership with NASA Earth Exchange (NEX). Develops models that predict tree height and forest characteristics from aerial imagery across New Zealand, using LiDAR for training and validation; models predict synthetic canopy height models (synCHMs) where LiDAR is unavailable. Researches tree crown segmentation and forest classification; builds reproducible training, inference and deployment workflows with Git, CI and cloud infrastructure. Collaborates with a multidisciplinary team through updates, reports and workshops. She is employed by Dragonfly, not NASA.",
    "ElementX, R&D Intern, Auckland, Aug–Oct 2025. Contributed to AI chatbot backends, SQL data management and structured LLM response evaluation. Built end-to-end n8n workflows that generate proposals and supporting documents with AI, route drafts for human review and deliver approved files. Stack: LLMs, SQL, Ruby, n8n.",
    "Victoria University of Wellington, Research Assistant, Mar–Aug 2025. Extended individual tree crown instance segmentation research with Manaaki Whenua – Landcare Research.",
    "Callaghan Innovation, Digital & AI Intern, Oct 2024–Mar 2025. Contributed to GovGPT (plain-language access to New Zealand government services and policy) and PaperBoi (a scientific literature assistant for research from New Zealand institutions). Improved RAG and semantic retrieval for more relevant results, using Python, GitHub, Azure AI Studio and AWS in an Agile team.",
    "Victoria University of Wellington, PhD Researcher, Oct 2021–Feb 2025. Collaborated with Manaaki Whenua – Landcare Research, supervised by Mengjie Zhang and Bing Xue. Designed CNN and Transformer models for detection and instance segmentation of individual tree crowns in aerial imagery of the Wellington region, from rural hill country to Wellington City (YOLO-ITC, YOLOv8E, feature-fusion YOLOv8, YOLOv8-UT, improved Mask R-CNN). Her three first-author journal papers (YOLO-ITC, feature-fusion YOLOv8-FF and YOLOv8E) and YOLOv8-UT share one rural dataset: 2021 aerial imagery of Wairarapa hill country in the Greater Wellington Region, labelled by Manaaki Whenua – Landcare Research. YOLOv8-UT adds an urban Wellington City dataset, the same one used for the improved Mask R-CNN. She built large aerial imagery pipelines and distributed multi-GPU training. Her CV reports a 10% improvement in tree crown detection accuracy and 8% in segmentation accuracy over existing methods; exact baselines are in the papers.",
    "Applied AI projects in China: automotive wheel hub weld seam positioning (May–Nov 2020) with FAW and China National Heavy Duty Truck Group — data collection, cleaning, labelling and YOLO models; supported deployment and client demonstrations; 99.98% detection rate with positional accuracy under 0.3 cm. Glass flaw detection (Feb–Aug 2021) — dataset and computer vision pipeline with YOLO; over 93% accuracy across flat, specialty and decorative glass; presented to the client and supported integration.",
    "Master’s research, Sep 2018–Jun 2021: single-image dehazing with semi-supervised learning, attention mechanisms and CycleGAN. SADnet combines channel, spatial and self-attention. ICycleGAN integrates iterative dehazing into CycleGAN to preserve texture and colour."
  ],
  "talks": [
    "2023, IVCNZ 2023 (Palmerston North): An Improved Mask R-CNN for Instance Segmentation of Tree Crowns in Aerial Imagery.",
    "2023, IEEE Postgraduate Symposium (Wellington): YOLO for Instance Segmentation of Individual Tree Crowns.",
    "2022, IEEE Postgraduate Symposium (Wellington): Neural Architecture Search for Image Segmentation.",
    "2021, IEEE Postgraduate Symposium (Wellington): Evolutionary Computation for Image Analysis."
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
    "Mask R-CNN",
    "Pandas",
    "NumPy",
    "SciPy",
    "aerial imagery",
    "LiDAR",
    "remote sensing",
    "canopy height prediction",
    "RAG",
    "semantic retrieval",
    "LLM evaluation",
    "n8n",
    "Git",
    "GitHub",
    "CI",
    "multi-GPU training",
    "Azure AI Studio",
    "AWS",
    "Linux",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "image dehazing",
    "statistical analysis",
    "experimental evaluation",
    "Codex",
    "ChatGPT",
    "Claude Code",
    "Gemini"
  ],
  "communication": "Research publications, conference talks, technical reports, workshops, client demonstrations, AI/ML tutoring and multidisciplinary collaboration.",
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
export const publications = [
  {
    "year": "2026",
    "title": "YOLO-ITC: A New YOLO Method for Instance Segmentation of Individual Tree Crowns",
    "aliases": [
      "YOLO-ITC",
      "YOLO ITC"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Instance segmentation and species classification of individual tree crowns in aerial imagery is hard because crowns are mostly small or medium, densely packed and overlapping, vary in size, colour, shape and texture, and are easily confused with shrubs or grass without height information. Existing CNN methods, designed for natural images, rarely handle such dense small crowns.",
      "data": "RGB aerial imagery at 30-cm resolution, flown in 2021 over rural hill country in the Greater Wellington Region, New Zealand, provided by Manaaki Whenua - Landcare Research. It was tiled into 512x512-pixel images with 38,601 hand-delineated crown instances in six classes (conifers, kānuka, willow-poplar, eucalyptus, acacia, other natives), almost all small or medium, and randomly split into 591 training images (34,156 instances) and 66 test images (4,445).",
      "method": "YOLO-ITC builds on YOLOv7 (XLarge version), using YOLOv8's backbone and neck with YOLOv7's anchor-based segmentation head. Because the data has almost no large crowns, it swaps the large-object detection scale for a second medium-scale output. A new Dense Block reuses features from all earlier layers (DenseNet-style), with Efficient Attention at its end to capture global context.",
      "result": "On the test set YOLO-ITC achieved box AP 36.2 and mask AP 32.0, the best among 17 compared methods: 2.0 and 1.4 points above the strongest baseline, YOLOv8, and 5.4 and 4.4 above YOLOv7. Baselines included Mask R-CNN, Cascade R-CNN, HTC, DetectoRS, YOLACT, SOLOv2, CondInst, RTMDet and YOLOv5 to YOLOv10. In ablation, the Dense Block gave the largest single gain (box AP 32.9 to 35.2).",
      "limitation": "The paper notes that accuracy varies across test images, that its dataset of just over 600 images may limit generalisation, that real-world deployment needs further study, and that the CNN is a black box. Stated future work: a lighter model, since YOLO-ITC adds parameters, and improving anchor-free YOLO models such as YOLOv8 for this task."
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
    "aliases": [
      "YOLOv8-UT",
      "YOLOv8 UT",
      "YOLOv8UT",
      "unified training",
      "PRICAI"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Tree crown segmentation models are usually built and tested on one region or environment, which limits generalisation to other landscapes. Rural and urban aerial scenes differ in crown density and size, resolution, background (natural vegetation versus buildings and roads) and labels (species versus a single tree class), making cross-environment learning hard.",
      "data": "Two aerial datasets from the Greater Wellington region, New Zealand, from Manaaki Whenua - Landcare Research, tiled into 512x512 RGB images. Rural: 2021, 30-cm resolution, hill country in the Wairarapa; 657 images, 38,601 crowns in six species classes; 591 training images (34,156 instances), 66 test (4,445). Urban: 2016-2017, 10-cm resolution, Wellington City; 670 images, 12,244 crowns labelled only 'tree'; 603 training (11,063), 67 test (1,181).",
      "method": "YOLOv8-UT builds on YOLOv8-FF, the authors' earlier YOLOv8 variant with multi-level feature fusion, and adds a C2f-LKA module (Large Kernel Attention) in the final neck layers to capture local detail and long-range context. Its unified training strategy pre-trains one network on the merged rural and urban data as a single tree class, then fine-tunes it separately on each original dataset.",
      "result": "YOLOv8-UT reached box/mask AP of 39.7/34.4 on the rural test set and 48.2/40.5 on the urban test set, the best among compared methods (Mask R-CNN, Cascade R-CNN, HTC, DetectoRS, YOLACT, SOLOv2, CondInst, RTMDet, YOLOv5 to YOLOv10, YOLOv8-FF). That is +2.1/+1.5 points (5.6%/4.6%) over the YOLOv8-FF baseline on rural and +2.6/+1.5 (5.7%/3.8%) on urban. In ablation, unified training gave most of the gain (rural box AP 37.5 to 39.7).",
      "limitation": "The paper reports that both YOLOv8-UT and YOLOv8-FF still miss many crowns in images of densely packed small crowns with unclear boundaries, and that YOLOv9 beats it on urban mask AP50 and AP-medium. Stated future work: more sophisticated attention mechanisms, multi-modal data integration, and evaluation across broader environments."
    },
    "authors": [
      "Ziyi Sun",
      "Bing Xue",
      "Mengjie Zhang",
      "Jan Schindler"
    ],
    "venue": "PRICAI 2025: Trends in Artificial Intelligence",
    "details": "Lecture Notes in Artificial Intelligence (LNAI), vol. 16455, pp. 298–314. Springer.",
    "url": "https://doi.org/10.1007/978-981-95-7084-3_19"
  },
  {
    "year": "2025",
    "title": "Feature Fusion to Improve YOLOv8 for Segmenting and Classifying Aerial Images of Tree Crowns",
    "aliases": [
      "YOLOv8-FF",
      "YOLOv8 FF",
      "YOLOv8 feature fusion",
      "feature fusion",
      "JSTARS"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Segmenting and species-classifying individual tree crowns in rural aerial imagery is hard: crowns are mostly tiny to medium (some under 20 pixels in a 512 x 512 tile), range from isolated trees to dense overlapping stands with shadows, and resemble shrubs or grass. Standard YOLOv8 targets small, medium and large objects and is limited on tiny crowns.",
      "data": "30 cm RGB aerial orthophotos captured in 2021 over rural hill-country in Wairarapa, Greater Wellington region, New Zealand, with species labels from field mapping, provided by Manaaki Whenua - Landcare Research. 38,601 annotated crown instances (28,297 distinct trees) in six classes (conifers, kānuka, willow-poplar, eucalyptus, acacia, other natives), tiled at 512 x 512 pixels and split randomly into 473 training, 118 validation and 66 test images (26,424, 7,732 and 4,445 instances).",
      "method": "YOLOv8-FF builds on YOLOv8x (the extra-large YOLOv8). It drops the large-object detection head and adds a tiny-object head; adds a lightweight feature-fusion mechanism in the neck combining cross-scale fusion (HRNet-inspired) and same-scale fusion (BiFPN-inspired concatenation); and inserts a Sparse Large Kernel Network (SLaK) block into the head's last C2f module to widen the receptive field for medium crowns.",
      "result": "On the test set, YOLOv8-FF reaches box AP 27.9 and mask AP 24.7, best among 17 compared methods (including Mask R-CNN, Cascade R-CNN, HTC, MogaNet, YOLACT, CondInst, RTMDet and YOLOv5/v7/v9/v10) and 1.8 and 1.2 points above baseline YOLOv8 (26.1, 23.5). It has 54.4M parameters versus 71.8M, though FLOPs rise from 110.3G to 196.1G. In ablation, SLaK cut 3.1M parameters and lifted mask AP from 24.1 to 24.7.",
      "limitation": "The paper states that YOLOv8-FF still struggles with dense, small, overlapping crowns such as kānuka, its weakest class (mask AP 12.3), and scores slightly below baseline YOLOv8 on medium-object mask AP (37.6 vs 38.2) after dropping the large-object head. Proposed future work: more sophisticated convolutions, better data augmentation, and studying the effect of removing the large-object head."
    },
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
    "aliases": [
      "YOLOv8E"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "YOLOv8's anchor-free label assignment treats a grid cell as a training candidate only if its centre falls inside an object, so tiny crowns lying between cell centres can get no positive sample and be missed. Its large-object branch is also unneeded for canopy imagery with almost no large crowns, while dense stands, shadows and tree-like shrubs add difficulty.",
      "data": "30 cm, 3-band RGB aerial orthophotos taken in 2021 over rural pastoral hill-country in Wairarapa, Greater Wellington Region (including two farms); labelled from field mapping and provided by Manaaki Whenua - Landcare Research. 657 tiles of 512 x 512 pixels (591 training, 66 test, no validation set) with 28,297 crowns in six classes: conifers, kānuka, willow-poplar, eucalyptus, acacia, other natives.",
      "method": "YOLOv8E (E for efficient) builds on the XLarge YOLOv8. It adds eight keypoints around each grid-cell centre (two layouts, schemes A and B), so a cell becomes a candidate positive sample if any of its nine points falls inside an object, helping tiny crowns without adding parameters. It also removes the large-object parts of the neck and head, and lowers the Task-Aligned Assigner's positives per instance (m) from 10 to 7.",
      "result": "On the test set, YOLOv8E-B reaches box AP 36.1 and mask AP 32.2 (YOLOv8E-A: 36.0, 32.1), best of 12 compared methods; the strongest baseline, YOLOv8, scored 34.2 and 30.6 (relative gains of about 5.3% and 4.9%). Others included Mask R-CNN, Cascade R-CNN, HTC, DetectoRS, MogaNet, YOLACT, SOLOv2, YOLOv5 and YOLOv7. Parameters fall from 71.8M to 56.9M (about 20.8%); the slimmer network alone added 0.7 box and mask AP.",
      "limitation": "The paper states that neither YOLOv8E nor YOLOv8 can separate all crowns when boundaries between them are very unclear, and that accuracy is lowest on the small, densely packed kānuka class (mask AP 15.8 with scheme A). Proposed future work: more effective convolutional operations and data augmentation, and better handling of kānuka."
    },
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
    "aliases": [
      "DDT",
      "deep distance transform",
      "ISPRS"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Earlier UNet-based tree crown instance segmentation needed multi-model or multi-task learning, intricate parameterisation of crown outlines, gaps or peaks, specialised combined losses and dataset-specific tuning, which hinders wider adoption. Delineating crowns in aerial imagery is hard because of limited image resolution, inaccurate labels, mixed species and stand densities, and cluttered backgrounds.",
      "data": "A new dataset of 24,690 hand-labelled tree crowns over 3.17 km2 of Wellington City and the Greater Wellington Region, Aotearoa New Zealand, covering native bush, pine forest, mixed, urban and rural hill-country scenes. Main experiments use 2017 RGB aerial imagery at 10 cm in 512 x 512 tiles (982 training, 280 test); transfer tests use 30 tiles from 2021 surveys at 7.5 cm and 30 cm.",
      "method": "Deep Distance Transform (DDT) trains a single UNet regression model, with an ImageNet pre-trained ResNet-101 encoder and a large five-block decoder, to predict one surface: each crown's normalised distance transform, highest at the crown centre. After smoothing, local maxima become seed points, a seeded watershed segmentation splits the surface into individual crowns, and the segments are turned into crown polygons. Training uses a simple L1 loss.",
      "result": "On the 280-tile Wellington test set, DDT reaches F1 0.531 at IoU 0.5 (0.182 small, 0.451 medium, 0.665 large crowns), above Mask-RCNN (0.446), StarDist (0.434) and the multi-model UNet of Freudenberg et al. (0.438; 0.524 when given DDT's configuration, but 10.2 versus 4.9 training hours). In the ablation, ImageNet pre-training had the strongest effect. On unseen 2021 imagery, F1 was 0.50 urban, 0.56 rural hill-country and 0.41 native bush.",
      "limitation": "The paper finds accuracy lowest for small crowns and recommends work on small objects and on more modern networks that learn better from limited, inaccurate manual labels. It also notes some false positives on low shrubs and canopy-like ground features, and that the best accuracy needs encoders pre-trained on very large image datasets.",
      "role": "Zoey is the second author. The paper’s author contribution statement lists her roles as investigation, and writing – review and editing."
    },
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
    "aliases": [
      "Mask R-CNN",
      "Mask RCNN",
      "IVCNZ"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Mask R-CNN is widely used to segment individual tree crowns, but the paper argues its standard ResNet or ResNeXt backbones do not extract enough tree crown features. The task is hard because crown boundaries are unclear (varied sizes, overlapping crowns, mutual shading), crowns look like background grass and weeds, and many crowns are small, sometimes only a few pixels.",
      "data": "A manually labelled dataset from Manaaki Whenua - Landcare Research of urban RGB aerial images of Wellington City, Aotearoa New Zealand: about 12,000 tree crowns in 670 images of 512 x 512 pixels. Experts split it into a training set (about 11,000 crowns, 603 images) and a test set (about 1,100 crowns, 67 images). The paper does not state the ground resolution or a validation split.",
      "method": "The paper keeps the Mask R-CNN framework (feature pyramid, region proposal network, box and mask heads, built in MMDetection) but replaces the ResNet backbone with ConvNeXt-Base, a modernised convolutional network pre-trained on ImageNet-1K. It also redesigns the mask branch with depth-wise separable convolutions and a skip connection, followed by atrous separable convolutions, inspired by the Xception exit flow, to make mask prediction lighter and more effective.",
      "result": "On the Wellington test set it reaches a mask AP of 38.1% (AP50 61.7%), 6.5 points above the strongest baseline, HTC with ResNeXt-101 (31.6%), and ahead of Mask R-CNN, Cascade R-CNN, DetectoRS, YOLACT and SOLOv2, with 2.7 h training versus 5.6 h for that HTC model. In ablations, ConvNeXt-B raised Mask R-CNN AP from 32.6% (ResNet-101) to 37.6%, and the new mask branch added 0.5 points with a slightly smaller model.",
      "limitation": "The paper states no explicit limitations. Its conclusion proposes, as future work, designing a lightweight architecture, especially the backbone, to reduce computational cost."
    },
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
    "aliases": [
      "SADnet",
      "semi-supervised dehazing",
      "dehazing"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Learning-based dehazing models are trained mostly on synthetic hazy images, so they generalise poorly to real-world haze, while unsupervised methods leave residual haze because they lack clear reference images. Haze density is also uneven across an image, which most learning-based methods, especially semi-supervised ones, ignore.",
      "data": "Training used 6,000 labelled synthetic hazy/clear pairs from RESIDE (3,000 from the indoor set ITS and 3,000 from the outdoor set OTS) plus 4,000 unlabelled real-world hazy images from RESIDE's URHI set. Testing used the synthetic SOTS indoor and outdoor test set, HazeRD (75 synthetic hazy images with clear references) and real-world hazy photos for visual comparison.",
      "method": "SADnet is an end-to-end encoder-decoder CNN with seven smooth dilated residual blocks and a Channel-Spatial Self-Attention (CSSA) module: channel attention weights feature channels, spatial attention focuses on regions such as dense haze, and self-attention captures long-range dependencies. One shared network alternates between a supervised branch on synthetic pairs (MSE and perceptual losses) and an unsupervised branch on real hazy images (total variation and dark channel losses).",
      "result": "On SOTS outdoor SADnet scored PSNR 25.8595 / SSIM 0.9239, the best PSNR of 12 methods (Deep-DCP had higher SSIM, 0.9330). On SOTS indoor it had the best SSIM (0.8985), but Li et al.'s semi-supervised method had higher PSNR (23.0835 vs 22.9433); on HazeRD it led both (16.58 / 0.8389). Without attention, SOTS-outdoor PSNR fell to 22.3936. Average runtime was 0.4366 s per 512x512 image, behind only AOD-net (0.3061 s).",
      "limitation": "The paper states that its main limitation is that the semi-supervised method still needs real haze-free images for training. As future work it proposes a more effective unsupervised or zero-shot framework, noting that existing ones are limited by the lack of ground-truth images."
    },
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
    "aliases": [
      "ICycleGAN",
      "CycleGAN",
      "dehazing"
    ],
    "research": {
      "basis": "Full paper",
      "problem": "Physical-model dehazing keeps colours faithful but cannot fully remove haze from some images, notably dark hazy ones, while GAN-based methods remove haze thoroughly but ignore the physics of haze, causing colour distortion and lost detail. The paper aims to remove haze thoroughly while keeping image detail and fidelity.",
      "data": "A separate model was trained per dataset: NTIRE 2018 I-HAZE and O-HAZE (25 indoor and 35 outdoor ultra-high-resolution hazy/clear pairs, augmented by random cropping) and RESIDE's synthetic indoor (ITS, 110,500 images) and outdoor (OTS, 313,950 images) sets. Testing used 5 indoor and 10 outdoor I-/O-HAZE scenes, the RESIDE SOTS test set (500 indoor, 500 outdoor), the Dense-Haze dataset and five natural hazy photos.",
      "method": "ICycleGAN builds on CycleGAN, which the paper says needs no paired hazy/clear images. Its dehazing generator runs in an iterative loop: each pass applies a physics-based iterative dehazing model from the same research group (dark channel prior estimates per fog-density region), then the generator, repeating until a dark-pixel threshold is met. A new Lab-colour detail information-consistency loss preserves colour and texture; rational fractal interpolation upscales the 256x256 output.",
      "result": "On I-HAZE ICycleGAN had the best PSNR and SSIM (15.9218 / 0.7452) of nine methods; on O-HAZE the best PSNR (18.2179), with SSIM 0.8541 behind Cycle-Dehaze (0.8580). On RESIDE outdoor it had the best SSIM (0.9147) and PSNR 22.0658, behind DCPDN's 22.4900; on RESIDE indoor it was second on both (20.4741 / 0.8350) behind GFN (22.4400 / 0.8844). The detail loss raised I-HAZE PSNR from 15.6475 to 15.9218.",
      "limitation": "The paper notes that ICycleGAN's colour natural index (CNI) scores are not the highest because some detail is lost in learning, and names a more efficient GAN for higher-quality, higher-CNI results as future work. Training hardware also limited the network to 256x256 inputs."
    },
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

export const projects = {
  "forest": {
    "title": "Dynamic forest mapping",
    "meta": "Dragonfly Data Science · Nov 2025–present",
    "summary": "Predicting canopy height from aerial imagery across New Zealand, trained and validated against LiDAR, so forest structure can be mapped wherever LiDAR doesn’t reach. Part of a New Zealand–NASA research partnership with NASA Earth Exchange (NEX).",
    "contributions": [
      "Develop and evaluate models that predict tree height and forest characteristics from aerial imagery, using LiDAR for training and validation.",
      "Research individual tree-crown segmentation and forest classification across LiDAR and aerial imagery.",
      "Build reproducible pipelines for training and inference datasets, and test, train, validate and deploy models with Git, continuous integration and cloud infrastructure.",
      "Share findings with a multidisciplinary team through project updates, reports, workshops and scientific outputs."
    ],
    "skills": [
      "Machine learning",
      "Remote sensing",
      "Aerial imagery",
      "LiDAR",
      "U-Net",
      "Git / CI",
      "Cloud infrastructure"
    ]
  },
  "crowns": {
    "title": "Finding every tree: tree-crown detection and instance segmentation",
    "meta": "PhD research, Victoria University of Wellington · 2021–2025",
    "summary": "New YOLO and Mask R-CNN variants that detect and outline individual tree crowns in aerial imagery of the Wellington region, even where canopies overlap. +10% detection and +8% segmentation accuracy; six papers.",
    "contributions": [
      "Designed YOLO-ITC (YOLOv7 with a small/medium-crown detection design, dense feature reuse and efficient attention), YOLOv8E (better positive-sample selection and a leaner network), a feature-fusion YOLOv8 and the cross-environment YOLOv8-UT training approach.",
      "Built data pipelines for large aerial-imagery datasets and distributed multi-GPU training.",
      "Evaluated models with statistical analysis against established baselines, improving crown detection accuracy by 10% and segmentation accuracy by 8%.",
      "Published six papers and presented at IVCNZ 2023 and the IEEE Postgraduate Symposium."
    ],
    "skills": [
      "Python",
      "PyTorch",
      "YOLO",
      "Mask R-CNN",
      "Transformers",
      "Instance segmentation"
    ]
  },
  "rag": {
    "title": "GovGPT and PaperBoi: retrieval-augmented assistants",
    "meta": "Callaghan Innovation · Oct 2024–Mar 2025",
    "summary": "Retrieval-augmented assistants that help New Zealanders find government services and policy in plain language, and explore research from New Zealand institutions.",
    "contributions": [
      "Implemented and improved retrieval-augmented generation (RAG) workflows so answers drew on more relevant government and scientific sources.",
      "Worked on semantic retrieval and the relevance of information returned to users.",
      "Contributed to cloud-based AI workflows on Azure AI Studio and AWS in an Agile team."
    ],
    "skills": [
      "Python",
      "LLMs",
      "RAG",
      "Semantic retrieval",
      "Azure AI Studio",
      "AWS",
      "GitHub"
    ]
  },
  "agents": {
    "title": "LLM evaluation and document automation",
    "meta": "ElementX · Aug–Oct 2025",
    "summary": "Structured testing of chatbot answers, plus n8n workflows that draft proposals with AI and route every draft through human review before it is sent.",
    "contributions": [
      "Contributed to chatbot backend development and used SQL to manage application data.",
      "Evaluated LLM response accuracy through structured testing and evaluation research.",
      "Built end-to-end n8n workflows that generate proposals and supporting documents with AI, route drafts for human review, and deliver approved files."
    ],
    "skills": [
      "LLMs",
      "LLM evaluation",
      "SQL",
      "Ruby",
      "n8n",
      "Workflow automation"
    ]
  },
  "inspection": {
    "title": "Industrial visual inspection",
    "meta": "Applied AI projects, China · 2020–2021",
    "summary": "YOLO detectors that locate weld seams on wheel hubs (99.98% detection, under 0.3 cm positioning error) and find flaws in glass (over 93% accuracy), taken from raw factory images to client deployment.",
    "contributions": [
      "Weld seams (May–Nov 2020, with FAW and China National Heavy Duty Truck Group): data collection, cleaning and labelling, YOLO model development, deployment support and client demonstrations.",
      "Glass flaws (Feb–Aug 2021): built the dataset and computer vision pipeline — collection, image processing, labelling and YOLO models — then presented results and supported integration.",
      "Results: 99.98% weld-seam detection rate with positioning error under 0.3 cm; over 93% glass-flaw accuracy across flat, specialty and decorative glass."
    ],
    "skills": [
      "Computer vision",
      "YOLO",
      "Object detection",
      "Dataset building",
      "Deployment"
    ]
  },
  "dehazing": {
    "title": "Single-image dehazing",
    "meta": "Master’s research, Shandong University of Finance and Economics · 2018–2021",
    "summary": "Attention-based and CycleGAN methods that recover colour, contrast and fine texture from a single hazy photograph.",
    "contributions": [
      "SADnet: a semi-supervised dehazing network combining channel, spatial and self-attention (ACM TOMM, 2022).",
      "ICycleGAN: integrates an iterative dehazing model into CycleGAN to preserve texture and colour (CVIU, 2021).",
      "Designed and ran the image-restoration experiments and wrote up both methods for peer-reviewed journals."
    ],
    "skills": [
      "Deep learning",
      "Semi-supervised learning",
      "Attention",
      "CycleGAN",
      "Image restoration"
    ]
  }
};

// A finite English-language FAQ; no generative model is simulated.
const topics = [
  {
    "words": [
      "projects",
      "portfolio projects",
      "selected work",
      "case studies",
      "portfolio"
    ],
    "answer": "Zoey’s selected work covers six projects: dynamic forest mapping at Dragonfly Data Science; her PhD on tree-crown detection and instance segmentation; GovGPT and PaperBoi at Callaghan Innovation; LLM evaluation and document automation at ElementX; industrial visual inspection in China; and single-image dehazing from her master’s research. Each has a full case study on the page.",
    "source": "#work"
  },
  {
    "words": [
      "dehazing",
      "haze",
      "image restoration",
      "master"
    ],
    "answer": "Zoey’s master’s research explored single-image dehazing — recovering a clear image from one hazy photograph — using semi-supervised learning, attention mechanisms and CycleGAN. It led to SADnet (ACM TOMM, 2022), which combines channel, spatial and self-attention, and ICycleGAN (CVIU, 2021), which integrates an iterative dehazing model into CycleGAN to preserve texture and colour.",
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
      "lidar",
      "forest",
      "canopy"
    ],
    "answer": "Zoey is a Data Scientist at Dragonfly Data Science (November 2025–present). She develops models that predict tree height and forest characteristics from aerial imagery across New Zealand, using LiDAR for training and validation, so canopy height can be mapped where LiDAR isn’t available. The work is part of an MBIE-funded New Zealand–NASA research partnership with NASA Earth Exchange; she is employed by Dragonfly. She also builds reproducible training and inference pipelines with Git, CI and cloud infrastructure.",
    "source": "#work"
  },
  {
    "words": [
      "education",
      "degree",
      "university",
      "studied",
      "study",
      "bachelor",
      "qualification"
    ],
    "answer": "Zoey holds a PhD in Artificial Intelligence from Victoria University of Wellington (2021–2025), an M.S. in Computer Application Technology (2018–2021) and a B.S. in Digital Media Technology (2014–2018), both from Shandong University of Finance and Economics.",
    "source": "#education"
  },
  {
    "words": [
      "research",
      "phd",
      "segmentation",
      "computer vision",
      "detection",
      "tree crown",
      "thesis",
      "yolo"
    ],
    "answer": "Zoey’s PhD at Victoria University of Wellington, with Manaaki Whenua – Landcare Research, developed models that detect and outline individual tree crowns in aerial imagery of the Wellington region, from rural hill country to Wellington City — a hard instance-segmentation problem because crowns overlap and vary in size. Her methods include YOLO-ITC, YOLOv8E, a feature-fusion YOLOv8, YOLOv8-UT and an improved Mask R-CNN. Her CV reports a 10% gain in detection accuracy and 8% in segmentation accuracy, and the work produced six papers.",
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
      "ai experience",
      "language model",
      "retrieval"
    ],
    "answer": "At Callaghan Innovation (October 2024–March 2025), Zoey improved RAG and semantic retrieval for GovGPT, a plain-language guide to New Zealand government services, and PaperBoi, an assistant for New Zealand research literature, working with Python, Azure AI Studio and AWS. At ElementX (August–October 2025), she worked on chatbot backends, structured LLM response evaluation and n8n document automation with human review.",
    "source": "#work"
  },
  {
    "words": [
      "elementx",
      "n8n",
      "automation",
      "agentic",
      "proposal",
      "evaluation"
    ],
    "answer": "At ElementX, Zoey contributed to chatbot backend development and SQL data management, evaluated LLM response accuracy through structured testing, and built end-to-end n8n workflows that draft proposals and supporting documents with AI, route them for human review and deliver approved files.",
    "source": "#work"
  },
  {
    "words": [
      "industrial",
      "weld",
      "glass",
      "factory",
      "inspection",
      "deployment",
      "deployed",
      "wheel",
      "weld seam",
      "glass flaw",
      "defect"
    ],
    "answer": "Before her PhD, Zoey worked on two industrial computer-vision systems in China. For wheel-hub weld-seam positioning (2020, with FAW and China National Heavy Duty Truck Group) she worked on data and YOLO models; the deployed system reached a 99.98% detection rate with positioning error under 0.3 cm. For glass-flaw detection (2021) she built the dataset and pipeline, reaching over 93% accuracy across flat, specialty and decorative glass.",
    "source": "#work"
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
      "programming",
      "toolkit"
    ],
    "answer": "Zoey works mainly in Python and SQL, with PyTorch, TensorFlow, scikit-learn and OpenCV for machine learning (CNNs, Transformers, U-Net, YOLO). She also works with aerial imagery and LiDAR, RAG and LLM evaluation, n8n, Git and CI, multi-GPU training, Azure AI Studio, AWS and Linux, and uses AI coding tools such as Codex, Claude Code, ChatGPT and Gemini.",
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
    "answer": "Zoey publishes as Ziyi Sun. There are eight publications, seven as first author: YOLO-ITC and YOLOv8-UT (2026); feature-fusion YOLOv8, YOLOv8E and deep distance transform (DDT) tree mapping (2025); an improved Mask R-CNN (IVCNZ 2023); SADnet (2022); and ICycleGAN (2021). Each entry links to the publisher.",
    "source": "#research"
  },
  {
    "words": [
      "talk",
      "talks",
      "presentation",
      "presented",
      "conference",
      "symposium",
      "ivcnz"
    ],
    "answer": "Zoey has given four research talks: on her improved Mask R-CNN at IVCNZ 2023 in Palmerston North, and at the IEEE Postgraduate Symposium in Wellington on YOLO for tree-crown segmentation (2023), neural architecture search for image segmentation (2022) and evolutionary computation for image analysis (2021).",
    "source": "#research"
  },
  {
    "words": [
      "experience",
      "career",
      "background",
      "journey",
      "worked",
      "jobs"
    ],
    "answer": "Zoey is a Data Scientist at Dragonfly Data Science. Before that she was an R&D intern at ElementX (LLM evaluation and automation), a research assistant at Victoria University of Wellington, a Digital & AI intern at Callaghan Innovation (GovGPT and PaperBoi), and a PhD researcher in computer vision. Earlier, she worked on industrial computer vision for weld-seam positioning and glass-defect detection in China.",
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
      "linkedin",
      "github",
      "reach her",
      "reach zoey",
      "get in touch"
    ],
    "answer": "You can reach Zoey by email at ziyisun27@gmail.com or on LinkedIn at https://www.linkedin.com/in/zoey-sun/. Her GitHub is https://github.com/ZoeySun3. For collaboration, opportunities or availability, please ask her directly; those details aren’t part of her public profile.",
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
      "cooking",
      "fishing"
    ],
    "answer": "Outside work, Zoey enjoys fishing, hiking, cycling, swimming, badminton, cooking, reading and travelling.",
    "source": "#education"
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
      "mandarin",
      "chinese"
    ],
    "answer": "Zoey speaks English fluently and Chinese natively. She writes and presents research in English and collaborates in multidisciplinary teams.",
    "source": "#education"
  }
];

function normalizedTitle(text) { return String(text).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }

// Match named papers before broad FAQ keywords such as "paper" or "research".
export function findPublications(question, history = []) {
  const match = text => {
    const q = ` ${normalizedTitle(text)} `;
    return publications.filter(paper => [paper.title,paper.url,...(paper.aliases || [])].some(alias => q.includes(` ${normalizedTitle(alias)} `)));
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

export function answerLocally(question, history = []) {
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
      // Notes from the full paper carry exact scores; abstract-only notes say what is missing.
      const fullPaper = /full paper/i.test(note.basis);
      let body = [note.problem,note.data,note.method,note.result].join(' ');
      if (!wantsSummary && /\b(?:ap\d*|map|psnr|ssim|precision|recall|f1|exact|percent|percentage|scores?|numbers?|metrics?|accuracy|training settings|dataset size)\b|how much|how many/i.test(request)) body = fullPaper ? note.result : note.limitation;
      else if (!wantsSummary && /\b(?:dataset|data set|imagery|data)\b/i.test(request)) body = note.data;
      else if (!wantsSummary && /\b(?:method|methodology|architecture|novelty|contribution)\b/i.test(request)) body = note.method;
      else if (!wantsSummary && /\b(?:results?|findings?)\b/i.test(request)) body = `${note.result} ${note.limitation}`;
      else if (!wantsSummary && /\blimitations?\b/i.test(request)) body = fullPaper ? note.limitation : 'The available abstract is not enough to assess the study’s limitations. Please consult the full paper.';
      return `${heading}\n\n${body}\n\nBased on the ${fullPaper ? 'full paper' : 'publisher abstract'}.`;
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

export const allowedSources = ['#about','#experience','#skills','#education','#work','#research','#contact',...publications.map(paper=>paper.url)];

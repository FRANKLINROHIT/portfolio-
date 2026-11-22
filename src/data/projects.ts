import type { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: 'sales-analytics-platform',
    number: '01',
    title: 'Sales Performance Analytics Platform',
    shortTitle: 'Sales Analytics Platform',
    category: 'BUSINESS ANALYTICS & PREPROCESSING PLATFORM',
    domainBadge: 'DATA ANALYTICS',
    description:
      'A business analytics platform designed to simplify data analysis through automated dataset uploads, data preprocessing, null-value handling, and visual chart generation.',
    outcome:
      'Engineered automated null-value detection, column imputation, and dynamic chart rendering, eliminating manual data cleaning cycles and translating raw transactions into actionable executive KPIs.',
    detailedDescription:
      'The Sales Performance Analytics Platform bridges raw corporate datasets and actionable management insights. Built with a responsive React frontend and a Python-powered data engine, it automates tabular data ingestion, cleans missing and corrupted attributes, and dynamically generates multi-dimensional business charts for key performance indicators.',
    problemStatement:
      'Business analysts frequently struggle with messy, unstandardized sales spreadsheets containing null values, duplicate entries, and inconsistent data types, requiring hours of manual cleaning before any visual insight can be derived.',
    objective:
      'Create an intuitive, automated end-to-end analytics workflow where non-technical stakeholders can upload raw sales CSV/Excel files, receive auto-cleaned datasets, and immediately interact with informative analytical charts.',
    technologies: ['React.js', 'Python', 'Pandas', 'SQL', 'NumPy', 'Data Preprocessing', 'Data Visualization'],
    keyFeatures: [
      'Automated dataset upload pipeline with format validation',
      'Intelligent null-value detection, imputation, and outlier filtering',
      'Automated data cleaning and column type normalization',
      'Interactive business KPI charts and revenue trend visualizers',
      'Dynamic multi-dimensional sales filtering by category, region, and date',
      'Preprocessed clean data export capability for reporting',
    ],
    implementationDetails: [
      'Developed responsive UI components in React for smooth file drag-and-drop and real-time upload progress.',
      'Constructed Python data pipelines utilizing Pandas for automated missing-value handling and statistical summary calculations.',
      'Designed SQL schema representations to store aggregated sales transactions and streamline relational querying.',
      'Integrated modular charting components to visually convey revenue distributions, product performance, and quarterly growth.',
    ],
    resultsVerified:
      'Successfully streamlines repetitive tabular data cleaning and reduces turnaround time from raw dataset upload to interactive business visualization.',
    mockupType: 'dashboard',
    mockupData: {
      url: 'sales-analytics.local/dashboard',
      badge: 'AUTOMATED PREPROCESSING',
      stat: 'Zero Null Leaks',
      previewTitle: 'Pandas Cleaning & Aggregation Pipeline',
      previewCode: `df = pd.read_csv(uploaded_dataset)
df[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].median())
kpi_summary = df.groupby('region').agg(total_sales=('revenue', 'sum'))`,
    },
    githubUrl: 'https://github.com/FRANKLINROHIT/Sales-Performance-Analytics-Website',
    hasLiveDemo: false,
    featured: true,
  },
  {
    id: 'dadas-drawer-monitoring',
    number: '02',
    title: 'DADAS – Smart Drawer Monitoring System',
    shortTitle: 'DADAS Smart Drawer',
    category: 'IOT KINEMATICS & ML ACTIVITY DETECTION',
    domainBadge: 'IOT & ROBOTICS',
    description:
      'An IoT-based smart drawer monitoring solution that collects drawer movement data, identifies movement patterns, and sends notifications to the owner.',
    outcome:
      'Captures multi-axis accelerometer telemetry, computes frequency-domain motion signatures, and classifies normal vs. suspicious forced tampering in real time.',
    detailedDescription:
      'DADAS (Data-driven Activity Detection & Alert System) is an intelligent IoT hardware-software prototype that detects physical drawer access patterns. By capturing accelerometer and motion sensor streams, extracting frequency-domain motion signatures, and classifying normal vs. unauthorized openings via machine learning, it triggers instant alerts for home and office security.',
    problemStatement:
      'Traditional locks offer no visibility into when, how often, or in what manner sensitive drawers or cabinets are accessed, leaving private documents or valuable items vulnerable to covert tampering.',
    objective:
      'Design an unobtrusive sensor unit and machine learning classification pipeline that monitors drawer kinematics, identifies abnormal tampering or forced access, and pushes immediate alerts to the owner.',
    technologies: ['Python', 'IoT Sensors', 'Machine Learning', 'Motion Analysis', 'Feature Extraction', 'Alerts System'],
    keyFeatures: [
      'Sensor-based motion monitoring with real-time acceleration tracking',
      'Real-time kinematic data collection and telemetry streaming',
      'Motion-frequency feature extraction to distinguish gentle opens from forced vibrations',
      'Machine learning-based activity detection model',
      'Automated user notification pipeline upon suspicious drawer activity',
      'Low-power sensor polling architecture for practical battery life',
    ],
    implementationDetails: [
      'Embedded hardware sensor integration to capture multi-axis motion and velocity spikes during physical drawer pulls.',
      'Extracted statistical time-series and frequency-domain features (mean acceleration, variance, frequency peaks) using Python.',
      'Trained a classification model to distinguish authorized gentle sliding from erratic tampering or unauthorized access.',
      'Constructed an event-driven alert loop that generates instant security notifications when an anomalous signature is detected.',
    ],
    resultsVerified:
      'Prototype demonstrates reliable motion signature capture and accurate discrimination between routine drawer usage and abnormal disturbances in test trials.',
    mockupType: 'terminal',
    mockupData: {
      url: 'dadas-node.iot/telemetry',
      badge: 'FREQUENCY-DOMAIN FFT',
      stat: 'Real-Time Detection',
        previewTitle: 'Motion Kinematics & Alert Dispatcher',
      previewCode: `features = extract_motion_fft(sensor_stream)
if anomaly_classifier.predict(features)[0] == TAMPER_SIGNATURE:
    dispatch_owner_alert(event="Forced Tamper Detected", time=now())`,
    },
    githubUrl: 'https://github.com/FRANKLINROHIT/DADAS',
    hasLiveDemo: false,
    featured: true,
  },
  {
    id: 'paddy-disease-classification',
    number: '03',
    title: 'Paddy Disease Classification',
    shortTitle: 'Paddy Leaf Classification',
    category: 'DEEP LEARNING & COMPUTER VISION RESEARCH',
    domainBadge: 'AI & MACHINE LEARNING',
    description:
      'A deep learning research project focused on identifying diseases in paddy leaves using image classification and MobileNetV2 architecture.',
    outcome:
      'Trained an edge-efficient MobileNetV2 convolutional neural network across 6 pathological categories (Bacterial Leaf Blight, Brown Spot, Healthy Leaf, Leaf Blast, Leaf Scald, Sheath Blight) with rigorous image preprocessing.',
    detailedDescription:
      'Rice (paddy) is a primary staple crop globally, yet fungal and bacterial leaf diseases cause substantial annual harvest losses. This computer vision project implements deep learning transfer learning with MobileNetV2 to identify six critical paddy leaf conditions from digital field imagery, prioritizing lightweight architecture suitable for agricultural edge deployment.',
    problemStatement:
      'Farmers frequently misdiagnose rice leaf pathologies or detect them too late, resulting in inappropriate chemical fungicide applications, degraded crop yield, and significant financial loss.',
    objective:
      'Construct an end-to-end computer vision pipeline capable of classifying six distinct paddy leaf disease and health states from photographic samples with minimal computational overhead.',
    technologies: ['MobileNetV2', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'Keras', 'Python', 'Image Preprocessing'],
    keyFeatures: [
      'Classification across 6 classes: Bacterial Leaf Blight, Brown Spot, Healthy Rice Leaf, Leaf Blast, Leaf Scald, and Sheath Blight',
      'MobileNetV2 backbone leveraging depthwise separable convolutions for edge efficiency',
      'Rigorous image preprocessing including resizing, RGB normalization, and data augmentation',
      'Transfer learning fine-tuning on domain-specific agricultural image sets',
      'Feature map visual analysis and evaluation tracking',
      'Architected for potential offline deployment on mobile and handheld agritech scanners',
    ],
    implementationDetails: [
      'Collected and curated labeled image datasets covering 6 major rice foliage conditions.',
      'Engineered an augmentation pipeline (rotation, zoom, horizontal flip, brightness variations) to combat field lighting variations.',
      'Configured MobileNetV2 pre-trained weights, truncating top classification layers and appending global average pooling with dropout.',
      'Conducted training iterations with cross-entropy loss, learning rate scheduling, and validation tracking.',
    ],
    resultsVerified:
      'Demonstrated high discriminative capability across all six classes during cross-validation, with distinct feature separation between healthy tissue and severe fungal lesions.',
    mockupType: 'terminal',
    mockupData: {
      url: 'mobilenet-paddy.agritech/model',
      badge: 'MOBILENETV2-BACKBONE',
      stat: '6 Foliar Classes',
      previewTitle: 'Transfer Learning & Custom Softmax Head',
      previewCode: `base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224,224,3))
x = GlobalAveragePooling2D()(base_model.output)
outputs = Dense(6, activation='softmax')(Dropout(0.3)(x))`,
    },
    hasLiveDemo: false,
    featured: true,
  },
  {
    id: 'object-avoiding-robot',
    number: '04',
    title: 'Object Avoiding Robot',
    shortTitle: 'Autonomous Obstacle Robot',
    category: 'AUTONOMOUS ROBOTICS & EMBEDDED SYSTEMS',
    domainBadge: 'IOT & ROBOTICS',
    description:
      'An autonomous robot designed to detect nearby obstacles and avoid collisions using sensor-based control.',
    outcome:
      'Integrated ultrasonic range-finding with differential motor drive logic to scan forward clearance buffers, calculate collision angles, and execute evasive turns without stalling.',
    detailedDescription:
      'An autonomous ground vehicle prototype that navigates unknown indoor environments without human intervention. Utilizing ultrasonic distance sensing, real-time motor controller feedback, and deterministic navigation logic, the robot scans for obstructions in its path and dynamically re-routes its trajectory to prevent collisions.',
    problemStatement:
      'Mobile robotics operating in dynamic spaces require immediate, low-latency obstacle awareness to prevent hardware damage without relying on high-cost LiDAR or heavy compute.',
    objective:
      'Engineer a responsive, cost-effective autonomous mobile robot that continuously measures forward obstacle distances and executes autonomous steering decisions in real time.',
    technologies: ['Robotics', 'Ultrasonic Sensors', 'Embedded Systems', 'Python', 'Embedded C', 'Motor Drivers'],
    keyFeatures: [
      'Continuous ultrasonic distance measurement and environmental scanning',
      'Autonomous steering and reverse-pivot collision-avoidance algorithms',
      'Dual DC motor differential drive control with PWM speed regulation',
      'Hardware testing and iterative calibration for rapid response times',
      'Robust chassis integration and power distribution management',
    ],
    implementationDetails: [
      'Integrated ultrasonic range-finding sensors on the front vehicle bumper for continuous echo-timing distance calculation.',
      'Programmed control routines with threshold buffers (e.g. initiating evasive pivot when distance falls below critical clearance).',
      'Implemented differential wheel speed manipulation through H-bridge motor driver circuitry.',
      'Conducted extensive real-world bench testing and corner-trap recovery debugging.',
    ],
    resultsVerified:
      'Reliably detected obstacles up to 30 cm away and executed smooth evasive turns without stalling or physical impact in test courses.',
    mockupType: 'terminal',
    mockupData: {
      url: 'robot-controller.embedded/nav',
      badge: 'SONAR-TIMING-LOOP',
      stat: '<30cm Clearance Pivot',
      previewTitle: 'Ultrasonic Pulse Timing & Turn Logic',
      previewCode: `long distance_cm = (pulseIn(echoPin, HIGH) * 0.0343) / 2;
if (distance_cm < 30) {
    execute_differential_evasion(direction=REVERSE_PIVOT);
}`,
    },
    hasLiveDemo: false,
    featured: true,
  },
  {
    id: 'iot-smart-parking-system',
    number: '05',
    title: 'IoT Smart Parking System',
    shortTitle: 'Smart Parking System',
    category: 'SMART URBAN INFRASTRUCTURE & SENSORS',
    domainBadge: 'IOT & ROBOTICS',
    description:
      'An IoT-based parking management solution that monitors parking slot availability using sensors and real-time telemetry.',
    outcome:
      'Deployed sensor-actuated bay occupancy tracking with SQL timestamp logging, providing driver visibility and eliminating wasted cruising time.',
    detailedDescription:
      'Urban parking congestion leads to wasted fuel, driver frustration, and inefficient space usage. The IoT Smart Parking System deploys sensors at individual parking bays to track vehicle presence in real time, transmitting slot availability data to a centralized database and user dashboard.',
    problemStatement:
      'Urban drivers spend significant time circling crowded parking facilities searching for unoccupied bays, creating localized traffic bottlenecks and elevated carbon emissions.',
    objective:
      'Develop a sensor-driven, automated parking management prototype that detects vehicle occupancy per slot and provides immediate availability status.',
    technologies: ['Arduino', 'IoT Sensors', 'Embedded Systems', 'Python', 'SQL', 'Hardware Interfacing'],
    keyFeatures: [
      'Real-time parking slot occupancy monitoring',
      'Infrared/ultrasonic sensor integration for accurate vehicle presence detection',
      'Centralized slot availability tracking and database updates',
      'Visual status indicator LEDs per parking bay for on-site driver guidance',
      'Scalable node architecture capable of expanding across multi-bay lots',
    ],
    implementationDetails: [
      'Wired proximity sensors to microcontrollers positioned over parking slot boundaries.',
      'Wrote firmware logic to eliminate false positives from fleeting pedestrian shadows.',
      'Established communication between microcontroller nodes and Python data handlers to record occupancy timestamps in SQL.',
      'Designed a clean interface to visualize available versus occupied slots.',
    ],
    resultsVerified:
      'Successfully tracked multiple parking bay transitions in real time, updating occupancy status within milliseconds of vehicle arrival and departure.',
    mockupType: 'dashboard',
    mockupData: {
      url: 'smartparking.hub/telemetry',
      badge: 'BAY TELEMETRY',
      stat: 'Instant State Sync',
      previewTitle: 'Occupancy Detection & SQL Sync',
      previewCode: `UPDATE parking_bays 
SET status = 'OCCUPIED', timestamp = NOW() 
WHERE bay_id = 'BAY-04' AND sensor_trigger = TRUE;`,
    },
    hasLiveDemo: false,
    featured: false,
  },
  {
    id: 'kids-car-selling-website',
    number: '06',
    title: 'Kids Car Selling Website',
    shortTitle: 'Kids Car E-Commerce',
    category: 'RESPONSIVE E-COMMERCE WEB APPLICATION',
    domainBadge: 'WEB DEVELOPMENT',
    description:
      "A responsive e-commerce website developed for browsing and selling kids' cars with interactive product specifications and shopping cart.",
    outcome:
      'Constructed a multi-device shopping interface featuring voltage-based filtering, responsive product galleries, and dynamic client-side shopping cart state management.',
    detailedDescription:
      'A specialized e-commerce web platform showcasing battery-operated kids ride-on cars, mini-karts, and motorized toys. The application features intuitive catalog browsing, product filtering by age and power rating, detailed vehicle specifications, and a responsive shopping basket workflow.',
    problemStatement:
      'Parents searching for motorized ride-on toys require detailed technical specs (battery voltage, remote parental control, safety certifications) that standard generic shopping portals often obscure.',
    objective:
      'Build a modern, engaging, and mobile-friendly storefront with fast navigation, rich product galleries, and clean user experience.',
    technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Git'],
    keyFeatures: [
      'Responsive multi-device layout optimized for mobile and desktop shoppers',
      'Interactive product filtering by vehicle category, battery voltage, and price',
      'Detailed product view modals with specifications and high-resolution photo galleries',
      'Client-side cart state management with real-time total calculation',
      'Clean modern visual theme with playful yet polished UI components',
    ],
    implementationDetails: [
      'Built reusable React components for product cards, navigation, and cart overlays.',
      'Implemented responsive CSS layouts with flexbox and grid for seamless presentation across screen sizes.',
      'Structured vehicle data schemas with detailed safety attributes and specifications.',
      'Applied Git version control workflows and thorough browser testing.',
    ],
    resultsVerified:
      'Delivered a fully responsive web shopping experience with fast page transitions and fluid cart operations.',
    mockupType: 'browser',
    mockupData: {
      url: 'kidscars-storefront.dev/vehicles',
      badge: 'REACT STOREFRONT',
      stat: 'Dynamic Cart State',
      previewTitle: 'Product Filtering & Shopping Cart Reducer',
      previewCode: `const filteredVehicles = catalog.filter(car => 
  (selectedVoltage ? car.battery === selectedVoltage : true) && car.inStock
);`,
    },
    hasLiveDemo: false,
    featured: false,
  },
  {
    id: 'smart-dustbin',
    number: '07',
    title: 'Smart Dustbin',
    shortTitle: 'Smart Dustbin System',
    category: 'SANITARY EMBEDDED AUTOMATION',
    domainBadge: 'IOT & ROBOTICS',
    description:
      'An automated waste-management prototype that uses sensors to improve sanitary waste collection and contactless operation.',
    outcome:
      'Engineered an automatic lid-opening mechanism with ultrasonic proximity detection and servo actuation, achieving responsive touch-free opening within 0.3 seconds.',
    detailedDescription:
      'In public and residential spaces, touching communal garbage lids poses hygiene risks and facilitates germ transmission. The Smart Dustbin employs ultrasonic range detection and servo-actuated mechanisms to provide touchless lid opening upon human hand approach, combined with fill-level monitoring to alert maintenance staff before overflow occurs.',
    problemStatement:
      'Physical contact with waste receptacle lids promotes bacterial transmission, while unmonitored bins overflow onto surroundings before sanitation crews arrive.',
    objective:
      'Construct a touch-free, automated waste receptacle with sensor-triggered lid opening and level detection.',
    technologies: ['Arduino / Microcontroller', 'Ultrasonic Sensors', 'Servo Motors', 'Embedded C', 'Hardware Prototyping'],
    keyFeatures: [
      'Contactless automatic lid opening triggered by proximity sensing',
      'Smooth servo motor actuation with programmable open-delay and gentle close',
      'Internal fill-level measurement to track waste volume',
      'Low power consumption standby mode for prolonged battery life',
      'Sanitary, touch-free waste disposal experience',
    ],
    implementationDetails: [
      'Configured ultrasonic sensor to measure distance to approaching hands within 20cm range.',
      'Programmed servo sweep angles to cleanly raise and lower the bin lid smoothly without mechanical stress.',
      'Integrated internal sensor to monitor bin fullness and illuminate status indicators.',
      'Constructed and calibrated prototype enclosure for stable repetitive cycling.',
    ],
    resultsVerified:
      'Achieved responsive touchless lid activation within 0.3 seconds of proximity detection during operational trials.',
    mockupType: 'terminal',
    mockupData: {
      url: 'smart-dustbin.firmware/loop',
      badge: 'TOUCHLESS SENSING',
      stat: '0.3s Lid Actuation',
      previewTitle: 'Proximity Threshold & Servo Angle Sweep',
      previewCode: `if (hand_distance < 20 /* cm */) {
    servoLid.write(90); delay(4000); servoLid.write(0);
}`,
    },
    hasLiveDemo: false,
    featured: false,
  },
  {
    id: 'soil-monitoring-system',
    number: '08',
    title: 'Soil Monitoring System',
    shortTitle: 'Smart Soil Monitor',
    category: 'AGRITECH ENVIRONMENTAL TELEMETRY',
    domainBadge: 'IOT & ROBOTICS',
    description:
      'An IoT-based soil-monitoring solution designed to collect soil-condition information and support data-driven plant care.',
    outcome:
      'Calibrated analog volumetric soil moisture sensing across differential soil densities, generating automated hydration threshold alerts to prevent root drought and over-watering.',
    detailedDescription:
      'Optimal plant growth and agricultural efficiency require precise soil moisture and environmental management. This IoT system measures volumetric soil water content, temperature, and ambient conditions, outputting actionable hydration data to prevent both under-watering and root rot.',
    problemStatement:
      'Guesswork in plant irrigation leads to either drought stress or waterlogging, wasting water resources and harming plant root health.',
    objective:
      'Build an intelligent soil-sensing telemetry unit that continuously records soil moisture levels and presents intuitive moisture health alerts.',
    technologies: ['IoT', 'Soil Moisture Sensors', 'Microcontroller', 'Python', 'Embedded Systems', 'Data Logging'],
    keyFeatures: [
      'Continuous soil moisture and conductivity measurement',
      'Real-time data logging for moisture fluctuation trends',
      'Configurable hydration threshold alerts (Dry, Optimal, Saturated)',
      'Support for data-driven irrigation automation',
      'Durable sensor probe integration for extended soil submersion',
    ],
    implementationDetails: [
      'Calibrated analog moisture probe readings against verified soil samples (dry vs saturated states).',
      'Wrote microcontroller code to convert analog voltage readings into standardized moisture percentages.',
      'Constructed serial and wireless data telemetry pipeline to Python logging scripts.',
      'Generated visual status indicators to flag required watering actions.',
    ],
    resultsVerified:
      'Accurately measured soil moisture gradients across differing soil types, triggering hydration alerts reliably when water levels fell below threshold.',
    mockupType: 'dashboard',
    mockupData: {
      url: 'soil-sensor.iot/hydration',
      badge: 'HYDRATION TELEMETRY',
      stat: 'Moisture Thresholds',
      previewTitle: 'Analog Conversion & Moisture Status',
      previewCode: `moisture_pct = map_reading(analog_val, DRY_REF, WET_REF, 0, 100)
status = "OPTIMAL" if 40 <= moisture_pct <= 70 else "HYDRATE_REQUIRED"`,
    },
    hasLiveDemo: false,
    featured: false,
  },
]

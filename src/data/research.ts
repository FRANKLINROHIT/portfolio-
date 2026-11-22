import type { ResearchTopic } from '../types'

export const featuredResearch: ResearchTopic = {
  title: 'Paddy Disease Classification Using Deep Learning',
  subtitle: 'Computer Vision & Deep Learning for Agritech Pathology Identification',
  overview:
    'Rice is a critical staple crop feeding billions worldwide. Early, precise diagnosis of foliar diseases is paramount to preventing catastrophic harvest losses. This research leverages convolutional neural networks—specifically the lightweight MobileNetV2 architecture—to automatically categorize rice leaf imagery into five major disease classes plus healthy controls.',
  objective:
    'To build an accurate, computationally efficient deep learning diagnostic system capable of distinguishing nuanced foliar disease symptoms under varying field illumination conditions, optimizing for eventual deployment on low-power mobile or edge agricultural devices.',
  architecture: {
    name: 'MobileNetV2 (Transfer Learning Backbone)',
    details:
      'Utilizes depthwise separable convolutions that dramatically reduce parameter count and floating-point operations (FLOPs) compared to traditional heavy CNN architectures like ResNet50 or VGG16.',
    whyChosen:
      'Ideal balance between high feature representation capability and low memory footprint, making it practically deployable on handheld smartphones or field drone cameras without requiring dedicated cloud GPU servers.',
  },
  dataset: {
    name: 'Paddy Leaf Pathology Multi-Class Benchmark Dataset',
    description:
      'A structured collection of high-resolution digital photographs taken in real-world agricultural paddy fields, annotated and partitioned across six definitive health and pathological classes.',
    classes: [
      {
        name: 'Bacterial Leaf Blight',
        scientificName: 'Xanthomonas oryzae pv. oryzae',
        description: 'Bacterial pathogen causing water-soaked lesions along leaf margins.',
        symptoms: 'Yellowish-green to grey-white wavy stripes starting from tips, progressing downward.',
      },
      {
        name: 'Brown Spot',
        scientificName: 'Bipolaris oryzae',
        description: 'Fungal affliction associated with nutrient-deficient soil conditions.',
        symptoms: 'Small, circular to oval dark brown lesions with greyish or white centers.',
      },
      {
        name: 'Healthy Rice Leaf',
        scientificName: 'Oryza sativa (Control)',
        description: 'Vigorous, uninfected leaf tissue serving as the negative control baseline.',
        symptoms: 'Uniform vibrant green coloration, crisp venation, and absence of necrotic scarring.',
      },
      {
        name: 'Leaf Blast',
        scientificName: 'Magnaporthe oryzae',
        description: 'One of the most destructive fungal rice diseases worldwide.',
        symptoms: 'Spindle-shaped elliptical lesions with pointed ends, brownish-red halos, and ash centers.',
      },
      {
        name: 'Leaf Scald',
        scientificName: 'Microdochium oryzae',
        description: 'Fungal leaf decay that rapidly spreads in high-humidity climates.',
        symptoms: 'Zonate banded lesions with alternating light and dark brown chevron-like bands.',
      },
      {
        name: 'Sheath Blight',
        scientificName: 'Rhizoctonia solani',
        description: 'Soil-borne fungal pathogen attacking lower sheaths and creeping upward.',
        symptoms: 'Irregular oval greenish-grey spots that turn light brown with dark borders.',
      },
    ],
  },
  pipeline: [
    {
      step: '01',
      title: 'Image Acquisition & Standardization',
      description: 'Raw agricultural photographs are ingested, verified for clarity, and resized to 224x224 pixels with RGB color channel alignment.',
    },
    {
      step: '02',
      title: 'Data Augmentation & Normalization',
      description: 'Applied random horizontal flips, rotation angles (-20° to +20°), zoom, and brightness shifts to simulate dynamic outdoor sunlight and prevent overfitting.',
    },
    {
      step: '03',
      title: 'Transfer Learning & Feature Extraction',
      description: 'Initialized MobileNetV2 with ImageNet pretrained weights. Extracted high-level botanical features through inverted residual blocks.',
    },
    {
      step: '04',
      title: 'Custom Classification Head',
      description: 'Appended Global Average Pooling 2D, Dropout regularization (0.3) to prevent co-adaptation, and a Dense Softmax output layer with 6 category nodes.',
    },
    {
      step: '05',
      title: 'Loss Optimization & Validation',
      description: 'Trained using Categorical Cross-Entropy with Adam optimizer, adaptive learning rate decay, and rigorous validation tracking.',
    },
  ],
  evaluationWorkflow: [
    'Training vs. Validation Loss tracking across epochs to eliminate underfitting and overfitting',
    'Confusion matrix calculation to observe inter-class classification boundaries',
    'Precision, Recall, and F1-Score metrics calculated per individual pathological category',
    'Validation on unaugmented field photos to test generalizability across lighting conditions',
  ],
  futureScope:
    'Quantizing the trained model to TensorFlow Lite (TFLite) for on-device inference on affordable Android hardware, integrating edge camera modules for real-time robotic drone surveillance in agricultural fields.',
}

const examQuestions = [
  // OPHTHALMOLOGY
  {
    category: "OPHTHALMOLOGY",
    question: "A 72-year-old presents 48 hours after uncomplicated cataract surgery with severe eye pain, marked visual deterioration and a white fluid level in the anterior chamber. Which statement best describes endophthalmitis?",
    options: [
      "It presents with painful vision loss, hypopyon, and absent or dull red reflex.",
      "It typically presents as a painless drop in visual acuity with severe conjunctival injection and normal red reflex.",
      "It presents with severe eye pain, clear cornea, and marked pupillary constriction without anterior chamber reaction.",
      "It presents with rapid-onset, painless field loss, ciliary flush, and a normal fundus appearance.",
      "It presents with severe pain, a well-visualized optic disc, and isolated posterior synechiae without fluid accumulation."
    ],
    correctAnswer: 0
  },
  {
    category: "OPHTHALMOLOGY",
    question: "Glaucoma is a collection of diseases characterized by optic neuropathy and visual field loss. Which of the following is the most important modifiable risk factor in its pathogenesis?",
    options: [
      "Elevated intraocular pressure (IOP)",
      "Advanced age greater than 60 years",
      "Family history of primary open-angle glaucoma",
      "Severe high-degree myopia",
      "Thick central corneal thickness (CCT)"
    ],
    correctAnswer: 0
  },
  {
    category: "OPHTHALMOLOGY",
    question: "The precorneal tear film consists of three layers. Which option correctly identifies them from the outermost to the innermost layer?",
    options: [
      "Lipid → Aqueous → Mucin",
      "Lipid → Mucin → Aqueous",
      "Aqueous → Mucin → Lipid",
      "Aqueous → Lipid → Mucin",
      "Mucin → Aqueous → Lipid"
    ],
    correctAnswer: 0
  },
  {
    category: "OPHTHALMOLOGY",
    question: "Which of the following is not a cause of sudden painless vision loss?",
    options: [
      "Acute angle-closure glaucoma",
      "Central retinal artery occlusion (CRAO)",
      "Retinal detachment",
      "Vitreous hemorrhage",
      "Central retinal vein occlusion (CRVO)"
    ],
    correctAnswer: 0
  },
  {
    category: "OPHTHALMOLOGY",
    question: "The posterior chamber of the eye is bounded by which of the following structures?",
    options: [
      "Anteriorly by the iris, posteriorly by the lens",
      "Anteriorly by the cornea, posteriorly by the iris",
      "Anteriorly by the lens, posteriorly by the retina/vitreous face",
      "Anteriorly by the cornea, posteriorly by the lens",
      "Anteriorly by the iris, posteriorly by the ciliary body"
    ],
    correctAnswer: 0
  },
  {
    category: "OPHTHALMOLOGY",
    question: "A construction worker arrives at the emergency department with cement (alkali) in both eyes. What is the correct first action to take?",
    options: [
      "Irrigate immediately with 2 liters of saline before any examination",
      "Assess visual acuity immediately using a Snellen chart to document baseline deficit",
      "Instill topical steroid drops to immediately suppress the severe inflammatory cascade",
      "Apply a neutralizing mild acid solution to counteract the alkali pH of the cement",
      "Check the intraocular pressure (IOP) to rule out acute secondary glaucoma before treating"
    ],
    correctAnswer: 0
  },

  // NEUROLOGY
  {
    category: "NEUROLOGY",
    question: "In the management of an acute relapse of multiple sclerosis, in the absence of contraindications, what is the first-line therapy?",
    options: [
      "Corticosteroids",
      "Intravenous immunoglobulins (IVIG)",
      "Plasma exchange (plasmapheresis)",
      "Disease-modifying therapies (DMTs) like natalizumab",
      "High-dose muscle relaxants and analgesics"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Which of the following types of aphasia is characterized by fluent speech, impaired comprehension, and reduced repetition?",
    options: [
      "Wernicke's aphasia",
      "Broca's aphasia",
      "Conduction aphasia",
      "Global aphasia",
      "Transcortical motor aphasia"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "According to current clinical guidelines, in the absence of contraindications, within what time frame should intravenous thrombolytic therapy be administered in acute ischaemic stroke?",
    options: [
      "4.5 hours",
      "3.0 hours",
      "6.0 hours",
      "2.5 hours",
      "2.0 hours"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Which of the following statements is correct?",
    options: [
      "A normal EEG does not exclude the diagnosis of epilepsy.",
      "Epileptic activity is localized entirely within the cerebellum and does not involve the cerebral cortex.",
      "Seizure generation requires the absolute inactivation of all voltage-gated sodium channels in the affected brain region.",
      "Post-ictal confusion is caused by a permanent structural lesion that develops during the acute ictal phase.",
      "The primary pathophysiology of epilepsy involves a systemic reduction in cerebrospinal fluid (CSF) volume."
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "In a patient presenting with myasthenic crisis, which of the following management approaches is appropriate?",
    options: [
      "Treatment should not be delayed whilst awaiting antibody test results.",
      "Anticholinesterase inhibitors should be aggressively up-titrated as the sole initial therapy.",
      "Intubation and mechanical ventilation should be avoided at all costs to prevent ventilator dependence.",
      "Antibody testing must be completed and confirmed positive before initiating plasmapheresis or IVIG.",
      "Corticosteroids should be started at maximum doses immediately without respiratory monitoring."
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "A patient presenting with the 'worst headache of their life' should, unless proven otherwise, be considered to have which of the following conditions?",
    options: [
      "Subarachnoid haemorrhage (SAH)",
      "Acute tension-type headache",
      "Classic migraine with aura",
      "Temporal arteritis (Giant cell arteritis)",
      "Benign exertional headache"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Which of the following instruments is used in the clinical assessment of vibration sense?",
    options: [
      "Tuning Fork",
      "Reflex hammer",
      "Neuro-tip (monofilament)",
      "Ophthalmoscope",
      "Rosenbaum pocket screener"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Diabetes mellitus most commonly leads to which of the following neurological complications?",
    options: [
      "Peripheral polyneuropathy",
      "Central demyelinating encephalomyelitis",
      "Mononeuritis multiplex of the cranial nerves",
      "Isolated autonomic ganglionitis",
      "Proximal motor axonotmesis"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Alzheimer's disease, the most common cause of dementia in individuals over the age of 65, is primarily associated with deficiency of which neurotransmitter?",
    options: [
      "Acetylcholine",
      "Dopamine",
      "Gamma-aminobutyric acid (GABA)",
      "Serotonin",
      "Norepinephrine"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Which of the following is not considered a classical feature of Parkinson's disease?",
    options: [
      "Choreiform movements",
      "Resting tremor",
      "Bradykinesia",
      "Postural instability",
      "Rigidity"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Which of the following symptoms, signs, or clinical findings would not typically be expected in myopathies?",
    options: [
      "Hypoaesthesia",
      "Proximal muscle weakness",
      "Muscle atrophy",
      "Hyporeflexia",
      "Myalgia"
    ],
    correctAnswer: 0
  },
  {
    category: "NEUROLOGY",
    question: "Which of the following best describes the typical mode of inheritance of dystrophinopathies, a subgroup of myopathic disorders?",
    options: [
      "X-linked recessive",
      "Autosomal dominant",
      "Autosomal recessive",
      "Mitochondrial inheritance",
      "X-linked dominant"
    ],
    correctAnswer: 0
  },

  // BRAIN SURGERY
  {
    category: "BRAIN SURGERY",
    question: "Fracture of which bone is referred to as a Hangman's fracture?",
    options: [
      "C2",
      "Odontoid process of C2",
      "C1 vertebra (Atlas)",
      "C3 vertebra",
      "C7 vertebra"
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Where is a cephalohematoma located?",
    options: [
      "Between the bone and periosteum",
      "Between the periosteum and the galea aponeurotica",
      "Between the scalp and the galea aponeurotica",
      "Between the dura mater and the skull",
      "Between the arachnoid mater and the pia mater"
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Which of the following is not a cause of intracranial hemorrhage?",
    options: [
      "Hypotension",
      "Chronic Hypertension",
      "Ruptured Saccular (Berry) Aneurysms",
      "Anticoagulant / Antiplatelet Therapy",
      "Trauma"
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Which of the following should not be included in the neurological examination?",
    options: [
      "Lung sounds",
      "Mental status",
      "Deep tendon reflexes",
      "Peripheral pulses",
      "Coordination and gait"
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "When does hydrocephalus occur?",
    options: [
      "When the balance in CSF absorption, production and flow is disturbed.",
      "When the cranial sutures prematurely fuse during early embryogenesis.",
      "When systemic arterial blood pressure drops below the cerebral autoregulation threshold.",
      "When the blood-brain barrier suffers an acute inflammatory breakdown without fluid volume changes.",
      "When the metabolic clearance of cerebral tau proteins and beta-amyloid plaques is reduced."
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Which of the following is not a suitable site for measuring intracranial pressure?",
    options: [
      "Intraabdominal space",
      "Intraventricular space (lateral ventricle)",
      "Intraparenchymal space (brain tissue)",
      "Subdural space",
      "Epidural space"
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Which of the following is the fastest and most useful imaging method for subarachnoid hemorrhage?",
    options: [
      "Computed tomography",
      "Magnetic resonance imaging (MRI)",
      "Conventional digital subtraction angiography (DSA)",
      "Transcranial Doppler ultrasonography",
      "Positron emission tomography (PET)"
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Which of the following is not true about the Glasgow Coma Scale?",
    options: [
      "Should include respiration pattern.",
      "It is calculated based on motor, verbal, and eye-opening responses.",
      "The maximum possible score is 15.",
      "The minimum possible score is 3.",
      "A score of 8 or less typically indicates a severe brain injury."
    ],
    correctAnswer: 0
  },
  {
    category: "BRAIN SURGERY",
    question: "Which of the following statements regarding pituitary apoplexy is correct?",
    options: [
      "It results from haemorrhagic necrosis or infarction of a pituitary tumour.",
      "It always presents with a gradual, painless decline in visual acuity over several months.",
      "It is primarily managed with high-dose, long-term oral anticoagulant therapy.",
      "It is standardly diagnosed using an emergent abdominal ultrasound.",
      "It typically causes a massive hypersecretion of thyroid hormones into circulation."
    ],
    correctAnswer: 0
  },

  // OB&GYN
  {
    category: "OB&GYN",
    question: "Which of the following is the primary trigger for the LH surge that occurs in the middle of the menstrual cycle?",
    options: [
      "Estradiol level remaining above 200 pg/mL for at least 36-48 hours",
      "A steep drop in circulating progesterone levels",
      "A gradual increase in follicular inhibin B secretion",
      "A sudden spike in pulsatile GnRH frequency alone without estrogen exposure",
      "A sustained rise in serum testosterone to androgenic levels"
    ],
    correctAnswer: 0
  },

  // GENETICS
  {
    category: "GENETICS",
    question: "Which of the following is pure dominant?",
    options: [
      "Huntington disease",
      "Fragile syndrome",
      "Achondroplasia",
      "Cystic fibrosis",
      "Hemophilia"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which of the following chromosomal abnormality are more frequently observed in population?",
    options: [
      "Down Syndrome",
      "22q11 deletion syndrome",
      "Patau Syndrome",
      "Edwards Syndrome",
      "9q34 deletion syndrome"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which of the following hematological disease inherited X-recessive?",
    options: [
      "Hemophilia A",
      "Edwards Syndrome",
      "Hemophilia C",
      "Patau Syndrome",
      "Huntington Disease"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which disorder is an example of autosomal recessive inheritance?",
    options: [
      "Cystic Fibrosis",
      "Achondroplasia",
      "Duchenne Muscular Dystrophy",
      "Myotonic Dystrophy",
      "Huntington Disease"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which AZF mutation is treatable?",
    options: [
      "AZFc",
      "AZFa",
      "AZFb",
      "AZFd",
      "AZFe"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "What is the best medical definition of cancer?",
    options: [
      "Uncontrolled cell proliferation and spread",
      "Uncontrolled cell proliferation",
      "Healthy cells",
      "Uncontrolled cell growth",
      "Wrongly written, correct form is Cancer and it is a zodiac sign. Cancer people are emotional and protective"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "A patient is diagnosed with colon cancer at the age of 22. In his family, 10 relatives have had cancer: 4 with colon cancer, 5 with lung cancer, and 1 with brain cancer. The physician suspects a hereditary cancer syndrome. Which of the following is NOT a typical feature of hereditary cancers?",
    options: [
      "Usually appear at an older age",
      "Can affect different organs within the same family",
      "Usually appear at an early age",
      "Can show autosomal dominant inheritance",
      "Often involve multiple generations"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which of the following gene mutations are more commonly observed in patients with hyperlipidaemia?",
    options: [
      "LDLR",
      "LDLRAP1",
      "PCSK9",
      "CR7R",
      "APOB"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Molecular analysis of sporadic colorectal carcinomas shows that a tumor suppressor gene involved in the Wnt/β-catenin signaling pathway is mutated in approximately 80% of cases, making it the most common genetic alteration in colorectal cancer. Mutation in which of the following genes best explains this finding?",
    options: [
      "APC",
      "TP53",
      "ELVIS",
      "PRESLEY",
      "KRAS"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "A 17-year-old patient is found to have hundreds to thousands of adenomatous polyps throughout the colon during screening colonoscopy. The condition follows an autosomal dominant inheritance pattern, and if left untreated, the lifetime risk of colorectal cancer approaches 100%. A germline mutation in which of the following genes is most likely responsible for this condition?",
    options: [
      "APC",
      "MUTYH",
      "SMAD4",
      "SINATRA",
      "TP53"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "How is Duchenne muscular dystrophy inherited?",
    options: [
      "X-linked recessive",
      "Autosomal dominant",
      "Autosomal recessive",
      "X-linked dominant",
      "Mitochondrial inheritance"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which disease is caused by an FGFR3 mutation?",
    options: [
      "Achondroplasia",
      "Hypochondroplasia",
      "Osteogenesis imperfecta",
      "Marfan syndrome",
      "Neurofibromatosis type 1"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "Which of the following is not a trinucleotide repeat disorder?",
    options: [
      "Alzheimer's disease",
      "Huntington's disease",
      "Fragile X syndrome",
      "Myotonic dystrophy",
      "Spinal and bulbar muscular atrophy (Kennedy's disease)"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "In the context of prenatal care, which of the following procedures is categorized as a screening tool rather than a definitive diagnostic test?",
    options: [
      "NIPT (Non-Invasive Prenatal Testing)",
      "Chorionic villus sampling (CVS)",
      "Amniocentesis",
      "Cordocentesis (Percutaneous umbilical blood sampling)",
      "Preimplantation genetic testing (PGT)"
    ],
    correctAnswer: 0
  },
  {
    category: "GENETICS",
    question: "In a patient diagnosed with amyotrophic lateral sclerosis (ALS), it has been determined that the protection of neurons against superoxide anion free radicals and glutamate toxicity is impaired. Which of the following genes is most likely to be mutated in this patient?",
    options: [
      "SOD1 gene",
      "SOD2 gene",
      "FUS gene",
      "SOD3 gene",
      "ANG gene"
    ],
    correctAnswer: 0
  },

  // INTERNAL MEDICINE
  {
    category: "INTERNAL MEDICINE",
    question: "A 60-year-old female patient is being followed with a diagnosis of rheumatoid arthritis. Routine checkup reveals Hb: 10.5 g/dL, low serum Fe, low transferrin saturation, MCV: 78 fL (N: 80-100), low reticulocyte count, and normal leukocyte and platelet counts. What is your diagnosis for the patient?",
    options: [
      "Anemia of chronic disease",
      "Iron deficiency anemia",
      "Sideroblastic anemia",
      "Warm-type autoimmune hemolytic anemia",
      "Thalassemia minor"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "A 65-year-old woman presented with complaints of fatigue and weight loss. She is not taking any medications regularly. She underwent partial gastrectomy 25 years ago for peptic ulcer bleeding. Tests revealed hemoglobin (Hb) levels of 7.2 g/dl, MCV levels of 70 fL, a reticulocyte count of 1.2%, and a low MCHC. Peripheral blood smear revealed anisocytosis, hypochromia, and microcytosis. No atypical cells were detected. The stool was positive for occult blood. What is your diagnosis for this patient?",
    options: [
      "Iron deficiency anemia",
      "B12 deficiency",
      "Anemia of chronic disease",
      "Hereditary spherocytosis",
      "Aplastic anemia"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "A 65-year-old man complains of weakness and fatigue. He has had back pain for the past month. Physical examination is unremarkable. Tests revealed: Hb: 8.5 g/dL, MCV: 90 fL, WBC: 5,500/mm3, platelet: 210,000 mm3, sedimentation rate: 95 mm/h, creatinine: 1.6 mg/dL, calcium: 11.2 mg/dL, total protein: 9.5 g/dL (N: 6-8.3), and albumin: 3.0 g/dL. A thoracolumbar radiograph taken for back pain revealed a compressed fracture of the T12 vertebra and multiple lytic lesions on the ribs. What is your diagnosis for the patient?",
    options: [
      "Multiple Myeloma",
      "Iron deficiency anemia",
      "Thalassemia minor",
      "Hereditary spherocytosis",
      "Anemia of chronic disease"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true for Paroxysmal Nocturnal Hemoglobinuria? I. Transformation to aplastic anemia is not observed. II. There is a loss of CD55 and CD59 complement in the cell membrane. III. There is a PIG-A gene defect. IV. Patients experience dark urine in the morning due to episodic hemoglobinuria. V. Transformation to acute leukemia is not observed.",
    options: [
      "II, III, IV",
      "I and II",
      "III, IV and V",
      "IV and V",
      "I and V"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "For which of the following reasons would a rightward shift in the hemoglobin-oxygen (p50) dissociation curve be expected?",
    options: [
      "Increase in 2,3-diphosphoglycerate (2-3 DPG)",
      "pH increase (alcali)",
      "Decreased 2-3 DPG",
      "Decreased temperature",
      "CO poisoning"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true regarding celiac disease?",
    options: [
      "HLA-DQ2 and HLA-DQ8 are positive in all patients.",
      "A high-gluten diet is recommended for treatment.",
      "The most common involvement is seen in the lower esophagus.",
      "Patients experience involuntary weight gain.",
      "Constipation is the dominant symptom in all patients."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is not one of the mutations seen in Hereditary Nonpolyposis Colorectal Cancer Syndrome (Lynch Syndrome)?",
    options: [
      "K-RAS",
      "PMS-2",
      "EPCAM",
      "MSH-2",
      "MLH-1"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "What is the most common cause of acute pancreatitis?",
    options: [
      "Gallstones",
      "Hypercalcemia",
      "Medications",
      "Trauma",
      "Hypertriglyceridemia"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true regarding HBV infection?",
    options: [
      "HBsAg is the first antigen to become positive.",
      "Anti-HBs becomes positive in the early phase.",
      "Anti-HBc IgM appears during the chronic phase.",
      "HBsAg never becomes negative during the window period.",
      "Anti-HBc IgG always becomes positive in the early phase."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true regarding colorectal polyps?",
    options: [
      "APC, KRAS, and β-catenin mutations are seen in neoplastic adenomas.",
      "No molecular mutations are observed in serrated polyps.",
      "None of the polyps carry a risk of malignancy.",
      "There is no need to resect polyps during endoscopic examination.",
      "A one-time lifetime colonoscopy is sufficient for all patients with polyps."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true regarding complications of Crohn's disease?",
    options: [
      "One of the most important complications, abscess, must be evaluated with CT or MRI.",
      "If an obstruction due to Crohn's disease occurs, the case can be monitored without treatment.",
      "Toxic megacolon is the most common complication in Crohn's disease.",
      "Colonoscopy should be performed immediately in Crohn-related toxic megacolon.",
      "Fistulas caused by Crohn's disease most commonly drain into the lungs."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true for ulcerative colitis?",
    options: [
      "Only the colon is involved.",
      "Segmental involvement is observed.",
      "The entire gastrointestinal tract can be involved.",
      "Appendectomy has no effect on disease progression.",
      "Smoking worsens the disease."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is the most common cause of upper gastrointestinal bleeding?",
    options: [
      "Peptic ulcer",
      "Hemorrhoid",
      "Diverticulum",
      "Rectal ulcer",
      "Ischemic colitis"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true regarding scoring systems used to determine the prognosis of cirrhosis?",
    options: [
      "Creatinine is not included in the Child-Pugh score.",
      "INR is only included in the Child-Pugh score.",
      "Total protein is part of the MELD-Na score.",
      "Hepatic encephalopathy is present in all three scoring systems.",
      "Potassium (K⁺) is included in MELD 3.0."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is not an alarm symptom of gastroesophageal reflux disease (GERD)?",
    options: [
      "Retrosternal burning",
      "Dysphagia",
      "Vomiting",
      "Odynophagia",
      "Iron deficiency anemia in a patient over 50 years of age"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following drugs does not cause acquired nephrogenic diabetes insipidus?",
    options: [
      "Bevacizumab",
      "Lithium",
      "Demeclocycline",
      "Amphotericin B",
      "Foscarnet"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true for Type 2 Diabetes mellitus?",
    options: [
      "A case with random plasma glucose ≥ 200 mg/dL and with classic symptoms of diabetes (polyuria, polydipsia, weight loss) is diagnosed with Type 2 DM.",
      "A fasting plasma glucose level between 100 mg/dL and 125 mg/dL is sufficient for a definitive diagnosis of diabetes.",
      "Autoimmune destruction of pancreatic beta cells by anti-GAD antibodies is the primary cause.",
      "It is standardly diagnosed when a 2-hour oral glucose tolerance test (OGTT) value is exactly 120 mg/dL.",
      "Patients almost always present with severe ketoacidosis as their initial clinical manifestation."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following medications belongs to the biguanide group of antidiabetic drugs?",
    options: [
      "Metformin",
      "Glyburide",
      "Glipizide",
      "Rosiglitazone",
      "Empagliflozin"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following is true for acute renal failure (ARF)?",
    options: [
      "In prerenal failure, the BUN/creatinine ratio is >20.",
      "In intrarenal (intrinsic) acute renal failure, the fractional excretion of sodium (FENa) is typically less than 1%.",
      "In postrenal failure, urine osmolality is characteristically very high, usually exceeding 500 mOsm/kg.",
      "Prerenal acute renal failure is most commonly caused by direct toxic injury to the renal tubular epithelial cells.",
      "In intrinsic acute renal failure, the urine sediment is completely normal and free of any casts or cellular debris."
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "A 42-year-old woman presents with progressive dyspnea and a dry cough for the past 4 months. She also reports intermittent dysphagia. Her history includes hypertension, gastroesophageal reflux disease (GERD), and Raynaud's phenomenon. Blood pressure is 145/90 mmHg, and other vital signs are normal. On physical examination, there is skin thickening and induration on the face, hands, arms, and trunk. On lung auscultation, diffuse fine crackles are heard. What is the most likely diagnosis?",
    options: [
      "Diffuse cutaneous systemic sclerosis",
      "Limited cutaneous systemic sclerosis",
      "Systemic lupus erythematosus (SLE)",
      "Polymyositis",
      "Mixed connective tissue disease (MCTD)"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "A 30-year-old woman presents with oral ulcers. She has had multiple painful aphthous lesions in the oral mucosa for the past few days. One month earlier, she had visited an ophthalmologist with complaints of blurred vision and was diagnosed with anterior uveitis. She has been under gynecological follow-up for recurrent lesions in the genital area for the past 2 years. On physical examination, tender and firm nodular lesions are palpated on her legs. What is the most likely diagnosis?",
    options: [
      "Behçet's disease",
      "Systemic lupus erythematosus (SLE)",
      "Crohn's disease",
      "Herpes simplex virus (HSV) infection",
      "Reiter's syndrome (Reactive arthritis)"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "A 70-year-old woman presents with headache, fatigue, and weight loss. She also reports morning stiffness and pain in her shoulders. On physical examination, there is tenderness in the left temporal region, and a thickened temporal artery is palpated. Erythrocyte sedimentation rate (ESR) is 90 mm/hour. Which of the following complications is most likely to be seen in this patient?",
    options: [
      "Aortic aneurysm",
      "Myocardial infarction",
      "Mesenteric ischemia",
      "Vision loss",
      "Ischemic stroke"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following biochemical findings is seen in acute or chronic adrenal insufficiency?",
    options: [
      "Hyponatremia",
      "Hyperkalemia",
      "Hyperglycemia",
      "Hypercalcemia",
      "Hypokalemia"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "Which of the following pathologies has a low RAIU (Radioactive Iodine Uptype)?",
    options: [
      "Thyrotoxicosis factitial",
      "Graves' disease",
      "Toxic multinodular goiter",
      "Toxic adenoma",
      "TSH-secreting pituitary adenoma"
    ],
    correctAnswer: 0
  },
  {
    category: "INTERNAL MEDICINE",
    question: "A 22-year-old woman presents with pain in her hands and wrists for the past 5 weeks. She reports approximately 30 minutes of morning stiffness upon waking. She also complains of myalgia and marked fatigue. Temperature is 38.0°C, blood pressure is 150/95 mmHg, and other vital signs are normal. On physical examination, the MCP and PIP joints are mildly swollen and tender. There are several painless ulcers on the buccal mucosa. Bilateral cervical and axillary lymphadenopathy is present. Laboratory findings: Hb: 9.8 g/dL Platelets: 85,000/mm³ Leukocytes: 4,000/mm³ Hand radiographs show no erosions. Urinalysis reveals 20-25 erythrocytes per high-power field and 2+ proteinuria. Serum creatinine is normal. What is the most likely diagnosis?",
    options: [
      "Systemic lupus erythematosus (SLE)",
      "Rheumatoid arthritis",
      "Mixed connective tissue disease (MCTD)",
      "Adult-onset Still's disease (AOSD)",
      "Infective endocarditis"
    ],
    correctAnswer: 0
  },

  // ENT
  {
    category: "ENT",
    question: "Which of the following statements about ENT examination are correct? I. Skin lesions can be detected especially by inspection. II. The structure of neck masses can be assessed by palpation. III. The submandibular and submental region is defined as Zone (Level) 2.",
    options: [
      "I-II",
      "III",
      "I-III",
      "I-II-III",
      "II-III"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "In a patient with a palpable neck mass, which of the following features suggest malignancy? I. Presence of trismus and difficulty in swallowing II. The lesion being located in Zone II III. Color change in the overlying skin of the lesion IV. The lesion being firm and fixed",
    options: [
      "I-III-IV",
      "II-III-IV",
      "II-III",
      "I-II-III",
      "I-III"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following are findings suggestive of complications in a patient with otitis media? I. Hyperemia and increased vascularity of the tympanic membrane II. Facial paralysis III. Vertigo IV. Altered consciousness and vomiting",
    options: [
      "II-III-IV",
      "III-IV",
      "I-III-IV",
      "I-II-III",
      "I-III"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following is the weakest part of the tympanic membrane?",
    options: [
      "Pars flaccida",
      "Pars tensa",
      "Umbo",
      "Anterior malleolar fold",
      "Posterior malleolar fold"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following is the first step in the pathogenesis of sinusitis?",
    options: [
      "Obstruction of the sinus ostium",
      "Mucosal thickening",
      "Bone erosion",
      "Loss of mucociliary function",
      "Proliferation of anaerobic bacteria"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following findings is essential for the diagnosis of acute otitis media?",
    options: [
      "Middle ear effusion + signs of inflammation",
      "Tympanic membrane perforation",
      "Dizziness /Vertigo",
      "Findings of otitis externa",
      "Unilateral tinnitus"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following is the most common site of origin for anterior epistaxis?",
    options: [
      "Kiesselbach plexus",
      "Terminal branches of the sphenopalatine artery",
      "Posterior ethmoidal artery region",
      "Woodruff plexus",
      "Upper lateral region of the anterior nasal septum"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "A 10-year-old boy presents with fever (38.5° C), sore throat, difficulty swallowing, and fatigue for the last two days. Physical examination reveals erythematous tonsils with white exudates and tenderness of the anterior cervical lymph nodes. There is no cough or nasal discharge. What is the most likely diagnosis for this patient?",
    options: [
      "Streptococcal tonsillopharyngitis",
      "Acute herpangina",
      "Acute epiglottitis",
      "Infectious mononucleosis",
      "Viral tonsillitis"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "What is the primary function of the vestibulo-ocular reflex (VOR)?",
    options: [
      "Stabilizing the image on the retina",
      "Maintaining balance while standing still",
      "Controlling rapid eye movements during sleep",
      "Regulating the pupil's response to changing light",
      "Coordinating eye movements for tracking fast-moving objects"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "What is the main mechanism in the pathogenesis of benign paroxysmal positional vertigo (BPPV)?",
    options: [
      "Displacement of otoconia",
      "Inflammation of the vestibular nerve",
      "Excessive accumulation of endolymph within the inner ear",
      "Ischemia of the anterior vestibular artery",
      "Perilymphatic fistula formation at the oval window"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "A 25-year-old patient presents with a painless, cystic mass located in the lateral neck, anterior to the sternocleidomastoid muscle. The mass appeared after an upper respiratory infection. What is the most likely diagnosis?",
    options: [
      "Branchial cleft cyst",
      "Thyroglossal duct cyst",
      "Cystic hygroma (Lymphangioma)",
      "Dermoid cyst",
      "Laryngocele"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "At what dB level does the stapes reflex response, which plays a role in protecting the inner ear against acoustic trauma that may be caused by loud noises, occur?",
    options: [
      "85-90 dB",
      "70-80 dB",
      "90-110 dB",
      "60-70 dB",
      "110-120 dB"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following tests can be used to determine the level and type of hearing loss?",
    options: [
      "Pure tone audiogram",
      "Tympanometry",
      "Otoacoustic emissions (OAE)",
      "Auditory brainstem response (ABR)",
      "Weber and Rinne tuning fork tests"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following statements is true regarding adult neck masses?",
    options: [
      "They are considered metastatic malignancy until proven otherwise.",
      "They are most commonly caused by congenital or branchial cleft remnants.",
      "They are almost always benign inflammatory lymph nodes secondary to pharyngitis.",
      "Biopsy should be avoided completely due to the high risk of tumor seeding.",
      "They are typically managed with immediate surgical excision without prior imaging."
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following is not one of the four main clinical features of Meniere's disease?",
    options: [
      "Vertical nystagmus",
      "Tinnitus",
      "Vertigo",
      "A feeling of fullness in the ear",
      "Fluctuating hearing loss"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following statements about ENT examination are correct? I. The finding of crepitation on palpation during nasal examination supports bone fracture. II. An idea about the structure of the neck masses can be obtained by palpation. III. Submandibular and submental regions are defined as Zone (Level) 6.",
    options: [
      "I-II",
      "I-II-III",
      "II",
      "I-III",
      "I"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following is not a finding suggestive of a complication in a patient with otitis media? I. Hyperemia and increased vascularity in the tympanic membrane II. Facial paralysis III. Balance problems (vertigo) IV. Blurred vision",
    options: [
      "I",
      "I-III",
      "III-IV",
      "II-III-IV",
      "I-II-III"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following is the most common benign tumor of the salivary glands?",
    options: [
      "Pleomorphic adenoma",
      "Mucoepidermoid carcinoma",
      "Adenoid cystic carcinoma",
      "Warthin tumor",
      "Basaloid adenoma"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which one of the followings is not related to Head and Neck Cancer Epidemiology?",
    options: [
      "Hepatitis B Virus",
      "Epstein Barr Virus (EBV)",
      "Alcohol use",
      "Smoking",
      "Human papillomavirus (HPV)"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following symptoms and signs is not seen in vestibular neuritis?",
    options: [
      "Neurologic deficit",
      "Nausea",
      "Vomiting",
      "Vertigo",
      "Spontaneous nystagmus"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which structure in the inner ear detect linear movements of the head?",
    options: [
      "Utricle",
      "Anterior semicircular canal",
      "Lateral semicircular canal",
      "Posterior semicircular canal",
      "Cochlear ducts"
    ],
    correctAnswer: 0
  },
  {
    category: "ENT",
    question: "Which of the following statements about the physiology of hearing is false?",
    options: [
      "The basic structure related to hearing in the inner ear is the organ of Corti located in the scala vestibule.",
      "The auricle collects the sound coming from the external environment and transmits it to the tympanic membrane with some amplification.",
      "Energy that reaches the tympanic membrane is transferred to the manubrium mallei.",
      "Mechanical sound energy I converted into electrical energy in the cochlea.",
      "The base of the stapes carries the sound to the inner ear through the oval window."
    ],
    correctAnswer: 0
  },

  // RADIOLOGY
  {
    category: "RADIOLOGY",
    question: "A 28-year-old woman who is 14 weeks pregnant presents to the emergency department with 5 hours of abdominal pain that began in the periumbilical region and migrated to the right lower quadrant. She also reports fever, nausea, and vomiting. On physical examination, there is guarding and rebound tenderness in the right lower quadrant leukocytosis and an elevated C-reactive protein level. Which of the following is the most appropriate initial imaging modality?",
    options: [
      "Ultrasonography",
      "Computed Tomography (CT)",
      "Upright abdominal X-ray",
      "Supine abdominal plain film",
      "Fluoroscopy"
    ],
    correctAnswer: 0
  },
  {
    category: "RADIOLOGY",
    question: "Which imaging modality is the most sensitive in a patient with suspected pulmonary embolism?",
    options: [
      "Pulmonary computed tomography angiography (CTA)",
      "Fluoroscopic examination",
      "PET-CT",
      "Thoracic magnetic resonance imaging (MRI)",
      "Thoracic ultrasonography"
    ],
    correctAnswer: 0
  },
  {
    category: "RADIOLOGY",
    question: "Which agent is used to visualize the gastrointestinal tract, makes the digestive tract radiopaque, and is not absorbed from the gastrointestinal tract?",
    options: [
      "Barium sulfate",
      "Sodium biphosphate",
      "Technetium",
      "Iodine-131 (I-131)",
      "Gadolinium"
    ],
    correctAnswer: 0
  },
  {
    category: "RADIOLOGY",
    question: "Which of the following statements is correct regarding the distinction between microadenomas and macroadenomas of pituitary adenomas and their imaging features?",
    options: [
      "The most sensitive imaging modality for detecting pituitary microadenomas is dynamic contrast-enhanced pituitary MRI.",
      "Microadenomas are defined as tumors greater than 10 mm in diameter, while macroadenomas are less than 10 mm.",
      "Pituitary macroadenomas usually do not cause any mass effect on adjacent structures like the optic chiasm.",
      "On non-contrast T1-weighted MRI sequences, microadenomas are typically hyperintense relative to the normal pituitary gland.",
      "Pituitary macroadenomas always show intense, immediate contrast enhancement compared to the surrounding normal pituitary tissue."
    ],
    correctAnswer: 0
  },
  {
    category: "RADIOLOGY",
    question: "A 27-year-old woman presents to the emergency department with sudden-onset severe lower abdominal pain and nausea. Pelvic ultrasonography reveals a 7-cm right ovary with a heterogeneous appearance and peripherally arranged follicles. On color Doppler ultrasonography, no venous flow is detected in the right ovary, while arterial flow is weakly present. Which of the following is the most likely diagnosis for this patient?",
    options: [
      "Ovarian torsion",
      "Ectopic pregnancy",
      "Ruptured ovarian cyst",
      "Pelvic inflammatory disease (PID)",
      "Acute appendicitis"
    ],
    correctAnswer: 0
  },
  {
    category: "RADIOLOGY",
    question: "A 45-year-old female patient presents with a 5-month history of bilateral wrist and metacarpophalangeal (MCP) joint pain, swelling, and morning stiffness lasting more than 1 hour. Laboratory tests show positive rheumatoid factor (RF) and anti-cyclic citrullinated peptide (anti-CCP) antibodies, with elevated CRP levels. Hand radiographs demonstrate periarticular osteopenia, symmetric joint space narrowing, and marginal erosions. What is the most likely diagnosis?",
    options: [
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Psoriatic arthritis",
      "Gouty arthritis",
      "Systemic lupus erythematosus (SLE)"
    ],
    correctAnswer: 0
  },
  {
    category: "RADIOLOGY",
    question: "A 15-year-old male patient presents with pain around the knee. On plain radiography, metaphyseal lesion is detected that shows cortical destruction and a periosteal reaction with a 'sunburst' appearance. Which of the following diagnoses is the most likely based on these findings?",
    options: [
      "Osteosarcoma",
      "Ewings sarcoma",
      "Osteochondroma",
      "Chondrosarcoma",
      "Giant cell tumor"
    ],
    correctAnswer: 0
  },

  // RADIATION ONCOLOGY
  {
    category: "RADIATION ONCOLOGY",
    question: "Which of the following is a late side effect of radiotherapy?",
    options: [
      "Fibrosis",
      "Nausea and vomiting",
      "Diarrhea",
      "Erythema and edema",
      "Mucositis"
    ],
    correctAnswer: 0
  },
  {
    category: "RADIATION ONCOLOGY",
    question: "Which of the following statements about the indirect effect of ionizing radiation is correct?",
    options: [
      "It interacts with intracellular water molecules to produce free radicals",
      "It interacts directly with DNA",
      "It does not occur with very low-energy radiation",
      "It completely inhibits DNA repair",
      "It occurs only with proton radiation"
    ],
    correctAnswer: 0
  },

  // NUCLEAR MEDICINE
  {
    category: "NUCLEAR MEDICINE",
    question: "Which of the following correctly lists a radioactive substance that can be used for therapeutic purposes in the management of thyroid gland diseases?",
    options: [
      "Iodine-131",
      "Technetium-99m",
      "Iodine-123",
      "Iodine-125",
      "Thallium-201"
    ],
    correctAnswer: 0
  },
  {
    category: "NUCLEAR MEDICINE",
    question: "Which of the following correctly describes the nuclear medicine method used in the evaluation of obstructive urinary pathologies and the radiopharmaceutical used for this method?",
    options: [
      "Dynamic Renal Scintigraphy – Tc99m MAG3",
      "Static Renal Scintigraphy – Tc-99m DMSA",
      "Dynamic Renal Scintigraphy – Tc-99m DTPA with no diuretic administration",
      "Thyroid Scintigraphy – Tc-99m Pertechnetate",
      "Bone Scintigraphy – Tc-99m MDP"
    ],
    correctAnswer: 0
  },
  {
    category: "NUCLEAR MEDICINE",
    question: "A 45-year-old patient presents to the emergency department complaining of swelling, redness, and increased temperature in the right leg. A Three-Phase Bone Scintigraphy is requested to determine whether the infection is limited only to the soft tissue (cellulitis) or has progressed to the bone tissue (osteomyelitis). Which of the following is the typical scintigraphic finding that confirms the diagnosis of osteomyelitis in this patient?",
    options: [
      "Increased activity (hot spots) observed in the bone tissue across all three phases: 1st phase (perfusion), 2nd phase (blood pool), and 3rd phase (delayed bone phase).",
      "Increased activity in the 1st phase (perfusion) and 2nd phase (blood pool), but normal or minimally increased uptake in the 3rd phase (delayed bone phase).",
      "Decreased activity (cold spots) in the bone tissue across all three phases.",
      "Increased activity only in the 1st phase (perfusion) and 2nd phase (blood pool) with no uptake in the 3rd phase.",
      "Increased activity only in the 3rd phase (delayed bone phase), with normal perfusion and blood pool phases."
    ],
    correctAnswer: 0
  },
  {
    category: "NUCLEAR MEDICINE",
    question: "A 65-year-old patient presenting with widespread bone pain is diagnosed with 'Multiple myeloma'. Staging of the skeletal system and screening for lytic lesions are planned. Which of the following statements is true regarding the role and limitations of conventional bone scintigraphy (e.g., using Tc-99m MDP) in the skeletal imaging of multiple myeloma patients?",
    options: [
      "Since multiple myeloma lesions are purely osteolytic (bone-destructive) and are not accompanied by new bone formation, bone scintigraphy can yield false-negative (normal) results; therefore, modalities like PET/CT or Whole-Body MRI should be preferred.",
      "Bone scintigraphy is highly sensitive for multiple myeloma lesions because they stimulate intense osteoblastic remodeling that shows up as marked hyperfixation.",
      "Conventional bone scintigraphy is the gold standard imaging modality for staging multiple myeloma and is always preferred over low-dose whole-body CT.",
      "False-negative results on bone scintigraphy only occur in the skull, while lesions in the spine and pelvis are always detected with high sensitivity.",
      "Because multiple myeloma lesions cause generalized osteosclerosis, bone scintigraphy will uniformly show a diffuse increase in tracer uptake throughout the entire skeleton ('super scan')."
    ],
    correctAnswer: 0
  }
];

// Export for use in Node.js or modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = examQuestions;
}

/** Treatment services with full detail-page sections per disease */

const ICONS = ['stethoscope', 'shieldCheck', 'heartPulse', 'calendar']

export const TREATMENT_SERVICES = [
  {
    slug: 'fever-viral-infection',
    title: 'Fever & Viral Infection Treatment',
    shortTitle: 'Fever',
    subtitle: 'Accurate diagnosis and safe recovery plans for viral and bacterial fevers.',
    icon: 'stethoscope',
    intro:
      'Expert evaluation of fever with clear guidance on medicines, hydration, and when escalation is needed—especially for children and seniors.',
  },
  {
    slug: 'diabetes-management',
    title: 'Diabetes Management & Treatment',
    shortTitle: 'Diabetes',
    subtitle: 'Blood sugar monitoring, lifestyle plans, and medication support.',
    icon: 'heartPulse',
    intro:
      'Structured diabetes care with regular reviews, HbA1c tracking coordination, and practical diet advice for everyday life in Badarpur.',
  },
  {
    slug: 'hypertension-treatment',
    title: 'High Blood Pressure (Hypertension) Treatment',
    shortTitle: 'Hypertension',
    subtitle: 'BP control, risk assessment, and long-term heart health.',
    icon: 'heartPulse',
    intro:
      'Personalised hypertension management to reduce stroke and heart risk—with home BP diary support and medication reviews.',
  },
  {
    slug: 'thyroid-disorder',
    title: 'Thyroid Disorder Treatment',
    shortTitle: 'Thyroid Disorder',
    subtitle: 'Hypothyroid, hyperthyroid, and goitre evaluation with lab coordination.',
    icon: 'shieldCheck',
    intro:
      'Thyroid symptom assessment, test interpretation, and dose adjustments explained clearly for lasting energy and metabolic balance.',
  },
  {
    slug: 'cough-cold-flu',
    title: 'Cough, Cold & Flu Treatment',
    shortTitle: 'Cough, Cold & Flu',
    subtitle: 'Relief for upper respiratory symptoms with sensible antibiotic use.',
    icon: 'stethoscope',
    intro:
      'Differentiation between viral colds and bacterial infections—so you receive the right treatment without unnecessary antibiotics.',
  },
  {
    slug: 'stomach-infection-acidity',
    title: 'Stomach Infection & Acidity Treatment',
    shortTitle: 'Stomach Infection & Acidity',
    subtitle: 'Gastritis, food poisoning, reflux, and digestive discomfort.',
    icon: 'stethoscope',
    intro:
      'Assessment of abdominal pain, acidity, diarrhoea, and vomiting with hydration advice and diet modifications that work at home.',
  },
  {
    slug: 'health-checkup-preventive',
    title: 'Health Checkup & Preventive Care',
    shortTitle: 'Preventive Health Checkup',
    subtitle: 'Routine screenings and wellness visits for all ages.',
    icon: 'shieldCheck',
    intro:
      'Proactive checkups to catch issues early—vitals, risk review, and lab referrals tailored to your age and family history.',
  },
  {
    slug: 'respiratory-asthma',
    title: 'Respiratory Problems & Asthma Treatment',
    shortTitle: 'Respiratory Problems & Asthma',
    subtitle: 'Wheezing, breathlessness, and chronic airway care.',
    icon: 'heartPulse',
    intro:
      'Asthma and COPD-style symptom management with inhaler technique teaching and trigger avoidance plans.',
  },
  {
    slug: 'dengue-malaria-typhoid',
    title: 'Dengue, Malaria & Typhoid Treatment',
    shortTitle: 'Dengue, Malaria & Typhoid',
    subtitle: 'Seasonal fever workup and monitored recovery in endemic areas.',
    icon: 'calendar',
    intro:
      'Fever panels, platelet monitoring guidance, and treatment aligned with local seasonal illness patterns in Delhi NCR.',
  },
  {
    slug: 'weakness-fatigue-vitamin',
    title: 'Weakness, Fatigue & Vitamin Deficiency Treatment',
    shortTitle: 'Weakness & Fatigue',
    subtitle: 'Energy loss, anaemia screening, and nutrition correction.',
    icon: 'shieldCheck',
    intro:
      'Investigation of persistent tiredness with targeted labs and supplementation only when clinically appropriate.',
  },
]

const DETAIL_CONTENT = {
  'fever-viral-infection': {
    whatIs: {
      content:
        'Fever is a temporary rise in body temperature, usually above 37.5°C (99.5°F), often a sign that your body is fighting infection. Viral infections such as flu, COVID-like illnesses, and seasonal viruses are common causes in our community.',
      note: 'Not every fever needs antibiotics—accurate assessment prevents misuse of medicines.',
    },
    symptoms: {
      intro: 'Symptoms vary by age and cause. Seek prompt care if any severe signs appear.',
      items: [
        'Temperature above 38°C with chills or sweating',
        'Headache, body ache, and weakness',
        'Sore throat, runny nose, or cough with fever',
        'Loss of appetite and dehydration',
        'Child: irritability, poor feeding, or rash with fever',
        'Severe: confusion, stiff neck, breathing difficulty, or fever above 40°C',
      ],
    },
    causes: {
      intro: 'Identifying the cause guides safe treatment and follow-up.',
      items: [
        'Viral infections (influenza, adenovirus, seasonal viruses)',
        'Bacterial infections (throat, urine, skin, or chest—when confirmed)',
        'Post-vaccination mild fever in children',
        'Heat exhaustion or dehydration in summer',
        'Less common: dengue, malaria, typhoid in endemic seasons',
        'Drug reactions or inflammatory conditions (assessed individually)',
      ],
    },
    types: {
      items: [
        { name: 'Low-grade fever', text: '37.5–38°C, often viral; rest and fluids may suffice with medical advice.' },
        { name: 'Moderate fever', text: '38–39.5°C; may need antipyretics and evaluation for source of infection.' },
        { name: 'High fever', text: 'Above 39.5°C—especially in children, infants, and elderly—needs timely clinic review.' },
        { name: 'Prolonged fever', text: 'Fever beyond 5–7 days warrants blood tests and focused examination.' },
      ],
    },
    diagnosis: {
      intro: 'We combine clinical examination with tests only when they change management.',
      items: [
        'Temperature, pulse, BP, oxygen saturation, and throat/chest exam',
        'Blood tests: CBC, dengue/malaria/typhoid when seasonally indicated',
        'Urine or throat swab if bacterial infection suspected',
        'Chest assessment if cough or breathlessness present',
        'Follow-up timeline based on age and risk factors',
      ],
    },
    treatment: {
      intro: 'Treatment focuses on comfort, hydration, and treating the underlying cause.',
      items: [
        'Paracetamol or advised antipyretics for temperature control',
        'Oral rehydration and adequate fluids; light diet',
        'Antibiotics only when bacterial infection is confirmed',
        'Antiviral or specific therapy when clinically indicated',
        'Parent counselling for sponging, dosing, and danger signs in children',
        'Scheduled review if fever persists or new symptoms develop',
      ],
    },
    weProvide: {
      intro: 'Complete fever care under one roof at Astha Health Care.',
      items: [
        { title: 'Same-day fever consultation', text: 'Walk-in and phone booking for acute fever cases.', icon: 'calendar' },
        { title: 'Child-friendly assessment', text: 'Weight-based dosing and clear instructions for caregivers.', icon: 'stethoscope' },
        { title: 'Seasonal fever panels', text: 'Dengue/malaria/typhoid testing guidance when appropriate.', icon: 'shieldCheck' },
        { title: 'Follow-up within 48–72 hours', text: 'Ensures recovery and catches complications early.', icon: 'heartPulse' },
      ],
    },
    whenToVisit: {
      items: [
        'Fever lasting more than 3 days in adults or 24–48 hours in infants',
        'Temperature above 39°C or recurrent spikes after medicine',
        'Rash, neck stiffness, severe headache, or vomiting',
        'Breathing difficulty, chest pain, or oxygen drop',
        'Unable to drink fluids, reduced urine, or extreme drowsiness',
        'Any fever in a child under 3 months—urgent evaluation',
      ],
    },
    prevention: {
      items: [
        'Hand hygiene and mask use during local outbreaks',
        'Stay hydrated; avoid sudden temperature changes in season shifts',
        'Complete vaccinations as per age (child and adult schedules)',
        'Mosquito protection during dengue/malaria season',
        'Do not share utensils when a family member has viral fever',
        'Seek early care rather than self-medicating with repeated antibiotics',
      ],
    },
    whyChooseUs: {
      items: [
        'Clear explanation of viral vs bacterial illness before prescribing',
        'Evening and weekend hours for sudden fever in working families',
        'Consistent physician for follow-up if fever returns',
        'Practical home-care instructions in Hindi and English',
        'Affordable, transparent consultation fees at our Badarpur clinic',
      ],
    },
    faq: [
      { q: 'Should I take antibiotics for fever?', a: 'Only if a bacterial infection is likely or confirmed. Viral fevers usually do not need antibiotics.' },
      { q: 'How long does viral fever last?', a: 'Often 3–5 days. Visit us if it persists beyond that or worsens.' },
      { q: 'Can I bathe during fever?', a: 'Lukewarm sponging is fine; avoid cold baths. Follow our advice for children.' },
      { q: 'When is paracetamol enough?', a: 'Many mild viral fevers respond to paracetamol, fluids, and rest—we assess if more is needed.' },
    ],
    cta: {
      title: 'Fever not settling? Speak with us today.',
      description: 'Call for a same-day slot—we will guide tests and treatment step by step.',
    },
  },

  'diabetes-management': {
    whatIs: {
      content:
        'Diabetes is a condition where blood glucose stays elevated because the body does not produce enough insulin or cannot use it effectively. Type 2 diabetes is most common in adults; Type 1 requires lifelong insulin. Good control protects kidneys, eyes, nerves, and heart.',
    },
    symptoms: {
      intro: 'Symptoms may develop slowly—regular screening helps if you have risk factors.',
      items: [
        'Increased thirst and frequent urination',
        'Unexplained weight loss or gain',
        'Fatigue and blurred vision',
        'Slow-healing cuts or frequent infections',
        'Tingling in feet (long-standing high sugar)',
        'Many patients have no symptoms until blood tests show high glucose',
      ],
    },
    causes: {
      intro: 'Risk rises with lifestyle, genetics, and other health conditions.',
      items: [
        'Family history of diabetes',
        'Overweight, especially abdominal obesity',
        'Sedentary lifestyle and unhealthy diet',
        'Gestational diabetes history in women',
        'PCOS, hypertension, or high cholesterol',
        'Age above 40 and certain medicines (reviewed case by case)',
      ],
    },
    types: {
      items: [
        { name: 'Type 1 diabetes', text: 'Autoimmune; insulin required from diagnosis; often younger onset.' },
        { name: 'Type 2 diabetes', text: 'Insulin resistance; managed with diet, oral medicines, and sometimes insulin.' },
        { name: 'Prediabetes', text: 'Borderline sugars—lifestyle change can delay or prevent progression.' },
        { name: 'Gestational diabetes', text: 'During pregnancy; needs monitoring for mother and baby safety.' },
      ],
    },
    diagnosis: {
      intro: 'Diagnosis uses blood tests and ongoing monitoring markers.',
      items: [
        'Fasting and post-meal blood glucose',
        'HbA1c (3-month average sugar control)',
        'Kidney function, lipids, and urine albumin when indicated',
        'Foot and BP check at regular visits',
        'Eye exam referral at recommended intervals',
      ],
    },
    treatment: {
      intro: 'Plans combine diet, activity, medicines, and education—not just tablets.',
      items: [
        'Personalised meal timing and portion guidance',
        'Metformin or other oral medicines as appropriate',
        'Insulin initiation and titration when required',
        'Home glucose monitoring diary review',
        'Hypoglycaemia prevention and sick-day rules',
        'Annual complication screening coordination',
      ],
    },
    weProvide: {
      intro: 'Long-term diabetes partnership at our clinic.',
      items: [
        { title: 'HbA1c-driven reviews', text: 'Adjust treatment based on your 3-month trend, not one reading alone.', icon: 'heartPulse' },
        { title: 'Diet counselling', text: 'Practical Indian meal plans—not unrealistic restrictions.', icon: 'shieldCheck' },
        { title: 'Medication simplification', text: 'Fewer doses where safe; clear explanation of each drug.', icon: 'stethoscope' },
        { title: 'Sick-day & travel advice', text: 'How to manage sugars during illness or fasting.', icon: 'calendar' },
      ],
    },
    whenToVisit: {
      items: [
        'New thirst, urination, or weight change',
        'Fasting sugar repeatedly above 126 mg/dL or random above 200 mg/dL',
        'HbA1c above target set for you',
        'Hypoglycaemia episodes (sweating, shakiness, confusion)',
        'Foot wound, numbness, or swelling in diabetes',
        'Before starting or changing any diabetes medicine',
      ],
    },
    prevention: {
      items: [
        'Maintain healthy weight and 150+ minutes activity weekly',
        'Limit sugary drinks, refined flour, and late-night heavy meals',
        'Screen annually if family history or age over 35',
        'Manage BP and cholesterol together with glucose',
        'Avoid tobacco; sleep 7–8 hours where possible',
        'Follow up prediabetes with structured lifestyle support',
      ],
    },
    whyChooseUs: {
      items: [
        'Same doctor tracks your sugars and medicines over years',
        'Lab coordination without unnecessary repeat tests',
        'Evening appointments for working patients with diabetes',
        'Child and adult family members can be counselled together',
        'Referral to specialists only when truly needed',
      ],
    },
    faq: [
      { q: 'Can diabetes be cured?', a: 'Type 2 may go into remission with major lifestyle change; most need ongoing monitoring. Type 1 always needs insulin.' },
      { q: 'How often should I check HbA1c?', a: 'Typically every 3 months until stable, then as advised—often every 6 months.' },
      { q: 'Can I eat fruit?', a: 'Yes, in controlled portions—we guide timing with meals and medicines.' },
      { q: 'Do I need insulin immediately?', a: 'Not always. Many Type 2 patients start with diet and oral medicines first.' },
    ],
    cta: {
      title: 'Take control of your blood sugar.',
      description: 'Book a diabetes review—bring your last lab report and home readings if you have them.',
    },
  },

  'hypertension-treatment': {
    whatIs: {
      content:
        'Hypertension means persistently raised blood pressure. It often has no symptoms but damages arteries, heart, kidneys, and brain over time. Target BP depends on age and other illnesses—usually below 140/90 mmHg for many adults, stricter if diabetes is present.',
    },
    symptoms: {
      intro: 'Most people feel normal until complications develop—hence BP checks matter.',
      items: [
        'Often no symptoms at early stages',
        'Headache, dizziness, or nosebleeds (not reliable signs alone)',
        'Chest tightness or shortness of breath if heart strain',
        'Blurred vision with very high BP',
        'Anxiety from home monitor readings—needs proper technique teaching',
      ],
    },
    causes: {
      intro: 'Primary and secondary causes are considered during evaluation.',
      items: [
        'Primary (essential) hypertension—lifestyle and genetics',
        'High salt intake, obesity, alcohol excess, stress',
        'Kidney disease, thyroid issues, sleep apnoea (secondary causes)',
        'Certain painkillers and decongestants can raise BP',
        'Family history increases lifetime risk',
      ],
    },
    types: {
      items: [
        { name: 'Stage 1 hypertension', text: 'Mild elevation—lifestyle plus possible single medicine.' },
        { name: 'Stage 2 hypertension', text: 'Higher readings—usually combination therapy and closer follow-up.' },
        { name: 'Hypertensive urgency', text: 'Very high BP without organ damage—needs prompt clinic management.' },
        { name: 'Resistant hypertension', text: 'Poor control on multiple drugs—review adherence, salt, and secondary causes.' },
      ],
    },
    diagnosis: {
      intro: 'Accurate measurement avoids over- or under-treatment.',
      items: [
        'Resting BP on both arms at repeat visits',
        'Home BP diary (morning/evening) for 5–7 days',
        'Basic kidney tests, ECG when indicated',
        'Review of current medicines including OTC drugs',
        'Assessment for diabetes, cholesterol, and smoking',
      ],
    },
    treatment: {
      intro: 'Lifestyle and medicines work together for lasting control.',
      items: [
        'Low-salt diet, weight loss if overweight, regular walking',
        'ACE inhibitors, ARBs, calcium channel blockers, or diuretics as suited',
        'Once-daily regimens when possible for adherence',
        'Morning vs evening dosing advice for your schedule',
        'Avoid sudden medicine stops—rebound high BP risk',
        'Annual kidney and metabolic monitoring on long-term drugs',
      ],
    },
    weProvide: {
      intro: 'BP care designed for long-term adherence.',
      items: [
        { title: 'Home BP training', text: 'Correct cuff size, posture, and log format.', icon: 'heartPulse' },
        { title: 'Minimal pill burden', text: 'Combination tablets where appropriate.', icon: 'shieldCheck' },
        { title: 'Diabetes + BP joint plans', text: 'Kidney-safe medicines when both conditions present.', icon: 'stethoscope' },
        { title: 'Medication review', text: 'Check interactions with arthritis or cold medicines.', icon: 'calendar' },
      ],
    },
    whenToVisit: {
      items: [
        'BP repeatedly above 140/90 at home or clinic',
        'Headache with BP above 180/110',
        'Pregnancy or planning pregnancy—needs special medicines',
        'Dizziness after starting new BP tablet',
        'Leg swelling, cough, or fatigue on medicines',
        'Annual review even if feeling well',
      ],
    },
    prevention: {
      items: [
        'Reduce table salt and packaged snacks',
        '30 minutes brisk walk most days',
        'Limit alcohol; manage work stress with sleep',
        'Maintain waist circumference in healthy range',
        'Check BP yearly after age 30; more often if family history',
        'Take prescribed medicines daily—not only when BP feels high',
      ],
    },
    whyChooseUs: {
      items: [
        'We explain your target BP in simple terms',
        'Badarpur clinic with flexible follow-up for medicine adjustments',
        'No unnecessary hospital referrals for stable hypertension',
        'Coordination with labs you already use',
        'Respectful counselling on salt in Indian home cooking',
      ],
    },
    faq: [
      { q: 'Can I stop medicine if BP is normal?', a: 'Usually no—stopping suddenly can rebound. Discuss tapering only with your doctor.' },
      { q: 'Is hypertension lifelong?', a: 'Often yes, but lifestyle can reduce medicine dose in some people.' },
      { q: 'Which salt is better?', a: 'Less total salt matters more than pink vs white—we guide daily limits.' },
      { q: 'Does stress cause high BP?', a: 'It contributes; relaxation helps but rarely replaces medicines if BP stays high.' },
    ],
    cta: {
      title: 'Get your blood pressure on track.',
      description: 'Bring your home BP diary to your visit—we will fine-tune your plan.',
    },
  },

  'thyroid-disorder': {
    whatIs: {
      content:
        'Thyroid disorders affect the gland in your neck that controls metabolism. Hypothyroidism (underactive) slows the body; hyperthyroidism (overactive) speeds it up. Goitre and nodules may need ultrasound and specialist input.',
    },
    symptoms: {
      intro: 'Symptoms overlap with stress and anaemia—we use tests to confirm.',
      items: [
        'Hypothyroid: weight gain, cold intolerance, constipation, dry skin, hair fall',
        'Hyperthyroid: weight loss, heat intolerance, tremor, palpitations, anxiety',
        'Irregular periods in women',
        'Neck swelling or pressure sensation',
        'Fatigue common in both—needs TSH interpretation',
      ],
    },
    causes: {
      intro: 'Autoimmune disease is the most common cause in adults.',
      items: [
        'Hashimoto’s thyroiditis (hypothyroid)',
        'Graves’ disease or toxic nodule (hyperthyroid)',
        'Iodine deficiency or excess (region dependent)',
        'Postpartum thyroiditis',
        'Medicines such as amiodarone or lithium',
        'Prior thyroid surgery or radiation',
      ],
    },
    types: {
      items: [
        { name: 'Hypothyroidism', text: 'Low hormones—levothyroxine replacement is standard.' },
        { name: 'Hyperthyroidism', text: 'Excess hormone—antithyroid drugs, radioiodine, or surgery per severity.' },
        { name: 'Subclinical thyroid disease', text: 'Mild TSH change—watch or treat based on symptoms and age.' },
        { name: 'Thyroid nodules', text: 'Often benign; require ultrasound and sometimes FNAC referral.' },
      ],
    },
    diagnosis: {
      intro: 'Blood tests are central; imaging when the neck exam suggests it.',
      items: [
        'TSH, free T4, sometimes free T3',
        'Anti-TPO antibodies for autoimmune hypothyroid',
        'Neck examination and ultrasound referral if nodule',
        'Heart rate and BP for hyperthyroid assessment',
        'Repeat tests 6–8 weeks after dose changes',
      ],
    },
    treatment: {
      intro: 'Treatment matches the type and your age, pregnancy status, and heart health.',
      items: [
        'Levothyroxine dosing on empty stomach with water',
        'Antithyroid medicines for hyperthyroid with blood count monitoring',
        'Beta-blockers short term for palpitations if needed',
        'Avoid self-adjusting dose—small changes matter',
        'Pregnancy-specific targets and referral when pregnant',
        'Specialist referral for large goitre or suspected cancer',
      ],
    },
    weProvide: {
      intro: 'Thyroid follow-up with clear lab timelines.',
      items: [
        { title: 'Dose titration visits', text: 'Scheduled after every new prescription strength.', icon: 'shieldCheck' },
        { title: 'Symptom diary review', text: 'Energy, weight, pulse—linked to your TSH trend.', icon: 'heartPulse' },
        { title: 'Medicine timing counselling', text: 'Separation from calcium/iron supplements.', icon: 'stethoscope' },
        { title: 'Referral coordination', text: 'Endocrinology when nodule or pregnancy complexity arises.', icon: 'calendar' },
      ],
    },
    whenToVisit: {
      items: [
        'New neck swelling or rapidly changing symptoms',
        'Palpitations, weight change, or eye symptoms',
        'TSH outside target on last report',
        'Planning pregnancy with known thyroid disease',
        'Started levothyroxine—review in 6–8 weeks',
        'Severe sore throat while on antithyroid drugs',
      ],
    },
    prevention: {
      items: [
        'Take thyroid medicine at the same time daily',
        'Do not buy duplicate brands without discussing equivalence',
        'Regular TSH monitoring even when feeling well',
        'Adequate iodine through diet—not excess supplement',
        'Report new medicines to your doctor—some affect thyroid tests',
        'Postpartum women: screen if fatigue or mood changes persist',
      ],
    },
    whyChooseUs: {
      items: [
        'We interpret TSH trends, not isolated numbers',
        'Practical advice on taking thyroxine with morning routine',
        'Stable doctor relationship for years of dose tweaks',
        'Local lab coordination in Badarpur',
        'Honest referral when specialist opinion is safer',
      ],
    },
    faq: [
      { q: 'Is thyroid disease lifelong?', a: 'Hypothyroidism usually needs long-term thyroxine. Some hyperthyroid causes remit after treatment.' },
      { q: 'Can I eat cabbage?', a: 'Normal cooked amounts are fine; extreme raw intake only matters in iodine deficiency.' },
      { q: 'Why weight change with normal TSH?', a: 'Other factors matter—we check adherence, dose timing, and non-thyroid causes.' },
      { q: 'How soon do I feel better?', a: 'Often weeks after correct hypothyroid dose; hyperthyroid improvement varies by treatment.' },
    ],
    cta: {
      title: 'Thyroid symptoms or reports to review?',
      description: 'Book a consultation with your latest TSH report.',
    },
  },

  'cough-cold-flu': {
    whatIs: {
      content:
        'Cough, cold, and flu are upper respiratory illnesses, usually viral. Flu tends to cause higher fever and body aches; colds are milder. Cough may persist after the infection clears due to airway irritation.',
    },
    symptoms: {
      intro: 'Duration and severity help us decide on tests and medicines.',
      items: [
        'Runny or blocked nose, sneezing',
        'Dry or productive cough',
        'Sore throat and hoarse voice',
        'Low to moderate fever with flu-like aches',
        'Headache and mild chest discomfort',
        'Wheezing or breathlessness needs urgent assessment',
      ],
    },
    causes: {
      intro: 'Viruses cause most cases; bacteria a minority.',
      items: [
        'Rhinovirus, influenza, parainfluenza, RSV',
        'Seasonal air pollution worsening symptoms in Delhi NCR',
        'Allergic rhinitis mimicking “permanent cold”',
        'Secondary bacterial sinusitis after prolonged congestion',
        'Post-viral cough hypersensitivity',
        'GERD (acidity) causing night cough',
      ],
    },
    types: {
      items: [
        { name: 'Common cold', text: 'Mild, 5–7 days; supportive care.' },
        { name: 'Influenza-like illness', text: 'Higher fever, aches; may need antiviral if early and high-risk.' },
        { name: 'Acute bronchitis', text: 'Chest cough with or without phlegm; often viral.' },
        { name: 'Chronic cough', text: 'Over 8 weeks—needs structured workup.' },
      ],
    },
    diagnosis: {
      intro: 'Examination first; tests when symptoms suggest complications.',
      items: [
        'Throat, ear, lung examination and oxygen check',
        'Chest auscultation for wheeze or pneumonia signs',
        'Avoid routine antibiotics for plain viral cold',
        'X-ray or blood tests if prolonged fever or breathlessness',
        'Allergy and asthma history review',
      ],
    },
    treatment: {
      intro: 'Relief of symptoms plus monitoring for red flags.',
      items: [
        'Steam, warm fluids, rest, and throat soothing measures',
        'Paracetamol for fever and aches',
        'Saline nasal rinse and decongestants short term if advised',
        'Cough syrups selected by cough type (dry vs wet)',
        'Antibiotics only for confirmed bacterial sinusitis or pneumonia',
        'Inhalers if wheeze or asthma flare triggered by infection',
      ],
    },
    weProvide: {
      intro: 'Sensible respiratory care without antibiotic overuse.',
      items: [
        { title: 'Cough classification', text: 'Dry, wet, or spasmodic—medicine matched accordingly.', icon: 'stethoscope' },
        { title: 'Flu season advice', text: 'When to isolate and protect elderly at home.', icon: 'shieldCheck' },
        { title: 'Child cough dosing', text: 'Age-appropriate syrups and nebulisation guidance.', icon: 'calendar' },
        { title: 'Pollution tips', text: 'Mask and indoor air steps for Badarpur smog days.', icon: 'heartPulse' },
      ],
    },
    whenToVisit: {
      items: [
        'Fever beyond 3 days or breathlessness',
        'Chest pain, blood in sputum, or wheezing',
        'Cough longer than 3 weeks',
        'Ear pain, facial pain, or thick green discharge over 10 days',
        'Infant under 3 months with cough',
        'High-risk patient (elderly, pregnancy, chronic lung disease)',
      ],
    },
    prevention: {
      items: [
        'Annual flu vaccine for eligible adults and children',
        'Hand washing; avoid close contact when actively febrile',
        'Cover cough; ventilate rooms',
        'Manage allergies and asthma plans before season change',
        'Do not smoke; avoid second-hand smoke for children',
        'Humidifier cleaning to prevent mould exposure',
      ],
    },
    whyChooseUs: {
      items: [
        'We reserve antibiotics for clear bacterial indications',
        'Experience with Delhi seasonal cough patterns',
        'Clear return precautions explained at checkout',
        'Affordable follow-up if cough persists',
        'Same-day visits for worsening symptoms',
      ],
    },
    faq: [
      { q: 'Is coloured phlegm always bacterial?', a: 'No—colour alone does not mean antibiotics are needed.' },
      { q: 'Can I take antibiotics left from last time?', a: 'No—wrong drug and dose risks resistance and side effects.' },
      { q: 'How long should cough last?', a: 'Post-viral cough can take 2–3 weeks; visit if worsening or new fever.' },
      { q: 'Is honey safe for cough?', a: 'Often helpful for adults; ask about infants under 1 year.' },
    ],
    cta: {
      title: 'Cough or cold bothering you?',
      description: 'Walk in or call—we will assess lungs and prescribe only what you need.',
    },
  },

  'stomach-infection-acidity': {
    whatIs: {
      content:
        'Stomach infections and acidity include gastritis, food poisoning, gastroenteritis, and acid reflux (GERD). Symptoms range from brief diarrhoea to chronic burning chest or upper abdominal pain.',
    },
    symptoms: {
      intro: 'Location and timing of pain guide diagnosis.',
      items: [
        'Upper abdominal burning or gnawing pain',
        'Nausea, vomiting, or loss of appetite',
        'Loose stools, cramps, or urgency (infection)',
        'Bloating and belching',
        'Acid taste in mouth or night cough (reflux)',
        'Blood in vomit or stool—urgent care',
      ],
    },
    causes: {
      intro: 'Infection, irritation, and lifestyle factors often combine.',
      items: [
        'Contaminated food or water (bacterial/viral gastroenteritis)',
        'Helicobacter pylori associated gastritis',
        'NSAID painkillers, alcohol, spicy or irregular meals',
        'Stress and smoking worsening acidity',
        'Gallstone or pancreatic issues if pain severe (ruled out when needed)',
        'Lactose or food intolerance in some patients',
      ],
    },
    types: {
      items: [
        { name: 'Acute gastroenteritis', text: 'Sudden diarrhoea/vomiting—fluids and diet key.' },
        { name: 'Gastritis / ulcer disease', text: 'Burning pain, H. pylori or medicine related.' },
        { name: 'GERD (acid reflux)', text: 'Heartburn rising to throat, worse lying down.' },
        { name: 'Functional dyspepsia', text: 'Fullness and discomfort with normal tests.' },
      ],
    },
    diagnosis: {
      intro: 'Most cases need history and exam; tests for persistent or alarm symptoms.',
      items: [
        'Abdominal examination and hydration status',
        'Stool test if bloody diarrhoea or high fever',
        'H. pylori breath or stool test when ulcer suspected',
        'Trial of acid suppression with follow-up',
        'Referral for endoscopy if alarm features or age over 50 with new symptoms',
      ],
    },
    treatment: {
      intro: 'Rehydration first; then targeted medicines and diet.',
      items: [
        'ORS and light diet during acute diarrhoea',
        'Antacids, H2 blockers, or PPIs for acidity as advised',
        'Anti-nausea medicines short course if needed',
        'Antibiotics only for confirmed bacterial dysentery or typhoid',
        'H. pylori eradication course when diagnosed',
        'Meal timing and trigger food avoidance for reflux',
      ],
    },
    weProvide: {
      intro: 'Digestive care with practical diet advice.',
      items: [
        { title: 'Dehydration assessment', text: 'IV referral only when oral fluids insufficient.', icon: 'heartPulse' },
        { title: 'Ulcer & reflux plans', text: 'Correct duration of acid medicines—not endless PPI without review.', icon: 'shieldCheck' },
        { title: 'Food safety counselling', text: 'Especially during monsoon food poisoning season.', icon: 'stethoscope' },
        { title: 'Medicine interaction check', text: 'Painkillers adjusted if they hurt your stomach.', icon: 'calendar' },
      ],
    },
    whenToVisit: {
      items: [
        'Blood in vomit or stool, or black tarry stools',
        'Severe abdominal pain or rigid abdomen',
        'Vomiting unable to keep fluids down over 12 hours',
        'High fever with diarrhoea in elderly or child',
        'Weight loss or difficulty swallowing',
        'Chest pain mimicking acidity—needs ECG when unclear',
      ],
    },
    prevention: {
      items: [
        'Eat freshly cooked food; avoid stale street food in heat',
        'Wash hands before meals; safe drinking water',
        'Limit NSAIDs on empty stomach',
        'Smaller evening meals; elevate head if reflux',
        'Moderate spice and alcohol',
        'Complete H. pylori treatment course if prescribed',
      ],
    },
    whyChooseUs: {
      items: [
        'We distinguish infection from simple acidity quickly',
        'Clear ORS and diet sheets for families',
        'Avoid unnecessary broad antibiotics for stomach bugs',
        'Follow-up to stop long-term acid medicines when safe',
        'Convenient clinic access during sudden gastroenteritis',
      ],
    },
    faq: [
      { q: 'Should I stop eating during diarrhoea?', a: 'Continue light foods and ORS—fasting worsens weakness.' },
      { q: 'Is lemon good for acidity?', a: 'Triggers vary—note what worsens your symptoms.' },
      { q: 'How long to take PPI?', a: 'Duration depends on diagnosis—we review to prevent long-term overuse.' },
      { q: 'Can stress cause stomach pain?', a: 'Yes—it can flare gastritis and reflux; treatment addresses both.' },
    ],
    cta: {
      title: 'Stomach pain or acidity flaring up?',
      description: 'Visit us for hydration check and a tailored treatment plan.',
    },
  },

  'health-checkup-preventive': {
    whatIs: {
      content:
        'Preventive health checkups aim to find risk factors and early disease before symptoms appear. They include vitals, history review, examination, and age-appropriate lab screening—not a one-size-fits-all package.',
    },
    symptoms: {
      intro: 'Preventive visits are for people often feeling well—some “symptoms” are risk factors.',
      items: [
        'No symptoms—routine wellness visit',
        'Family history of diabetes, heart disease, or cancer',
        'Tiredness prompting “full body checkup”',
        'Weight gain, snoring, or low fitness',
        'Pre-employment or insurance paperwork',
        'Age milestones: 30, 40, 50+ screening thresholds',
      ],
    },
    causes: {
      intro: 'Why screening matters in urban South Delhi lifestyles.',
      items: [
        'Rising diabetes and hypertension in younger adults',
        'Sedentary work and processed food habits',
        'Air pollution affecting respiratory health',
        'Stress-related sleep and metabolic issues',
        'Missed childhood or adult vaccinations',
        'Anaemia and vitamin D deficiency common in labs',
      ],
    },
    types: {
      items: [
        { name: 'Basic wellness visit', text: 'Vitals, exam, targeted advice—minimal labs.' },
        { name: 'Adult annual checkup', text: 'Sugar, lipids, CBC, liver/kidney as per age.' },
        { name: 'Senior health review', text: 'Falls risk, medicines review, BP and sugar monitoring.' },
        { name: 'Child growth check', text: 'Weight, height, milestones, vaccination status.' },
      ],
    },
    diagnosis: {
      intro: 'We order tests that change action—not every marketed panel.',
      items: [
        'BP, weight, BMI, waist circumference',
        'Fasting glucose, HbA1c if risk factors',
        'Lipid profile for cardiovascular risk',
        'CBC, vitamin D, B12 when symptoms suggest',
        'Thyroid, liver, kidney based on history',
        'ECG or chest evaluation if cardiac risk',
      ],
    },
    treatment: {
      intro: 'Prevention means lifestyle plus early treatment of findings.',
      items: [
        'Personalised diet and activity prescription',
        'Vaccination catch-up (flu, hepatitis, others as indicated)',
        'Start treatment for newly found hypertension or diabetes',
        'Iron or vitamin supplementation when deficient',
        'Referral for colon, cervical, or breast screening per guidelines',
        'Repeat labs at sensible intervals—not monthly unnecessary tests',
      ],
    },
    weProvide: {
      intro: 'Checkups that respect your budget and health goals.',
      items: [
        { title: 'Risk-based packages', text: 'Labs chosen by age and history—not oversized corporate panels.', icon: 'shieldCheck' },
        { title: 'Report explanation visit', text: 'We explain each result and next step in plain language.', icon: 'stethoscope' },
        { title: 'Family screening', text: 'Couple or parent-child visits on same day when possible.', icon: 'calendar' },
        { title: 'Ongoing monitoring', text: 'Book follow-up for any abnormal finding—not just a paper report.', icon: 'heartPulse' },
      ],
    },
    whenToVisit: {
      items: [
        'No checkup in over 12 months while over age 30',
        'Family history of early heart attack or diabetes',
        'Planning pregnancy—pre-conception review',
        'New job or insurance medical form',
        'Persistent fatigue despite rest',
        'Child due for growth or vaccination review',
      ],
    },
    prevention: {
      items: [
        'Annual BP and weight check minimum',
        'Screen sugars every 1–3 years based on risk',
        '30+ minutes physical activity most days',
        'Fruits, vegetables, and adequate protein daily',
        'Sleep 7–8 hours; limit late screens',
        'Avoid tobacco; moderate alcohol',
      ],
    },
    whyChooseUs: {
      items: [
        'We avoid selling unnecessary “full body” tests',
        'Same doctor interprets and treats abnormal results',
        'Evening slots for working professionals',
        'Continuity if you need chronic care later',
        'Local, trusted clinic in Badarpur',
      ],
    },
    faq: [
      { q: 'Which checkup package is best?', a: 'Depends on age and risks—we customise rather than one fixed package.' },
      { q: 'Fasting needed?', a: 'Some tests need 8–12 hour fast—we tell you exactly which ones.' },
      { q: 'How often repeat labs?', a: 'Normal results: yearly or as advised. Abnormal: sooner follow-up.' },
      { q: 'Are health checkups covered by insurance?', a: 'Varies by policy—bring your card; we help where possible.' },
    ],
    cta: {
      title: 'Book your preventive health review.',
      description: 'Call to schedule a checkup—we will list any fasting tests in advance.',
    },
  },

  'respiratory-asthma': {
    whatIs: {
      content:
        'Respiratory problems include asthma, bronchitis, allergic airway disease, and COPD in smokers. Asthma causes reversible airway narrowing with wheeze, cough, and chest tightness—often worse at night or early morning.',
    },
    symptoms: {
      intro: 'Pattern of symptoms over time supports diagnosis.',
      items: [
        'Wheezing or whistling breath sound',
        'Recurrent cough, worse at night',
        'Chest tightness after dust, smoke, or exercise',
        'Shortness of breath during attacks',
        'Symptoms relieved by inhaler (suggests asthma)',
        'Frequent chest infections in smokers (COPD overlap)',
      ],
    },
    causes: {
      intro: 'Airway inflammation and triggers vary by patient.',
      items: [
        'Allergens: dust mites, pollen, mould, pet dander',
        'Delhi NCR air pollution and winter smog',
        'Viral infections triggering asthma flares',
        'Exercise-induced bronchospasm',
        'Occupational fumes or smoke exposure',
        'Family history of asthma or allergies',
      ],
    },
    types: {
      items: [
        { name: 'Allergic asthma', text: 'Linked to rhinitis and eczema; trigger avoidance helps.' },
        { name: 'Exercise-induced', text: 'Symptoms during sport; pre-treatment inhaler plan.' },
        { name: 'Occupational asthma', text: 'Work-related exposure—needs environment change.' },
        { name: 'COPD / smoker’s lung', text: 'Usually older, progressive; inhalers plus smoking cessation.' },
      ],
    },
    diagnosis: {
      intro: 'Clinical history plus lung exam; spirometry referral when needed.',
      items: [
        'Peak flow or spirometry when available',
        'Response to bronchodilator trial',
        'Chest exam and oxygen saturation',
        'Allergy history and medication review',
        'Chest X-ray if diagnosis unclear or pneumonia suspected',
        'Differentiate from heart-related breathlessness',
      ],
    },
    treatment: {
      intro: 'Controller and reliever inhalers are cornerstone of asthma care.',
      items: [
        'Reliever (SABA) inhaler for acute symptoms—spacer technique taught',
        'Controller (ICS/LABA) daily when moderate persistent asthma',
        'Written asthma action plan for worsening symptoms',
        'Treat associated allergic rhinitis',
        'Oral steroids short course only for severe flares',
        'Smoking cessation support for COPD patients',
      ],
    },
    weProvide: {
      intro: 'Inhaler teaching and pollution-season planning.',
      items: [
        { title: 'Spacer demonstration', text: 'Especially for children and elderly.', icon: 'stethoscope' },
        { title: 'Trigger diary', text: 'Identify dust, weather, or food links.', icon: 'shieldCheck' },
        { title: 'Flare action plan', text: 'Green/yellow/red zones on one page.', icon: 'calendar' },
        { title: 'Vaccination advice', text: 'Flu and pneumococcal vaccines when indicated.', icon: 'heartPulse' },
      ],
    },
    whenToVisit: {
      items: [
        'Reliever inhaler needed more than twice a week',
        'Night waking with cough or wheeze',
        'Breathlessness speaking full sentences',
        'Blue lips, drowsiness, or peak flow in red zone',
        'Fever with asthma—possible infection trigger',
        'New wheeze in infant—needs prompt assessment',
      ],
    },
    prevention: {
      items: [
        'Use controller inhaler daily if prescribed—do not stop when well',
        'Avoid tobacco smoke indoors',
        'Mask on high AQI days; air purifier if affordable',
        'Regular dust control for bedding',
        'Warm-up before exercise if exercise-induced',
        'Annual flu vaccine for asthmatics',
      ],
    },
    whyChooseUs: {
      items: [
        'We teach inhaler technique at every visit',
        'Practical advice for Badarpur pollution seasons',
        'Avoid over-reliance on oral steroids',
        'Follow-up after every flare to adjust controllers',
        'Child and adult asthma experience in primary care',
      ],
    },
    faq: [
      { q: 'Can asthma be cured?', a: 'Often well controlled; many children improve with age. Controllers prevent damage.' },
      { q: 'Is nebuliser better than inhaler?', a: 'Equivalent drug can be given—proper inhaler technique is often enough.' },
      { q: 'Can I exercise?', a: 'Yes—with pre-treatment plan if exercise-induced symptoms occur.' },
      { q: 'Steroid inhalers safe long term?', a: 'Low-dose inhaled steroids are safer than repeated oral steroids or untreated asthma.' },
    ],
    cta: {
      title: 'Wheezing or breathlessness?',
      description: 'Book for lung exam and inhaler training—bring your current medicines.',
    },
  },

  'dengue-malaria-typhoid': {
    whatIs: {
      content:
        'Dengue, malaria, and typhoid are infectious diseases common in monsoon and post-monsoon seasons in India. All can present with fever—they need different tests and treatments; self-medicine without diagnosis is risky.',
    },
    symptoms: {
      intro: 'Overlap of fever makes laboratory confirmation important.',
      items: [
        'High fever with chills (malaria pattern may be periodic)',
        'Headache, eye pain, body ache (dengue)',
        'Weakness, abdominal pain, rose spots (typhoid)',
        'Nausea, vomiting, rash in dengue',
        'Bleeding gums or nose when platelets low (dengue warning)',
        'Confusion or cold limbs—emergency',
      ],
    },
    causes: {
      intro: 'Different organisms and transmission routes.',
      items: [
        'Dengue: Aedes mosquito, daytime bite',
        'Malaria: Anopheles mosquito, often evening/night',
        'Typhoid: Salmonella in contaminated food/water',
        'Stagnant water breeding mosquitoes near home',
        'Travel to endemic areas without prophylaxis',
        'Seasonal peaks after rains in Delhi NCR',
      ],
    },
    types: {
      items: [
        { name: 'Dengue fever', text: 'NS1/antibody tests; platelet monitoring critical.' },
        { name: 'Malaria', text: 'Blood smear or rapid test; species guides treatment.' },
        { name: 'Typhoid fever', text: 'Blood culture or Widal interpreted carefully.' },
        { name: 'Mixed or sequential infection', text: 'Possible in season—do not assume one diagnosis.' },
      ],
    },
    diagnosis: {
      intro: 'Timely tests save complications—especially dengue platelet drop.',
      items: [
        'Dengue NS1 early; IgM later in illness',
        'Malaria rapid test and smear',
        'Typhoid blood culture when suspected; CBC and liver tests',
        'Daily platelet and haematocrit tracking in dengue',
        'Ultrasound or referral if warning signs (fluid leakage)',
        'Avoid blind antibiotics before diagnosis',
      ],
    },
    treatment: {
      intro: 'Treatment is disease-specific—paracetamol for fever; avoid ibuprofen in dengue unless cleared.',
      items: [
        'Dengue: fluids, rest, monitor platelets; hospital if warning signs',
        'Malaria: antimalarial medicine per species and local resistance pattern',
        'Typhoid: appropriate antibiotics for duration advised',
        'No aspirin/NSAIDs in suspected dengue',
        'Treat dehydration aggressively with ORS/IV if needed',
        'Follow-up labs until stable',
      ],
    },
    weProvide: {
      intro: 'Seasonal fever protocol at our clinic.',
      items: [
        { title: 'Fever panel counselling', text: 'Which test on day 1 vs day 3 of illness.', icon: 'calendar' },
        { title: 'Platelet tracking', text: 'Clear chart for family on when to return.', icon: 'heartPulse' },
        { title: 'Referral triggers', text: 'Honest hospital referral if home care unsafe.', icon: 'shieldCheck' },
        { title: 'Recovery review', text: 'Post-dengue fatigue and diet guidance.', icon: 'stethoscope' },
      ],
    },
    whenToVisit: {
      items: [
        'Any fever during dengue season—test early',
        'Persistent fever over 3 days despite medicine',
        'Vomiting, severe abdominal pain, or bleeding',
        'Dizziness, low urine, or not drinking',
        'After positive malaria or typhoid—complete treatment course',
        'Child or elderly with high fever—lower threshold to visit',
      ],
    },
    prevention: {
      items: [
        'Mosquito nets, repellents, full sleeves in evening',
        'Remove stagnant water around home weekly',
        'Typhoid vaccine for high-risk individuals',
        'Safe boiled/filtered water and hygienic food',
        'Community awareness during outbreaks',
        'Do not store unused antibiotics for “fever season”',
      ],
    },
    whyChooseUs: {
      items: [
        'Experience with local dengue season volumes',
        'Structured platelet follow-up forms for families',
        'We explain when home care is safe vs hospital',
        'Correct antimalarial choice per latest guidelines',
        'Available for daily review during acute illness',
      ],
    },
    faq: [
      { q: 'Is every monsoon fever dengue?', a: 'No—malaria, typhoid, viral flu, and others coexist. Testing clarifies.' },
      { q: 'Can papaya leaf cure dengue?', a: 'Not proven to replace medical monitoring—focus on fluids and platelet checks.' },
      { q: 'When is hospital needed?', a: 'Warning signs: severe pain, vomiting, bleeding, restlessness, low platelets—we advise clearly.' },
      { q: 'Can malaria relapse?', a: 'Some species can—complete treatment and follow-up smear if advised.' },
    ],
    cta: {
      title: 'Seasonal fever? Test early, recover safely.',
      description: 'Call on day one of fever—we will schedule tests and monitoring.',
    },
  },

  'weakness-fatigue-vitamin': {
    whatIs: {
      content:
        'Weakness and fatigue mean reduced energy for daily tasks—not always “laziness.” Causes include anaemia, thyroid disease, diabetes, vitamin D or B12 deficiency, poor sleep, depression, and chronic illness.',
    },
    symptoms: {
      intro: 'Describe duration and associated symptoms for accurate workup.',
      items: [
        'Tiredness despite adequate sleep',
        'Muscle weakness climbing stairs or carrying weight',
        'Dizziness on standing (anaemia or BP)',
        'Pale skin, brittle nails, hair fall',
        'Tingling feet (B12 deficiency)',
        'Low mood or poor concentration overlapping fatigue',
      ],
    },
    causes: {
      intro: 'Often multiple factors in the same patient.',
      items: [
        'Iron-deficiency anaemia (diet, periods, hidden blood loss)',
        'Vitamin D and B12 deficiency',
        'Hypothyroidism or uncontrolled diabetes',
        'Chronic infection or inflammation',
        'Sleep apnoea, stress, depression',
        'Medicines causing fatigue as side effect',
        'Post-viral recovery including long COVID-style fatigue',
      ],
    },
    types: {
      items: [
        { name: 'Nutritional deficiency', text: 'Iron, B12, folate, vitamin D—lab proven before supplement megadoses.' },
        { name: 'Endocrine', text: 'Thyroid, diabetes, cortisol issues when suspected.' },
        { name: 'Chronic disease fatigue', text: 'Heart, kidney, lung, or rheumatologic conditions.' },
        { name: 'Functional / stress-related', text: 'After excluding organic disease; lifestyle and mental health support.' },
      ],
    },
    diagnosis: {
      intro: 'Focused labs avoid expensive unnecessary panels.',
      items: [
        'CBC for anaemia',
        'Iron studies, vitamin D, B12 as indicated',
        'TSH, glucose, kidney and liver basics',
        'BP, weight, and examination for thyroid, heart, lungs',
        'Stool occult blood if iron deficiency without clear cause',
        'Further referral if weight loss or night sweats',
      ],
    },
    treatment: {
      intro: 'Treat cause—not blanket multivitamins alone.',
      items: [
        'Iron tablets with vitamin C if iron deficient—duration until stores refill',
        'Vitamin D/B12 replacement per levels',
        'Thyroid or diabetes correction if found',
        'Sleep hygiene and stress management plan',
        'Protein-rich diet and gradual exercise rebuild',
        'Review medicines that may cause sedation',
      ],
    },
    weProvide: {
      intro: 'Fatigue workup without unnecessary fear or overspending.',
      items: [
        { title: 'Targeted lab panel', text: 'Based on symptoms—not 50-test packages.', icon: 'shieldCheck' },
        { title: 'Supplement guidance', text: 'Correct dose and duration; avoid toxicity.', icon: 'stethoscope' },
        { title: 'Diet planning', text: 'Affordable iron and protein sources for Indian diets.', icon: 'heartPulse' },
        { title: 'Follow-up energy goals', text: 'Re-test haemoglobin at expected recovery time.', icon: 'calendar' },
      ],
    },
    whenToVisit: {
      items: [
        'Fatigue over 4 weeks affecting work or daily life',
        'Dizziness, fainting, or palpitations',
        'Unintended weight loss or night sweats',
        'Heavy periods or blood in stool with tiredness',
        'Numbness, memory change, or depression symptoms',
        'Fatigue after dengue or major illness not improving',
      ],
    },
    prevention: {
      items: [
        'Balanced diet with iron sources (greens, dal, jaggery, meat if consumed)',
        'Regular outdoor sun exposure for vitamin D',
        'Treat heavy periods or GI issues causing iron loss',
        'Adequate sleep schedule',
        'Limit energy drinks as substitute for rest',
        'Periodic CBC if vegetarian or pregnant',
      ],
    },
    whyChooseUs: {
      items: [
        'We explain lab results and realistic recovery timelines',
        'Avoid pushing costly IV drips without indication',
        'Coordinate thyroid/diabetes care if fatigue is linked',
        'Sensitive discussion when stress or mood contributes',
        'Badarpur clinic with follow-up haemoglobin checks',
      ],
    },
    faq: [
      { q: 'Will multivitamins fix fatigue?', a: 'Only if deficiency exists—testing first prevents wasted money.' },
      { q: 'How long for iron tablets to work?', a: 'Energy may improve in weeks; haemoglobin refill often takes months.' },
      { q: 'Is vitamin D injection needed?', a: 'Depends on level and absorption—oral often works after loading dose.' },
      { q: 'Can fatigue be mental health?', a: 'Yes—we assess holistically and refer support when appropriate.' },
    ],
    cta: {
      title: 'Tired all the time?',
      description: 'Book a fatigue evaluation—we will plan focused tests and treatment.',
    },
  },
}

export function getServiceDetail(slug) {
  const base = TREATMENT_SERVICES.find((s) => s.slug === slug)
  const content = DETAIL_CONTENT[slug]
  if (!base || !content) return null

  const shortTitle = base.shortTitle
  return {
    ...base,
    sections: {
      whatIs: { title: `What is ${shortTitle}?`, ...content.whatIs },
      symptoms: { title: `Symptoms of ${shortTitle}`, ...content.symptoms },
      causes: { title: `Causes of ${shortTitle}`, ...content.causes },
      types: { title: `Types of ${shortTitle}`, ...content.types },
      diagnosis: { title: 'Diagnosis & Tests', ...content.diagnosis },
      treatment: { title: `${shortTitle} Treatment`, ...content.treatment },
      weProvide: { title: 'We Provide', ...content.weProvide },
      whenToVisit: { title: 'When to Visit a Doctor', ...content.whenToVisit },
      prevention: { title: 'Prevention Tips', ...content.prevention },
      whyChooseUs: { title: 'Why Choose Us', ...content.whyChooseUs },
      faq: content.faq,
    },
    cta: content.cta,
  }
}

export function getAllServiceSlugs() {
  return TREATMENT_SERVICES.map((s) => s.slug)
}

/** Legacy export for home preview — first 4 treatments */
export const SERVICES = TREATMENT_SERVICES.map(({ slug, title, subtitle, icon }) => ({
  id: slug,
  title,
  subtitle,
  icon,
  details: [subtitle],
}))

export const CARE_JOURNEY = [
  {
    title: 'Call or walk in',
    text: 'Share your concern and preferred time—we confirm availability and any documents to bring.',
    icon: 'calendar',
  },
  {
    title: 'Consultation',
    text: 'Vitals, history, and examination with a clear explanation before any test or medicine.',
    icon: 'stethoscope',
  },
  {
    title: 'Plan & follow-up',
    text: 'Written guidance, prescriptions, and a follow-up date when your condition needs monitoring.',
    icon: 'shieldCheck',
  },
  {
    title: 'Ongoing care',
    text: 'Chronic patients receive consistent reviews so treatment stays safe and effective long term.',
    icon: 'heartPulse',
  },
]

export const WHO_WE_SERVE = [
  'Children with fever, cough, or routine illness',
  'Adults needing preventive health checks',
  'Seniors managing blood pressure or diabetes',
  'Families seeking one trusted neighborhood clinic',
]

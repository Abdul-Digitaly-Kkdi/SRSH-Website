import { image } from "framer-motion/client";

import gastroenterology from '../assets/stomach.png'
import Oncology from '../assets/GI.png'
import radiology from '../assets/specialities/radiology.png'
import Pathology from '../assets/specialities/microscope.png'
import plan from '../assets/specialities/plan.png'
import Cancer from '../assets/specialities/cancer.png'
import Anesthesiology from '../assets/specialities/anesthesiology.png'
import Hepatology from '../assets/specialities/hepatology.png'
import Nurse from '../assets/specialities/nurse.png'
import Orthopedics from '../assets/joint.png';
import Physiotherapy from '../assets/specialities/physical-therapy.png';
import Diseases from '../assets/specialities/stop.png';
import Laboratory from '../assets/specialities/laboratory.png';
import Emergency from '../assets/specialities/first-aid-box.png';
import Renal from '../assets/specialities/kidneys.png';
import ICU from '../assets/specialities/emergency-room.png';
import SurgericalGastroenterology from '../assets/specialities/Surgerical-Gastroenterology.jpg';
import OrthopedicsImg from '../assets/specialities/OrthopedicsImg.jpeg';
import UrologyImg from '../assets/specialities/UrologyImg.jpeg';
import GeneralMedicine from '../assets/specialities/General-Medicine.jpg';
import Surgical from '../assets/specialities/Surgical-and-Medical-Oncology.jpg';
import CriticalCare from '../assets/specialities/Critical-Care.jpeg';
import HPBOncology from '../assets/specialities/HPB-Oncology.jpg';
import MedicalGastroenterology from '../assets/specialities/Medical-Gastroenterology.jpg';
import Generalsurgery from '../assets/specialities/General-surgery.webp';
import critical from '../assets/critical.png';
import health from '../assets/health.png';
import hospitalbed from '../assets/hospital-bed.png';

import urology from '../assets/urology.png';

export const departments = {
    "GI-&-HBP-Oncology": {
        title: "GI & HPB Oncology",
        overview: `Our GI & HPB Oncology Department focuses on diagnosing and treating cancers of the digestive system, liver, pancreas, gallbladder, and bile ducts. We provide advanced, compassionate care to patients using minimally invasive techniques and cutting-edge therapies.`,
        treatmentApproach: `We bring together surgical, medical, and radiology teams in a multidisciplinary model. Our specialists use HIPEC, laparoscopic tumor resections, and modern chemotherapy protocols to ensure precision and faster recovery, all tailored to each patient's condition.`,
        img: HPBOncology,
        specialties: [
            "Esophageal, stomach, and colorectal cancers",
            "Liver and bile duct cancers (Cholangiocarcinoma)",
            "Pancreatic and gallbladder cancers",
            "Gastrointestinal stromal tumors (GISTs)",
            "Peritoneal and small intestine malignancies"
        ],
        whyChoose: [
            "Team-based approach with surgical and medical oncologists",
            "Access to advanced treatments like HIPEC",
            "Focused expertise in rare and complex digestive cancers",
            "Personalized treatment plans and holistic recovery care"
        ],
        subSpeciality: [
            {
                icon: gastroenterology,
                name: "Surgical Gastroenterology"
            },
            {
                icon: Oncology,
                name: "Medical Oncology"
            },
            {
                icon: Oncology,
                name: "Surgical Oncology"
            },
            {
                icon: radiology,
                name: "Radiology"
            },
            {
                icon: Pathology,
                name: "Pathology"
            },
            {
                icon: plan,
                name: "Nutrition & Rehabilitation"
            },
        ]
    },

    "Surgical-and-Medical-Oncology": {
        title: "Surgical & Medical Oncology",
        overview: `Our Oncology Division addresses all types of cancers with a strong blend of medical and surgical expertise. We aim to treat cancer aggressively while preserving the patient's strength, confidence, and dignity.`,
        treatmentApproach: `We personalize each treatment using the latest in chemotherapy, immunotherapy, and targeted therapies. Surgical interventions are carried out with precision, often via minimally invasive procedures to reduce complications and promote faster healing.`,
        img: Surgical,
        specialties: [
            "Solid organ tumors (breast, lung, gastrointestinal, etc.)",
            "Cancers responsive to hormonal and immunotherapy",
            "Tumors requiring sentinel lymph node assessment",
            "Advanced stage or metastatic cancer management"
        ],
        whyChoose: [
            "Full-spectrum care from diagnosis to rehabilitation",
            "Modern medicines including targeted and immune therapies",
            "Expert tumor board reviews and multi-department care",
            "Counseling and support services throughout the journey"
        ],
        subSpeciality: [
            {
                icon: Oncology,
                name: "Medical Oncology"
            },
            {
                icon: Oncology,
                name: "Surgical Oncology"
            },
            {
                icon: radiology,
                name: "Radiology"
            },
            {
                icon: Oncology,
                name: "Oncology Pharmacy"
            },
            {
                icon: Cancer,
                name: "Cancer Rehabilitation"
            }
        ]
    },

    "Surgerical-Gastroenterology": {
        title: "Surgical Gastroenterology",
        overview: `Our Surgical Gastroenterology Department offers advanced surgical treatment for diseases of the stomach, intestines, liver, pancreas, and bile ducts. We focus on precision, safety, and rapid post-surgical recovery.`,
        treatmentApproach: `Using laparoscopic and keyhole surgical techniques, we ensure minimal pain, reduced infection risk, and faster discharge. Our team works closely with gastroenterologists and oncologists for complete care.`,
        img: SurgericalGastroenterology,
        specialties: [
            "GI cancers: esophagus, stomach, colon, rectum",
            "Liver tumors, cysts, and abscesses",
            "Chronic pancreatitis and pancreatic tumors",
            "Gallbladder, bile duct surgeries",
            "Hernia, appendix, inflammatory bowel diseases",
            "Emergency surgeries for perforations or blockages"
        ],
        whyChoose: [
            "Expert surgical team with subspecialty focus",
            "Minimally invasive techniques for most conditions",
            "In-house collaboration with critical care and oncology",
            "Pre- and post-surgical counseling and dietary support"
        ],
        subSpeciality: [
            {
                icon: gastroenterology,
                name: "Surgical Gastroenterology"
            },
            {
                icon: Anesthesiology,
                name: "Anesthesiology"
            },
            {
                icon: critical,
                name: "Critical Care"
            },
            {
                icon: plan,
                name: "Nutrition & Rehabilitation"
            }
        ]
    },

    "Medical-Gastroenterology": {
        title: "Medical Gastroenterology",
        overview: `Our Medical Gastroenterology Department manages diseases of the digestive system and liver using non-surgical, evidence-based treatments. We focus on improving gut health with precision and empathy.`,
        treatmentApproach: `We utilize diagnostic endoscopy, colonoscopy, ERCP, and motility studies to understand your condition deeply. Treatment plans are customized, combining medication, lifestyle guidance, and nutritional therapy.`,
        img: MedicalGastroenterology,
        specialties: [
            "Reflux, acidity, ulcers, IBS",
            "Fatty liver, hepatitis, cirrhosis",
            "Pancreatitis and bile duct conditions",
            "Inflammatory Bowel Diseases (IBD)",
            "GI cancers (diagnosis and early-stage management)",
            "Gut motility and absorption issues"
        ],
        whyChoose: [
            "State-of-the-art endoscopy suite",
            "Collaborative care with surgery and oncology",
            "Focused nutritional and transplant evaluations",
            "Patient-friendly and evidence-based protocols"
        ],
        subSpeciality: [
            {
                icon: gastroenterology,
                name: "Medical Gastroenterology"
            },
            {
                icon: Hepatology,
                name: "Hepatology"
            },
            {
                icon: plan,
                name: "Dietetics and Nutrition"
            },
            {
                icon: radiology,
                name: "Radiology"
            }
        ]
    },

    "General-surgery": {
        title: "General Surgery",
        overview: `Our General Surgery Department handles both routine and complex procedures with precision and a strong patient-first focus. We offer both open and minimally invasive techniques for a range of conditions.`,
        treatmentApproach: `From diagnosis to recovery, our surgeons work with specialists in gastroenterology, oncology, and critical care. We focus on safe procedures, less scarring, and faster healing.`,
        img: Generalsurgery,
        specialties: [
            "Appendicitis, gallbladder stones, hernia",
            "Thyroid, breast, and soft tissue surgeries",
            "Hemorrhoids, fistula, fissure",
            "Lipoma, cyst, and skin lump removal",
            "Emergency trauma surgeries"
        ],
        whyChoose: [
            "Safe, efficient, and patient-friendly surgical care",
            "Minimally invasive surgery for quicker recovery",
            "Comprehensive support before and after surgery"
        ],
        subSpeciality: [
            {
                icon: hospitalbed,
                name: "General Surgery"
            },
            {
                icon: Anesthesiology,
                name: "Anesthesiology"
            },
            {
                icon: Nurse,
                name: "Post-operative Nursing"
            },
            {
                icon: Oncology,
                name: "Wound Care & Rehabilitation"
            }
        ]
    },

    "Orthopedics": {
        title: "Orthopedics",
        overview: `Our Orthopedic Department treats injuries and disorders of the bones, joints, spine, and muscles. Whether it's a fracture or a joint replacement, we help restore movement and improve quality of life.`,
        treatmentApproach: `We combine minimally invasive surgeries, robotic assistance, and customized physiotherapy to help patients regain mobility quickly. Pediatric and geriatric needs are addressed with specialized protocols.`,
        img: OrthopedicsImg,
        specialties: [
            "Joint replacements (knee, hip, shoulder)",
            "Fractures and trauma",
            "Sports injuries and ligament tears",
            "Spine disorders and deformities",
            "Bone tumors and infections",
            "Pediatric bone and growth issues"
        ],
        whyChoose: [
            "Dedicated surgical and rehabilitation teams",
            "In-house imaging, surgical navigation, and physiotherapy",
            "Personalized joint care and pain management programs"
        ],
        subSpeciality: [
            {
                icon: Orthopedics,
                name: "Orthopedics"
            },
            {
                icon: Physiotherapy,
                name: "Physiotherapy"
            },
            {
                icon: radiology,
                name: "Radiology"
            },
            {
                icon: Anesthesiology,
                name: "Anesthesiology"
            }
        ]
    },

    "General-Medicine": {
        title: "General Medicine",
        overview: `Our General Medicine Department forms the backbone of adult healthcare at our hospital, treating common illnesses and managing chronic diseases across all age groups.`,
        treatmentApproach: `We emphasize early diagnosis, preventive care, and lifestyle guidance. Our general physicians coordinate with other departments for multi-specialty referrals when required.`,
        img: GeneralMedicine,
        specialties: [
            "Fevers, infections, and respiratory problems",
            "Diabetes, hypertension, and thyroid disorders",
            "Gastrointestinal and liver issues",
            "Elderly care and lifestyle-related diseases",
            "Preventive health screenings"
        ],
        whyChoose: [
            "Complete diagnostic and monitoring facilities",
            "Strong coordination with all super-specialties",
            "Focus on wellness, prevention, and long-term care"
        ],
        subSpeciality: [
            {
                icon: hospitalbed,
                name: "General Medicine"
            },
            {
                icon: Diseases,
                name: "Infectious Diseases"
            },
            {
                icon: health,
                name: "Preventive Health & Check-up"
            },
            {
                icon: Laboratory,
                name: "Internal Medicine Lab Services"
            }
        ]
    },

    "Critical-Care": {
        title: "Critical Care",
        overview: `Our Critical Care Unit provides intensive, life-saving treatment for patients in critical condition. We ensure 24/7 monitoring and emergency response with utmost precision.`,
        treatmentApproach: `Each ICU bed is supported by advanced monitoring systems, ventilators, and dialysis equipment. Our critical care team collaborates with specialists to manage organ failures, sepsis, and trauma.`,
        img: CriticalCare,
        specialties: [
            "Post-operative intensive care",
            "Organ failure and respiratory support",
            "Sepsis and life-threatening infections",
            "Trauma and emergency management",
            "Dialysis within ICU"
        ],
        whyChoose: [
            "Dedicated team of intensivists and ICU nurses",
            "Advanced equipment and infection control",
            "Personalized sedation and comfort protocols"
        ],
        subSpeciality: [
            {
                icon: ICU,
                name: "Intensive Care Unit (ICU)"
            },
            {
                icon: critical,
                name: "Critical Care Medicine"
            },
            {
                icon: Emergency,
                name: "Emergency Medicine"
            },
            {
                icon: Anesthesiology,
                name: "Respiratory Therapy"
            },
            {
                icon: Renal,
                name: "Renal Support"
            }
        ]
    },

    "Urology": {
        title: "Urology",
        overview: `Our Urology Department offers advanced diagnosis and minimally invasive treatment for urinary and reproductive system disorders in men and women.`,
        treatmentApproach: `We use laser surgeries, laparoscopy, and endoscopy for conditions like kidney stones, prostate enlargement, and infertility. Our precision-focused approach ensures reduced pain and faster recovery.`,
        img: UrologyImg,
        specialties: [
            "Kidney stones, bladder infections",
            "Prostate enlargement and urinary issues",
            "Male infertility and erectile dysfunction",
            "Congenital conditions like PUJ obstruction",
            "Urological cancers (kidney, prostate, bladder)",
            "Reconstructive urological procedures"
        ],
        whyChoose: [
            "100-watt Holmium laser for stone and prostate care",
            "State-of-the-art scopes and imaging systems",
            "Personalized and confidential care"
        ],
        subSpeciality: [
            {
                icon: urology,
                name: "Urology"
            },
            {
                icon: Renal,
                name: "Nephrology"
            },
            {
                icon: radiology,
                name: "Radiology"
            },
            {
                icon: urology,
                name: "Andrology"
            }
        ]
    }

};
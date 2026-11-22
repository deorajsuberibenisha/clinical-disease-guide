/* Icon set copied from Bhutan Clinical Reference so both apps look alike */
const SI = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const IC2 = {
  drugs: SI('<path d="M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z"/><path d="m8.5 8.5 7 7"/>'),
  guide: SI('<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/><path d="M8 7h8M8 11h6"/>'),
  calc: SI('<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8.5 11h.01M12 11h.01M15.5 11h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01M8.5 18h.01M12 18h3.5"/>'),
  emerg: SI('<path d="M3 12h4l2-5 4 10 2-5h6"/>'),
  imaging: SI('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 6v12M9 8.5c-2 0-3 1.5-3 4.5s1 4 3 4M15 8.5c2 0 3 1.5 3 4.5s-1 4-3 4M9 11h-1M9 14h-2M15 11h1M15 14h2"/>'),
  learn: SI('<path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z"/><path d="M6.5 11v5c1.6 1.4 3.4 2 5.5 2s3.9-.6 5.5-2v-5"/><path d="M21.5 9v5.5"/>'),
  med: SI('<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>'),
  child: SI('<path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>'),
  baby: SI('<path d="M8 2h8"/><path d="M9 2v2.8a4 4 0 0 1-.7 2.2l-.6 1A4 4 0 0 0 7 10.2V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.8a4 4 0 0 0-.7-2.2l-.6-1a4 4 0 0 1-.7-2.2V2"/><path d="M7 15a6.5 6.5 0 0 1 5 0 6.5 6.5 0 0 0 5 0"/>'),
  obg: SI('<circle cx="12" cy="5" r="2.5"/><path d="M12 7.5v4M9 21v-6.5a4.5 4.5 0 0 1 4.6-4.5c2.2.1 3.9 2 3.9 4.2 0 2.4-2 4.3-4.4 4.3H12v2.5"/>'),
  surg: SI('<circle cx="6" cy="6" r="3"/><path d="M8.1 8.1 12 12"/><path d="M20 4 8.1 15.9"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>'),
  ortho: SI('<path d="M17 10c.7-.7 1.7 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .8.7 1.8 0 2.5l-7 7c-.7.7-1.7 0-2.5 0a2.5 2.5 0 0 0 0 5c.3 0 .5.2.5.5a2.5 2.5 0 1 0 5 0c0-.8-.7-1.8 0-2.5Z"/>'),
  eye: SI('<path d="M2.1 12.3a1 1 0 0 1 0-.7 10.8 10.8 0 0 1 19.8 0 1 1 0 0 1 0 .7 10.8 10.8 0 0 1-19.8 0"/><circle cx="12" cy="12" r="3"/>'),
  ent: SI('<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>'),
  tooth: SI('<path d="M7 3c-2.5 0-4 2-4 4.5 0 3 1.5 4.5 2 7 .4 2.3.8 6.5 2.5 6.5S9.5 16 12 16s2.8 5 4.5 5 2.1-4.2 2.5-6.5c.5-2.5 2-4 2-7C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z"/>'),
  heart: SI('<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.1 3 5.5l7 7Z"/><path d="M3.2 12h6.3l.5-1 2 4.5 2-7 1.5 3.5h5.3"/>'),
  lung: SI('<path d="M12 3v8M12 11c0 2-2 2.5-3 2"/><path d="M12 11c0 2 2 2.5 3 2"/><path d="M8.5 7C5 7 3 12 3 16.5 3 19 4.5 20 6 20c2.5 0 3.5-1.7 3.5-4V9"/><path d="M15.5 7C19 7 21 12 21 16.5c0 2.5-1.5 3.5-3 3.5-2.5 0-3.5-1.7-3.5-4V9"/>'),
  kidney: SI('<path d="M9.5 4C6 4 4 7 4 11.5S6 20 9 20c2 0 3-1.5 3-3.5 0-1.5-1.5-2.5-1.5-4.5S12 9.5 12 8c0-2.2-1-4-2.5-4Z"/><path d="M14.5 4C18 4 20 7 20 11.5S18 20 15 20"/><path d="M12 12h3v9"/>'),
  liver: SI('<path d="M10 2v3.5A2.5 2.5 0 0 0 12.5 8h.5a7 7 0 0 1 7 7 6 6 0 0 1-6 6H9.5A5.5 5.5 0 0 1 4 15.5V15a2 2 0 0 1 4 0v.5a2 2 0 0 0 2 2h3a2.5 2.5 0 0 0 0-5h-.5"/>'),
  brain: SI('<path d="M9.5 4A3 3 0 0 0 6.5 7a3 3 0 0 0-2 5 3 3 0 0 0 1.5 5 3 3 0 0 0 3.5 3c1.4 0 2.5-1 2.5-2.5V6.5A2.5 2.5 0 0 0 9.5 4Z"/><path d="M14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1.5 5 3 3 0 0 1-3.5 3c-1.4 0-2.5-1-2.5-2.5"/><path d="M8.5 10.5h1.5M14 10.5h1.5M8 15h2M14 15h2"/>'),
  head: SI('<path d="M5 19v-3.5C3.7 14.3 3 12.6 3 10.8 3 6.5 6.6 3 11 3c4.1 0 7.5 3 7.5 7 0 .8.9 1.6 1.5 2.5l-1.5.8V16a2 2 0 0 1-2 2H15v3"/><path d="M9 8.5c1-1.3 3-1.3 4 0M8 11.5h5"/>'),
  uro: SI('<path d="M8 3c-2.8 0-4.5 2.5-4.5 6S5.2 15 8 15c1.5 0 2-1 2-2.5 0-1-1-1.8-1-3.5S10 6.5 10 5c0-1.2-.8-2-2-2Z"/><path d="M16 3c2.8 0 4.5 2.5 4.5 6S18.8 15 16 15"/><path d="M10 12l2 3v3M16 15l-4 3"/><path d="M10.5 18h3v3h-3z"/>'),
  skin: SI('<rect x="2" y="7" width="20" height="10" rx="5" transform="rotate(-35 12 12)"/><path d="M9.6 10.2h.01M12.6 9.9h.01M11.4 13.9h.01M14.4 13.6h.01"/><path d="M8.2 6.3l3 4.3M15.8 17.7l-3-4.3" opacity=".55"/>'),
  ribbon: SI('<path d="M12 11.2C11 10 10 9 10 8a2 2 0 0 1 4 0c0 1-1 2-2 3.2"/><path d="m12 18 2.6-3.5"/><path d="M6.2 9a7 7 0 0 1 11.5 0"/><path d="M9.4 14.5 12 11.2"/><path d="M9.4 14.5C7.7 12.2 6 10.2 6 7a6 5 0 0 1 12 0c0 3.2-1.8 5.2-3.4 7.5l3.5 4.5a1 1 0 0 1-.2 1.4l-1.9 1.4a1 1 0 0 1-1.4-.2L12 18l-2.7 3.6a1 1 0 0 1-1.4.2L6 20.5a1 1 0 0 1-.2-1.4z"/>'),
  gland: SI('<path d="M12 6v12"/><path d="M12 9c-1-3-4-4.5-6-3S3.5 11 5 15s5 4 7 1.5"/><path d="M12 9c1-3 4-4.5 6-3s2.5 5 1 9-5 4-7 1.5"/>'),
  joint: SI('<path d="M18 11V6a2 2 0 0 0-4 0v1"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15"/>'),
  germ: SI('<circle cx="12" cy="12" r="4.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2"/><circle cx="10.5" cy="11" r=".8" fill="currentColor"/><circle cx="13.5" cy="13.5" r=".8" fill="currentColor"/>'),
  rehab: SI('<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.4 3.5"/><path d="M4.2 14.5a5 5 0 0 0 6.9 6"/><path d="M13.8 17.5a5 5 0 0 0-6.9-6"/>'),
  people: SI('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>'),
  palliative: SI('<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.9l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.7 2.7 0 0 0 16 4a2.8 2.8 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>'),
  mind: SI('<path d="M12 5a3 3 0 1 0-5.997.1 4 4 0 0 0-2.526 5.8 4 4 0 0 0 .556 6.6A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.1 4 4 0 0 1 2.526 5.8 4 4 0 0 1-.556 6.6A4 4 0 1 1 12 18Z"/><path d="M12 9.5c-1.2-1.4-3.5-.6-3.5 1.2 0 1.8 3.5 3.8 3.5 3.8s3.5-2 3.5-3.8c0-1.8-2.3-2.6-3.5-1.2Z"/>'),
  ambul: SI('<path d="M3 16V7.5A1.5 1.5 0 0 1 4.5 6H13v10"/><path d="M13 9h4l3 4v3h-2"/><circle cx="7" cy="17" r="2"/><circle cx="16" cy="17" r="2"/><path d="M9 17h5M8 8.5v4M6 10.5h4"/>'),
  growth: SI('<path d="M3 20h18"/><path d="M5 20V12M10 20V8M15 20v-6M20 20V5"/>'),
  drop: SI('<path d="M12 2.7s6 6.4 6 11.3a6 6 0 0 1-12 0c0-4.9 6-11.3 6-11.3Z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>'),
  vent: SI('<rect x="3" y="4" width="14" height="12" rx="2"/><path d="M6 10h2l1-2.5L11 12l1-2h2"/><path d="M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5V20M7 16v4h14"/>'),
  lab: SI('<path d="M9 3h6M10 3v6.5L5 18.5A1.7 1.7 0 0 0 6.5 21h11a1.7 1.7 0 0 0 1.5-2.5L14 9.5V3"/><path d="M7.5 14h9"/>'),
  score: SI('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 3v2h8V3M8 10l2 2 3.5-4M8 16h8"/>'),
  equip: SI('<path d="M5 3v7a4 4 0 0 0 8 0V3"/><path d="M9 14v2a5 5 0 0 0 10 0v-2"/><circle cx="19" cy="12" r="2"/><path d="M4 3h2M12 3h2"/>'),
  bell: SI('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16Z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>'),
  eluna: SI('<path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5z"/><path d="M5 20.5A2.5 2.5 0 0 0 7.5 23H19v-5"/><path d="m10 12.5 4.5-4.5 1.5 1.5-4.5 4.5H10z"/>')
};
/* Same specialty list, order, icons and colours as Bhutan Clinical Reference */
const SPECS = [
  ["medicine","Medicine","med"],["paeds","Paediatrics","child"],["nicu","NICU · Neonatal Intensive Care","baby"],["picu","PICU · Paediatric Intensive Care","vent"],["neo","Neonatology","baby"],["obg","Obstetrics & Gynaecology","obg"],["surg","Surgery","surg"],["ortho","Orthopaedics","ortho"],["eye","Ophthalmology","eye"],["ent","ENT","ent"],["dental","Dental","tooth"],["cardio","Cardiology","heart"],["resp","Pulmonology & Critical Care","lung"],["neph","Nephrology","kidney"],["gi","Gastroenterology & Hepatology","liver"],["neuro","Neurology","brain"],["nsurg","Neurosurgery","head"],["uro","Urology","uro"],["derm","Dermatology & Venereology","skin"],["onc","Oncology & Haematology","ribbon"],["endo","Endocrinology & Metabolism","gland"],["rheum","Rheumatology","joint"],["id","Infectious Diseases","germ"],["psych","Psychiatry","mind"],["emerg","Emergency Medicine","ambul"],["rehab","Rehabilitation Medicine","rehab"],["ph","Public Health & PHC","people"],["pall","Palliative Care","palliative"]
];
const SPEC_HUE = {nicu:322,picu:192,medicine:205,paeds:28,neo:330,obg:340,surg:190,ortho:35,eye:175,ent:260,dental:195,cardio:355,resp:200,neph:15,gi:140,neuro:275,nsurg:250,uro:45,derm:20,onc:315,endo:85,rheum:230,id:160,psych:290,emerg:0,rehab:120,ph:215,pall:300};

(()=>{
'use strict';

const THEMES={
  red:{label:'ENEMIES',short:'THREAT',symbol:'⚠'},
  blue:{label:'CHARACTERS',short:'CAST',symbol:'★'},
  green:{label:'CLASSES',short:'STAFF',symbol:'✚'},
  yellow:{label:'ANOMALIES',short:'ANOMALY',symbol:'◉'},
  wild:{label:'NIGHT SHIFT',short:'WILD',symbol:'✦'}
};

const CARD_LORE={
  red:{
    '0':['Bed Monster','BED','▰'],'1':['Stalker','STALKER','♟'],'2':['Mass of Eyes','EYES','◉'],'3':['Hider','HIDER','◒'],'4':['Skinwalker','SKINWALKER','↯'],'5':['Head Banger','HEAD BANGER','✹'],'6':['Tendril','TENDRIL','〰'],'7':['Camera Figure','CAMERA','▣'],'8':['Ghost','GHOST','◇'],'9':['Mimic','MIMIC','◐'],
    'DRAW 2':['Mass of Eyes','SWARM +2','◉'],'SKIP':['Camera Figure','LOCKDOWN','▣'],'REVERSE':['Skinwalker','SHAPESHIFT','↯']
  },
  blue:{
    '0':['Officer Duckman','SECURITY','★'],'1':['Dr. Harlow','DOCTOR','✚'],'2':['Barney','BARNEY','●'],'3':['Ratthew','RATTHEW','★'],'4':['Ron from Accounting','ACCOUNTING','▦'],'5':['Liz','LIZ','♥'],'6':['Sam','SAM','●'],'7':['Dr. Harlow','HARLOW','✚'],'8':['Officer Duckman','DUCKMAN','★'],'9':['Ron from Accounting','RON','▦'],
    'DRAW 2':['Barney','DOUBLE SHIFT +2','+2'],'SKIP':['Officer Duckman','ACCESS DENIED','⊘'],'REVERSE':['Ratthew','CHANGE ROUTE','↔']
  },
  green:{
    '0':['Intern','INTERN','•'],'1':['Nurse','NURSE','✚'],'2':['Secretary','SECRETARY','▤'],'3':['Paramedic','PARAMEDIC','⚕'],'4':['Psychologist','PSYCHOLOGIST','◌'],'5':['Doctor','DOCTOR','✚'],'6':['Security','SECURITY','⬟'],'7':['Head Nurse','HEAD NURSE','✚'],'8':['Surgeon','SURGEON','✦'],'9':['Secret Agent','SECRET AGENT','◆'],
    'DRAW 2':['Head Nurse','EXTRA ORDERS +2','+2'],'SKIP':['Security','QUARANTINE','⊘'],'REVERSE':['Paramedic','REROUTE','↔']
  },
  yellow:{
    '0':['Black Eyes','BLACK EYES','●'],'1':['Hollow Face','HOLLOW FACE','○'],'2':['Mismatching Face','MISMATCH','◐'],'3':['Three Eyes','THREE EYES','◉'],'4':['Creepy Smile','SMILE','⌣'],'5':['Camera Stare','CAMERA STARE','▣'],'6':['Void','VOID','⬤'],'7':['Twitching','TWITCHING','↯'],'8':['Different Ears','EARS','◖◗'],'9':['Skin Walker','SKIN WALKER','◇'],
    'DRAW 2':['Three Eyes','OBSERVE +2','+2'],'SKIP':['Camera Stare','DON’T MOVE','⊘'],'REVERSE':['Mismatching Face','MISMATCH','↔']
  },
  wild:{
    'WILD':['Ghost','NIGHT SHIFT','✦'],'WILD +4':['Stalker','EMERGENCY +4','⚠']
  }
};

function getColor(card){
  const bg=card.querySelector('.card-bg');
  if(!bg)return null;
  return ['red','blue','green','yellow','wild'].find(c=>bg.classList.contains(c))||null;
}

function getKey(card,color){
  const action=card.querySelector('.action-title')?.textContent?.trim();
  if(action)return action;
  const corner=card.querySelector('.corner.tl')?.textContent?.trim();
  return color==='wild'?(action||'WILD'):corner;
}

function decorate(card){
  if(!(card instanceof HTMLElement)||card.dataset.ahRedesigned==='1')return;
  const color=getColor(card);if(!color)return;
  const key=getKey(card,color);
  const lore=CARD_LORE[color]?.[key]||CARD_LORE[color]?.['0'];
  const theme=THEMES[color];if(!lore||!theme)return;
  card.dataset.ahRedesigned='1';
  card.dataset.theme=color;

  const ribbon=document.createElement('div');
  ribbon.className='theme-ribbon';
  ribbon.innerHTML=`<span>${theme.label}</span><b>${lore[1]}</b>`;
  card.appendChild(ribbon);

  const plate=card.querySelector('.nameplate');
  if(plate)plate.textContent=lore[0];
  const badge=card.querySelector('.badge');
  if(badge)badge.textContent=lore[2];
  const frame=card.querySelector('.portrait-frame');
  if(frame){frame.dataset.symbol=lore[2];frame.dataset.family=theme.short;}
  const brand=card.querySelector('.brandmark');
  if(brand)brand.innerHTML=`ANIMAL<br>HOSPITAL · ${theme.short}`;
}

function scan(root=document){root.querySelectorAll?.('.card').forEach(decorate)}

const observer=new MutationObserver(mutations=>{
  for(const mutation of mutations){
    for(const node of mutation.addedNodes){
      if(!(node instanceof HTMLElement))continue;
      if(node.matches?.('.card'))decorate(node);
      scan(node);
    }
  }
});
observer.observe(document.documentElement,{childList:true,subtree:true});
scan();

window.AnimalUNOCardTheme={themes:THEMES,lore:CARD_LORE,refresh:scan};
})();

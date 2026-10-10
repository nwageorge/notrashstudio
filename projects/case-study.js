const projects = {
  adltrack: {
    mark:'ADL', name:'ADLTrack', category:'Care technology', title:'Making care visible, secure, and easier to trust.',
    deck:'A care operating system that gives families and agencies a clear, real-time view of the work happening around every shift.',
    role:'Digital product design & development', scope:'Strategy · UX · Visual · Frontend', live:'https://adltrack.com/', images:['../assets/adltrack-hero.png','../assets/adltrack-how-it-works.png','../assets/adltrack-demo.png','../assets/adltrack-agency.png'],
    challenge:['Care updates are often scattered across calls, texts, and paper records. Families need reassurance while agencies need verifiable records without adding more work for caregivers.'],
    approach:['We organized communication, health updates, schedules, and evidence into one calm operating system. The interface makes urgent information visible while keeping everyday coordination familiar and simple.'],
    outcome:['The live platform brings family communication, care documentation, and evidence-based monitoring into one connected experience designed for clarity and trust.'],
    next:'Express Housing', nextUrl:'express-housing.html', accent:'#79b88d'
  },
  'express-housing': {
    mark:'EH', name:'Express Housing', category:'Hospitality', title:'A furnished stay that feels settled before arrival.',
    deck:'A polished Philadelphia housing experience connecting discovery, confirmation, arrival information, and guest support.',
    role:'Web design & development', scope:'Strategy · UX · Visual · Frontend', live:'https://www.expresshousingpa.com/', images:['../assets/express-housing-hero.png','../assets/express-housing-collection.png','../assets/express-housing-process.png','../assets/express-housing-standard.png'],
    challenge:['Furnished housing can feel fragmented: scattered listings, unclear availability, and important arrival details buried across messages. Guests need confidence before committing to a stay.'],
    approach:['We shaped the experience around a focused property collection and a guided journey. Editorial storytelling introduces each building while clear operational details support real booking decisions.'],
    outcome:['The live site presents Express Housing as a considered hospitality service—not a list of units—with a connected path from browsing to arrival.'],
    next:'OnePermit', nextUrl:'onepermit.html', accent:'#a70d09'
  },
  onepermit: {
    mark:'OP', name:'OnePermit', category:'Property services', title:'One property. More possibilities.',
    deck:'A welcoming marketplace that connects residents and properties with qualified local service providers.',
    role:'Digital product design & development', scope:'Strategy · UX · Visual · Frontend', live:'https://onepermit-staging.onrender.com/', images:['../assets/onepermit-hero.png','../assets/onepermit-properties.png','../assets/onepermit-providers.png','../assets/onepermit-services.png'],
    challenge:['Property services are difficult to coordinate when residents, managers, and vendors work through separate channels. Finding the right provider and following a job to completion should feel straightforward.'],
    approach:['We created a warm, visual entry point supported by clear audience paths for properties, residents, and service providers. The experience turns a complex service network into an understandable journey.'],
    outcome:['OnePermit now has a cohesive digital home for discovery, coordination, and property support, built around the promise of qualified local help.'],
    next:'Urban Uplift Initiative', nextUrl:'urban-uplift.html', accent:'#77736b'
  },
  'urban-uplift': {
    mark:'UUI', name:'Urban Uplift Initiative', category:'Community impact', title:'A digital platform built to move Camden forward.',
    deck:'A community-centered website for mentorship, senior safety, events, partnerships, and giving.',
    role:'Brand website design & development', scope:'Strategy · UX · Visual · Frontend', live:'https://urbanupliftinitiative.org/', images:['../assets/urban-uplift-hero.png','../assets/urban-uplift-programs.png','../assets/urban-uplift-donate.png','../assets/urban-uplift-events.png'],
    challenge:['The organization needed to communicate several programs without losing the human story connecting them: local leadership, practical support, and long-term investment in Camden.'],
    approach:['We paired direct community photography with a strong editorial hierarchy and clear pathways into programs, events, donations, mentorship, and partnerships.'],
    outcome:['The live platform gives Urban Uplift Initiative a credible, action-oriented home where visitors can understand the mission and take part in the work.'],
    next:'Returnly', nextUrl:'returnly.html', accent:'#c36d38'
  },
  returnly: {
    mark:'R', name:'Returnly', category:'Consumer product', title:'Keep the love. Return the rest.',
    deck:'A bright consumer tool that helps shoppers follow return windows, next steps, refunds, and store credit through to completion.',
    role:'Digital product design & development', scope:'Strategy · UX · Visual · Frontend', live:'https://returnly-i0ff.onrender.com/index.html', images:['../assets/returnly-hero.png','../assets/returnly-how-it-works.png','../assets/returnly-toolkit.png','../assets/returnly-good-to-know.png'],
    challenge:['Returns are easy to postpone because deadlines, policies, packing steps, and refund status live in different places. The product needed to turn that mental load into a simple next action.'],
    approach:['We built the experience around momentum: capture a purchase, understand the policy, see the deadline, and complete the next small step. A bold editorial voice keeps the utility approachable.'],
    outcome:['Returnly brings purchases, return windows, checklists, reminders, and refund tracking into one focused experience that helps people follow through.'],
    next:'ADLTrack', nextUrl:'adltrack.html', accent:'#ef5e66'
  }
};

const key = document.body.dataset.project;
const p = projects[key];
if (p) {
  document.documentElement.style.setProperty('--accent', p.accent);
  document.title = `${p.name} — NoTrash Studio`;
  document.querySelector('[data-mark]').textContent = p.mark;
  document.querySelector('[data-name]').textContent = p.name;
  document.querySelector('[data-category]').textContent = p.category;
  document.querySelector('[data-title]').textContent = p.title;
  document.querySelector('[data-deck]').textContent = p.deck;
  document.querySelector('[data-role]').textContent = p.role;
  document.querySelector('[data-scope]').textContent = p.scope;
  document.querySelectorAll('[data-live]').forEach(a => a.href = p.live);
  document.querySelectorAll('[data-image]').forEach((img, index) => {
    img.src = p.images[index];
    img.alt = `${p.name} website — ${['overview','experience','features','outcome'][index]} view`;
  });
  ['challenge','approach','outcome'].forEach(section => {
    document.querySelector(`[data-${section}]`).innerHTML = p[section].map(t => `<p>${t}</p>`).join('');
  });
  const next = document.querySelector('[data-next]'); next.href = p.nextUrl; next.querySelector('strong').textContent = p.next;
}

const progress = document.querySelector('[data-progress]');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.textContent = `${Math.round(max > 0 ? scrollY / max * 100 : 0)}%`;
};
addEventListener('scroll', updateProgress, {passive:true}); updateProgress();

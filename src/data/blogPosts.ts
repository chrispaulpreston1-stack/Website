export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string[];
  relatedReport?: {
    title: string;
    path: string;
    orderSlug: string;
    price: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    slug: 'engineering-as-a-service-structural-design-subscriptions',
    title: 'Engineering as a Service: Why Structural Design Subscriptions Are the Future',
    excerpt: 'Explore how structural design subscriptions provide predictable costs, priority access, and seamless collaboration for ongoing development projects.',
    date: 'Mar 3, 2026',
    author: 'PF & Co',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Traditional structural engineering procurement can be frustrating. For proactive property developers, serial flippers, and busy architectural practices, constantly requesting quotes, negotiating fees, and waiting for availability on every single project creates unnecessary bottlenecks.',
      'Enter "Engineering as a Service." By shifting to a subscription-based model, developers secure dedicated monthly structural design capacity. This means predictable costs, priority scheduling, and a completely frictionless workflow where your engineering team feels like an in-house department rather than a distant external consultant.',
      'We leverage advanced technology and streamlined internal processes to manage these workloads efficiently. However, the core of this service remains deeply human. Every calculation, structural drawing, and site query is personally verified and signed off by our qualified structural engineers. The technology simply removes the administrative delays, allowing our engineers to focus purely on high-quality design.',
      'The momentum this model creates for our partners is remarkable. By eliminating the periods usually spent waiting for fee proposals and project onboarding, developments transition from architectural concepts to build-ready technical drawings significantly faster. This continuous, agile momentum directly translates to completing projects and getting them to market sooner.',
      'A structural design subscription aligns our success with yours. It is an ongoing partnership built on trust, rapid delivery, and the unwavering assurance of expert human verification at every critical stage.'
    ]
  },
  {
    slug: 'navigating-party-wall-agreements-owners-neighbours-guide',
    title: 'Navigating Party Wall Agreements: A Guide for Both Owners and Neighbours',
    excerpt: 'Demystify the Party Wall Act with our clear, supportive guide to resolving notices smoothly, whether you are building an extension or adjoining one.',
    date: 'Mar 3, 2026',
    author: 'PF & Co',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Receiving or serving a Party Wall Notice often sparks unnecessary anxiety. The legislation sounds formal and intimidating, but the reality is that the Party Wall etc. Act 1996 exists simply to protect both the homeowner undertaking the work and their neighbours. It provides a structured, fair framework for everyone involved.',
      'If you are the "Building Owner" planning an extension or loft conversion, serving a notice is a legal requirement before cutting into shared walls or excavating near boundaries. Transparent communication is your best tool. Discussing your plans with your neighbours before the formal notice arrives often sets a collaborative tone, preventing immediate disputes.',
      'If you are the "Adjoining Owner" receiving a notice, it is reassuring to know you have rights. The notice is not a demand to endure damage; it is a request to perform nearby work safely. You have the right to request a Schedule of Condition—a detailed photographic record of your property taken before any work begins, ensuring you are fully protected.',
      'At PF & Co, we have developed comprehensive video guides to help both parties seamlessly navigate this process. Our approach combines structured technological frameworks with essential human mediation. While modern systems can assist in drafting documents rapidly, it is the empathetic, expert human surveyors and engineers who interpret the nuances of the Act and ensure that awards are fair and disputes are avoided.',
      'By engaging experienced professionals to manage your Party Wall matters, you ensure the process is handled efficiently. The impact of getting this right early on is a much smoother overall project timeline and preserved neighbourly relations—a vastly preferable outcome to the stress and delays of a stalled build.'
    ]
  },
  {
    slug: 'hidden-value-site-intelligence-desktop-ground-investigation',
    title: 'The Hidden Value of Site Intelligence: Why Desktop Ground Investigations Save Budgets',
    excerpt: 'Discover how a Desktop Ground Investigation unearths hidden site risks before you break ground, protecting your budget and timeline.',
    date: 'Mar 3, 2026',
    author: 'PF & Co',
    category: 'Site Intelligence',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Groundworks are notoriously the highest-risk phase of any construction project. Developers and homeowners often do not truly know what lies beneath their site until they literally break ground—at which point, discovering an unexpected problem can drastically inflate foundation costs and delay schedules.',
      'This is where "Site Intelligence" changes the game. By conducting a comprehensive Desktop Ground Investigation (DGI) before purchasing land or finalizing designs, we uncover critical historical data, geological maps, and flood risk profiles. It is about having foresight rather than hindsight.',
      'Modern analysis tools allow us to process vast amounts of geological and environmental data quickly. However, raw data alone is never enough to base structural decisions upon. The true value and safety comes when this compiled information is meticulously analysed, interpreted, and verified by our experienced human structural and geotechnical engineers. They understand the site-specific nuances, confirming whether a historical clay pit or a nearby watercourse genuinely threatens your specific foundation design.',
      'The impact of this upfront investigation is profound. We have seen projects completely avoid costly, over-engineered foundation solutions because our early analysis provided confidence in the ground conditions. While we cannot quantify the exact hours saved on every single project, the vast efficiency gained during the planning and design phases keeps your project moving seamlessly and protects your overall budget from sudden, nasty surprises.',
      'A strategic Desktop Ground Investigation is not just an administrative checkbox; it is a vital risk-management tool. It empowers you and your architectural team to design with absolute certainty, built on a solid foundation of both advanced data gathering and rigorous human engineering oversight.'
    ]
  },
  {
    slug: 'ai-in-modern-structural-engineering',
    title: 'The Role of AI in Modern Structural Engineering',
    excerpt: 'How we are using machine learning to deliver faster, more accurate site assessments and structural designs.',
    date: 'Feb 20, 2026',
    author: 'PF & Co',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Artificial intelligence is no longer a futuristic concept in construction — it is here, and it is fundamentally changing how we approach structural engineering. At PF & Co, we have been integrating AI-driven tools into our workflow for over a year, and the results speak for themselves: faster turnaround times, more accurate feasibility assessments, and better-informed design decisions.',
      'The most immediate impact has been in site intelligence. Where a traditional desk study might take days to compile data from multiple sources — geology maps, flood records, planning history, environmental constraints — our AI systems can cross-reference and interpret this data in hours. This does not replace the engineer\'s judgement; it amplifies it. The engineer still makes the final call, but they are working with a far richer and more complete picture of the site.',
      'Machine learning models are particularly powerful when it comes to pattern recognition in ground conditions. By training on thousands of borehole logs and geotechnical reports from across the South East, we can now predict likely ground conditions for a new site with remarkable accuracy before a single trial pit is dug. This helps clients make better decisions earlier in the process, potentially saving thousands in unexpected foundation costs.',
      'In structural design, generative AI is opening up new possibilities. Rather than the engineer working through a single design solution, AI can explore hundreds of structural configurations in minutes, optimising for material efficiency, cost, and buildability. The engineer then selects and refines the most promising options. It is a collaborative process between human expertise and computational power.',
      'Perhaps the most exciting development is in automated compliance checking. Building regulations are complex and ever-changing. AI systems can now cross-reference a proposed design against the latest regulations, flagging potential issues before they become expensive problems on site. This is particularly valuable in London, where planning requirements can vary significantly between boroughs.',
      'The engineering firms that embrace AI will deliver better outcomes for their clients — not by replacing the skill and experience of their engineers, but by giving them more powerful tools to work with. At PF & Co, we see AI as the next evolution of the engineering toolkit, sitting alongside the calculator and CAD software as an essential part of modern practice.',
    ],
  },
  {
    slug: 'rsj-calculations-home-extensions',
    title: 'Understanding RSJ Calculations for Home Extensions',
    excerpt: 'Why structural steel calculations are the most critical — and most misunderstood — part of any domestic build project.',
    date: 'Feb 15, 2026',
    author: 'PF & Co',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200',
    content: [
      'If you are planning a home extension or knocking through a load-bearing wall, you will almost certainly need RSJ calculations. RSJ stands for Rolled Steel Joist — the steel beams that carry the load of the structure above when a wall is removed. Getting these calculations right is not just important; it is a legal requirement and a matter of structural safety.',
      'The process begins with a structural engineer assessing the loads that the existing wall carries. This includes the weight of the floors above, the roof structure, any walls sitting on top, and what engineers call "imposed loads" — the weight of furniture, people, and anything else the building needs to support in everyday use. All of these forces need to be transferred safely through the new steel beam and down into the foundations.',
      'One of the most common misconceptions homeowners have is that steel beam sizing is straightforward. In reality, the calculation involves multiple factors: the span of the opening, the loads being carried, the bearing capacity of the supporting walls or padstones, and the deflection limits set by building regulations. A beam that is strong enough might still deflect too much under load, causing cracking in plaster or misalignment of doors and windows.',
      'Building control will not sign off your project without approved structural calculations. This is not bureaucracy for its own sake — it exists to ensure that every structural alteration is safe. We have seen cases where homeowners or builders have tried to specify steels themselves, only to face costly remedial work when building control rejects the installation.',
      'The cost of proper structural calculations is typically between £300 and £600 for a standard domestic project. When you consider that the average extension costs £30,000 to £80,000, this is a tiny fraction of the overall budget. More importantly, it provides certainty: you know that the structural design is safe, compliant, and optimised for your specific situation.',
      'At PF & Co, we turn around most domestic RSJ calculations within 48 hours. We provide a full specification including beam size, bearing details, padstone requirements, and temporary propping instructions for your builder. We also liaise directly with building control if needed, taking the technical burden off your shoulders so you can focus on the exciting parts of your project.',
    ],
  },
  {
    slug: 'basement-impact-assessments-london',
    title: 'Basement Impact Assessments: What You Need to Know',
    excerpt: 'A practical guide to the planning, engineering, and regulatory requirements for subterranean development in London.',
    date: 'Feb 10, 2026',
    author: 'PF & Co',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Basement developments in London have become increasingly popular as homeowners look to maximise space in a city where land values make lateral expansion impractical. However, the planning and engineering requirements for subterranean construction are significantly more complex than for a standard extension. If you are considering a basement project, a Basement Impact Assessment is almost certainly going to be required by your local planning authority.',
      'A Basement Impact Assessment is a comprehensive technical report that evaluates the potential impact of your proposed basement on the surrounding area. This includes the effect on groundwater flows, the structural stability of neighbouring properties, surface water drainage, and the risk of flooding. In boroughs like Kensington and Chelsea, Westminster, and Camden — where basement developments are most common — the requirements are particularly stringent.',
      'The hydrology component is often the most complex part of the assessment. London sits on a variety of geological strata, and groundwater conditions can vary dramatically even within a single street. A thorough assessment will include a detailed hydrogeological study, modelling how the proposed basement will interact with existing groundwater flows. If the basement is likely to impede natural drainage, mitigation measures such as bypass drainage systems may need to be designed.',
      'Structural considerations extend beyond your own property. The construction of a basement involves significant excavation, which can affect the foundations of adjacent buildings. The assessment must demonstrate that the proposed construction methodology — whether that is underpinning, contiguous piling, or secant piling — will not cause unacceptable movement or damage to neighbouring structures. This typically requires a detailed structural analysis and often a party wall agreement.',
      'The construction management aspect is equally important. Basement construction in residential areas involves heavy machinery, lorry movements, noise, and vibration over an extended period. Your submission should include a Construction Management Plan detailing how these impacts will be minimised, including working hours, traffic management, noise monitoring, and dust suppression measures.',
      'At PF & Co, we have delivered Basement Impact Assessments across most London boroughs. We understand the specific requirements of each authority and can guide you through the process from initial feasibility through to planning approval. Our reports are prepared to the standards expected by planning officers and are supported by the technical rigour that comes from our structural engineering background.',
    ],
    relatedReport: {
      title: 'Site Feasibility Report',
      path: '/site-intelligence/site-feasibility-report',
      orderSlug: 'site-feasibility-report',
      price: '297',
    },
  },
  {
    slug: 'flood-risk-assessments-explained',
    title: 'Flood Risk Assessments: When You Need One and What to Expect',
    excerpt: 'Not every site needs a full flood risk assessment — but getting it wrong can derail your planning application. Here is how to know where you stand.',
    date: 'Feb 5, 2026',
    author: 'PF & Co',
    category: 'Site Intelligence',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Flood risk is one of the most common reasons planning applications get delayed or refused. If your site falls within Flood Zone 2 or 3 — or even Flood Zone 1 with a site area over one hectare — the Environment Agency and your local planning authority will expect a Flood Risk Assessment as part of your submission. Understanding when you need one and what it should contain can save you months of back-and-forth with the council.',
      'A Flood Risk Assessment evaluates all sources of flood risk to your site: fluvial (river), pluvial (surface water), groundwater, sewer, and tidal. It is not simply about whether the site has flooded before — it is about the probability of flooding over the lifetime of the development, typically 100 years for residential use. The assessment must also consider the impact of climate change on future flood risk, using the latest climate change allowances published by the Environment Agency.',
      'For many sites, a Tier 1 desktop assessment is sufficient. This draws on publicly available data — Environment Agency flood maps, historical flood records, geology and groundwater data, sewer records, and surface water mapping — to build a comprehensive picture of flood risk without the need for costly site investigations. Our desktop assessments reference over fifteen authoritative data sources and present the findings with a clear Decision Risk Score so you can see at a glance where the risks lie.',
      'The Sequential Test is a planning concept that often catches applicants out. Before granting permission for development in a flood risk area, the council must be satisfied that there are no reasonably available sites at lower flood risk where the development could be located. For individual householder applications this is rarely an issue, but for new-build developments and change-of-use applications it can be a significant hurdle. Your FRA should address the Sequential Test head-on.',
      'Mitigation measures are where good engineering makes a real difference. Finished floor levels, flood-resilient construction, SuDS drainage design, and safe access and egress routes can all be designed to reduce residual risk to acceptable levels. The key is proportionality — the mitigation should match the actual risk, not a worst-case assumption that adds unnecessary cost to the project.',
      'At PF & Co, we deliver desktop Flood Risk Assessments within 48 hours. Each report is tailored to your specific site and the requirements of your local planning authority, with clear recommendations that planning officers can adopt directly. If a site-specific survey or detailed hydraulic modelling is needed, we will tell you — but in our experience, a well-researched desktop assessment is sufficient for the majority of planning applications.',
    ],
    relatedReport: {
      title: 'Flood Risk Assessment',
      path: '/site-intelligence/flood-risk-assessment',
      orderSlug: 'flood-risk-assessment',
      price: '295',
    },
  },
  {
    slug: 'planning-conditions-pre-commencement',
    title: 'Pre-Commencement Conditions: The Hidden Delay in Your Build',
    excerpt: 'You have got planning permission — but those pre-commencement conditions could add months to your timeline if you do not tackle them early.',
    date: 'Jan 28, 2026',
    author: 'PF & Co',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Getting planning permission feels like the finish line — but for most projects, it is actually the starting gun for a second round of approvals. Pre-commencement conditions are requirements attached to your planning consent that must be formally discharged by the local authority before any work can begin on site. Ignore them, and you risk enforcement action, stop notices, or even having to undo work that has already been completed.',
      'The most common pre-commencement conditions relate to construction management, contamination, drainage, archaeology, and ecology. A Construction Management Plan condition, for example, requires you to submit a detailed document showing how you will manage noise, dust, traffic, and working hours during the build. The council will not let you start until they have approved it — and approval can take eight weeks or more.',
      'The clock starts ticking the moment you receive your decision notice. Most planning permissions have a three-year time limit for commencement, but the real constraint is often the time needed to discharge conditions. If your project has five or six pre-commencement conditions, and each takes six to eight weeks for the council to process, you could easily lose six months before a spade hits the ground.',
      'The smartest approach is to start preparing condition discharge documents as soon as you receive your planning decision — or even before, if the conditions are predictable from pre-application discussions. Many of the reports required to discharge conditions are desktop assessments that can be prepared quickly: Construction Management Plans, energy statements, drainage strategies, and ecological appraisals can all be drafted in advance.',
      'Discharge applications have their own fee — currently £43 per condition in England — and their own validation requirements. A poorly prepared submission will be returned, adding further delay. Each document needs to specifically address the wording of the condition, reference the correct planning application number, and demonstrate compliance with the relevant planning policies and technical standards.',
      'At PF & Co, we regularly help clients discharge pre-commencement conditions across Surrey, London, and the South East. Our site intelligence reports are specifically structured to satisfy common planning conditions, and we can typically turn around most documents within a week. If you have just received planning permission and are staring at a page of conditions, get in touch — the sooner you start, the sooner you can build.',
    ],
    relatedReport: {
      title: 'Full Site Intelligence Bundle',
      path: '/site-intelligence',
      orderSlug: 'full-bundle',
      price: '830',
    },
  },
  {
    slug: 'geotechnical-desk-study-guide',
    title: 'What Is a Geotechnical Desk Study and Do You Need One?',
    excerpt: 'The ground beneath your site determines your foundation costs. A desk study tells you what to expect before you spend a penny on trial pits.',
    date: 'Jan 20, 2026',
    author: 'PF & Co',
    category: 'Site Intelligence',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Every building sits on the ground, and the ground is never as simple as it looks. A geotechnical desk study is the first step in understanding what lies beneath your site — the geology, groundwater conditions, contamination history, and ground stability risks that will determine your foundation design and, ultimately, a significant portion of your construction budget.',
      'The desk study draws on a wide range of publicly available data: British Geological Survey maps and borehole records, Ordnance Survey historical mapping, Environment Agency data, mining and quarrying records, and local authority contaminated land registers. The aim is to build a geological model of the site without the cost of intrusive investigation. For many projects — particularly extensions, small new-builds, and change-of-use developments — a desk study provides enough information to design foundations with confidence.',
      'Ground conditions in Surrey and London are notoriously variable. Within a few kilometres you can move from London Clay to Lambeth Group deposits to river terrace gravels, each with very different engineering properties. Clay soils are prone to shrinkage and swelling with moisture changes, which is a particular concern near trees. Sandy soils may have good bearing capacity but can be susceptible to running sand conditions during excavation. Chalk can contain solution features that create sudden voids.',
      'Contamination is another critical factor, especially on brownfield sites. Historical mapping can reveal former industrial uses — gasworks, tanneries, factories, fuel storage — that may have left a legacy of contaminated soil or groundwater. If contamination is suspected, the desk study will recommend further investigation and outline the potential remediation requirements. This is essential information before committing to a site purchase or submitting a planning application.',
      'Foundation design is directly informed by the desk study findings. On straightforward sites with competent bearing strata at shallow depth, standard strip or trench-fill foundations may be appropriate. Where ground conditions are more challenging — deep made ground, soft compressible soils, high water tables, or proximity to trees on shrinkable clay — engineered solutions such as piled foundations or raft foundations may be necessary. Knowing this upfront avoids the nightmare scenario of discovering bad ground after construction has started.',
      'Our geotechnical desk studies at PF & Co interrogate all relevant data sources and present the findings in a clear, engineering-focused format. Each report includes a preliminary foundation risk assessment with indicative foundation recommendations, so you have actionable information from day one. If intrusive investigation is genuinely needed, we will tell you exactly what scope of work to commission — no more, no less.',
    ],
    relatedReport: {
      title: 'Geotechnical Desk Study',
      path: '/site-intelligence/geotechnical-desk-study',
      orderSlug: 'geotechnical-desk-study',
      price: '297',
    },
  },
  {
    slug: 'loft-conversions-structural-considerations',
    title: 'Loft Conversions: The Structural Engineering You Cannot See',
    excerpt: 'The structural work is the most expensive and least visible part of a loft conversion. Here is what your engineer is actually designing.',
    date: 'Jan 12, 2026',
    author: 'PF & Co',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    content: [
      'A loft conversion is one of the most cost-effective ways to add space to a house. But behind the dormer windows and en-suite bathrooms lies a significant amount of structural engineering that most homeowners never think about until their builder tells them they need a structural engineer. The truth is, virtually every loft conversion requires structural calculations — and the engineering is more complex than you might expect.',
      'The fundamental challenge is that most residential roof structures were never designed to carry floor loads. A traditional cut roof with rafters and purlins is designed to support the weight of tiles and resist wind loads — typically around 1.0 to 1.5 kN/m². Converting that space to habitable use means the floor needs to support imposed loads of 1.5 kN/m² plus the weight of floor finishes, partition walls, and furniture. The existing ceiling joists are almost never adequate for this, so new floor structure is required.',
      'Steel beams are typically the backbone of a loft conversion. The most common arrangement involves steel beams spanning from party wall to party wall, supporting new timber floor joists at the required level. If the existing purlins are being removed to create an open-plan space, steel ridge beams and new rafters may also be needed. Each of these elements needs to be individually designed for the specific loads and spans involved.',
      'Dormer construction adds another layer of complexity. A rear dormer effectively removes a large section of the existing roof slope and replaces it with a flat-roofed box structure. The structural engineer needs to design the dormer frame, the connections back to the existing roof structure, and the supporting steelwork. The loads from the dormer cheek walls need to be traced down through the building to ensure the existing walls and foundations can handle the additional weight.',
      'Party wall considerations are significant in terraced and semi-detached houses. Steel beams bearing onto party walls require party wall agreements with your neighbours under the Party Wall etc. Act 1996. The structural design needs to demonstrate that the new loads will not cause unacceptable stress or deflection in the party wall, and padstone or spreader beam details are needed to distribute the loads safely.',
      'At PF & Co, we design loft conversions across Surrey and London every week. Our structural packages include all the steelwork calculations, timber floor design, connection details, and building control submission drawings that your builder needs to get the job done. We work closely with architects and builders to ensure the structural solution integrates cleanly with the architectural design — because the best engineering is the kind you never notice.',
    ],
  },
  {
    slug: 'biodiversity-net-gain-planning',
    title: 'Biodiversity Net Gain: What It Means for Your Planning Application',
    excerpt: 'Since February 2024, most developments must deliver a 10% biodiversity net gain. Here is what that actually involves.',
    date: 'Jan 5, 2026',
    author: 'PF & Co',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Biodiversity Net Gain — BNG — became mandatory for most planning applications in England from February 2024. The requirement is straightforward in principle: developments must deliver at least a 10% net gain in biodiversity value compared to the pre-development baseline. In practice, understanding whether BNG applies to your project, what it will cost, and what surveys you need is anything but straightforward.',
      'The first question most applicants have is whether their project is exempt. Small-scale householder applications — extensions, loft conversions, outbuildings — are generally exempt. So are developments affecting less than 25 square metres of habitat, and projects with no impact on priority habitats. However, new-build houses, change of use, and developments requiring full planning permission almost always fall within scope, even on brownfield sites.',
      'The BNG process starts with a baseline habitat assessment. A qualified ecologist visits the site and maps all existing habitats — grassland, hedgerows, trees, scrub, ponds, and even hard standing — against the DEFRA Biodiversity Metric. Each habitat type is assigned a biodiversity value based on its condition, strategic significance, and distinctiveness. This baseline score is the benchmark against which the 10% gain must be demonstrated.',
      'Achieving the 10% gain typically involves a combination of on-site habitat creation, habitat enhancement, and — where on-site delivery is not feasible — off-site biodiversity units or statutory credits. On-site solutions might include wildflower meadow planting, new hedgerow creation, green roofs, or tree planting. The key is that habitats must be maintained for at least 30 years, secured by a legal agreement.',
      'Timing is critical and this is where many projects get caught out. If your site contains habitats that might support protected species — breeding birds, bats, great crested newts — the ecological surveys can only be carried out at specific times of year. Bat surveys, for instance, are restricted to May through September. Miss the survey window and your application could be delayed by up to a year. A BNG screening assessment early in the process identifies these timing constraints before they become programme risks.',
      'At PF & Co, our BNG Screening and Feasibility report gives you a clear picture of whether BNG applies, what your likely baseline score is, and what surveys and mitigation measures you will need. We use the latest DEFRA Biodiversity Metric and cross-reference with MAGIC Map data, priority habitat inventories, and local nature recovery strategies. The aim is simple: give you the information you need to plan your project without seasonal survey delays blowing your programme.',
    ],
    relatedReport: {
      title: 'BNG Screening & Feasibility',
      path: '/site-intelligence/biodiversity-net-gain',
      orderSlug: 'biodiversity-net-gain',
      price: '325',
    },
  },
  {
    slug: 'construction-management-plans-explained',
    title: 'Construction Management Plans: What Planning Officers Actually Want to See',
    excerpt: 'A CMP is not a box-ticking exercise. Here is how to write one that satisfies the condition and actually helps manage your build.',
    date: 'Dec 28, 2025',
    author: 'PF & Co',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    content: [
      'A Construction Management Plan is one of the most commonly attached planning conditions in urban and suburban areas. Its purpose is to demonstrate to the local planning authority that you have thought through the practical impacts of your construction project — noise, dust, traffic, waste, and neighbour disruption — and have a credible plan to manage them. The problem is that many CMPs are written as generic documents that fail to address the specific characteristics of the site, leading to rejection and delay.',
      'Planning officers review CMPs against the wording of the condition and the relevant local plan policies. Most conditions follow a similar pattern: they require details of construction traffic routing, loading and unloading arrangements, storage of materials, working hours, dust and noise mitigation, and measures to prevent mud and debris on the public highway. Some boroughs add specific requirements for Construction Logistics Plans, Non-Road Mobile Machinery registers, or Direct Vision Standard compliance for construction vehicles.',
      'The best CMPs are proportionate to the scale of the project. A householder extension in a quiet residential street does not need a 30-page document — a concise 3-4 page plan covering working hours, delivery arrangements, neighbour notification, and basic dust and noise measures is usually sufficient. A major development near a school or hospital, on the other hand, needs a comprehensive document with detailed method statements, monitoring protocols, and a dedicated site manager contact.',
      'Traffic management is often the section that receives the most scrutiny. Planning officers want to see specific delivery routes, not just a statement that deliveries will be managed. How will construction vehicles access the site? Where will they turn? What are the swept path constraints? Is there a school on the route that affects delivery timing? These details show that you understand the local context and have planned accordingly.',
      'Dust and noise management have become increasingly important, particularly in Air Quality Management Areas. The Greater London Authority requires all major construction sites to follow the GLA SPG on dust control, and many outer London boroughs apply similar standards. Your CMP should reference the relevant guidance and set out specific measures: wheel washing, covered stockpiles, damping down, hoarding height, plant silencing, and vibration monitoring where appropriate.',
      'At PF & Co, our Construction Management Plans are written to discharge conditions, not just tick a box. Each plan is tailored to the specific site, referencing the actual road network, nearby sensitive receptors, and the relevant council\'s validation requirements. We produce them as branded Word documents that can be submitted directly as part of a condition discharge application — typically within a week of instruction.',
    ],
    relatedReport: {
      title: 'Construction Management Plan',
      path: '/site-intelligence/construction-management-plan',
      orderSlug: 'construction-management-plan',
      price: '345',
    },
  },
];

export default blogPosts;

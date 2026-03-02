export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'ai-in-modern-structural-engineering',
    title: 'The Role of AI in Modern Structural Engineering',
    excerpt: 'How machine learning is helping us design safer and more efficient buildings in 2026.',
    date: 'Feb 20, 2026',
    author: 'Paul Francis',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Artificial intelligence is no longer a futuristic concept in construction — it is here, and it is fundamentally changing how we approach structural engineering. At PF & Co, we have been integrating AI-driven tools into our workflow for over a year, and the results speak for themselves: faster turnaround times, more accurate feasibility assessments, and better-informed design decisions.',
      'The most immediate impact has been in site intelligence. Where a traditional desk study might take days to compile data from multiple sources — geology maps, flood records, planning history, environmental constraints — our AI systems can cross-reference and interpret this data in hours. This does not replace the engineer\'s judgement; it amplifies it. The engineer still makes the final call, but they are working with a far richer and more complete picture of the site.',
      'Machine learning models are particularly powerful when it comes to pattern recognition in ground conditions. By training on thousands of borehole logs and geotechnical reports from across the South East, we can now predict likely ground conditions for a new site with remarkable accuracy before a single trial pit is dug. This helps clients make better decisions earlier in the process, potentially saving thousands in unexpected foundation costs.',
      'In structural design, generative AI is opening up new possibilities. Rather than the engineer working through a single design solution, AI can explore hundreds of structural configurations in minutes, optimising for material efficiency, cost, and buildability. The engineer then selects and refines the most promising options. It is a collaborative process between human expertise and computational power.',
      'Perhaps the most exciting development is in automated compliance checking. Building regulations are complex and ever-changing. AI systems can now cross-reference a proposed design against the latest regulations, flagging potential issues before they become expensive problems on site. This is particularly valuable in London, where planning requirements can vary significantly between boroughs.',
      'We are still in the early stages of this transformation, but the direction is clear. The engineering firms that embrace AI will deliver better outcomes for their clients — not by replacing the skill and experience of their engineers, but by giving them more powerful tools to work with. At PF & Co, we see AI as the next evolution of the engineering toolkit, sitting alongside the calculator and CAD software as an essential part of modern practice.',
    ],
  },
  {
    slug: 'rsj-calculations-home-extensions',
    title: 'Understanding RSJ Calculations for Home Extensions',
    excerpt: 'A guide for homeowners on why structural calculations are the most important part of your build.',
    date: 'Feb 15, 2026',
    author: 'Sarah Jenkins',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1590069230002-70cc884606e2?auto=format&fit=crop&q=80&w=1200',
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
    excerpt: 'Navigating the complexities of subterranean development in London boroughs.',
    date: 'Feb 10, 2026',
    author: 'Paul Francis',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Basement developments in London have become increasingly popular as homeowners look to maximise space in a city where land values make lateral expansion impractical. However, the planning and engineering requirements for subterranean construction are significantly more complex than for a standard extension. If you are considering a basement project, a Basement Impact Assessment (BIA) is almost certainly going to be required by your local planning authority.',
      'A Basement Impact Assessment is a comprehensive technical report that evaluates the potential impact of your proposed basement on the surrounding area. This includes the effect on groundwater flows, the structural stability of neighbouring properties, surface water drainage, and the risk of flooding. In boroughs like Kensington and Chelsea, Westminster, and Camden — where basement developments are most common — the requirements are particularly stringent.',
      'The hydrology component is often the most complex part of the assessment. London sits on a variety of geological strata, and groundwater conditions can vary dramatically even within a single street. A thorough BIA will include a detailed hydrogeological assessment, modelling how the proposed basement will interact with existing groundwater flows. If the basement is likely to impede natural drainage, mitigation measures such as bypass drainage systems may need to be designed.',
      'Structural considerations extend beyond your own property. The construction of a basement involves significant excavation, which can affect the foundations of adjacent buildings. The BIA must demonstrate that the proposed construction methodology — whether that is underpinning, contiguous piling, or secant piling — will not cause unacceptable movement or damage to neighbouring structures. This typically requires a detailed structural analysis and often a party wall agreement.',
      'The construction management aspect is equally important. Basement construction in residential areas involves heavy machinery, lorry movements, noise, and vibration over an extended period. The BIA should include a Construction Management Plan detailing how these impacts will be minimised, including working hours, traffic management, noise monitoring, and dust suppression measures.',
      'At PF & Co, we have delivered Basement Impact Assessments across most London boroughs. We understand the specific requirements of each authority and can guide you through the process from initial feasibility through to planning approval. Our reports are prepared to the standards expected by planning officers and are supported by the technical rigour that comes from our structural engineering background.',
    ],
  },
];

export default blogPosts;

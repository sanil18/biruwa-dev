// In-memory storage for local development
const storage: Record<string, any[]> = {
  blogs: [
    {
      id: "recycling-solution-how-long",
      title: "Recycling: A Solution, But for How Long?",
      description: "An exploration into the reality of recycling, global waste trade, and the silent poison of methane emissions in Nepal.",
      content: `We grow up hearing slogans, “Reduce, Reuse, Recycle”. They are printed on school walls, wrappers, and even garbage bins. Recycling is often portrayed as the ultimate act of climate responsibility. But recently, I asked myself: “Does recycling actually help? And if it does, for how long?”

I came across a video about how countries like Malaysia have become dumping grounds for other nations’ recycled waste. It shocked me. These were the items people thought they were “saving the planet” with. Most of us throw waste into separate bins, hand it to collectors, and feel like we have done our part. But do we ever ask, where does this waste really go? What happens after it leaves our sight? Are we sending it far enough away to forget?

### Recycling in Real Sense

Recycling is the process of making unwanted things wanted again, giving a new life to materials by changing their form. It reduces our need to extract raw materials like fossil fuels, minerals and trees. That means less deforestation, less mining, and less pressure on nature. But, recycling itself is not without cost. It does help, but it is not a perfect solution. It is a step, not the end.

### A Global Dumping Ground: The Case of Malaysia

Many developed nations like the U.S, UK export recyclable waste to countries like Malaysia because it is cheaper than processing at home. But a large part of this waste is contaminated or non-recyclable. Malaysia has become overwhelmed with rising health and environmental risks. Since 2019, Malaysia began sending illegal plastic shipments back to their origin countries, refusing to the world’s landfill. This made me wonder: Are we actually recycling? Or just outsourcing the burden?

### The Problem of Recycling: Downcycling

Even when we recycle properly, there is a hidden issue. The quality of materials drops each time they are reused. Plastic becomes weaker and can only be recycled 2-3 times. Paper fibers shorten after each cycle. Metals can be recycled almost endlessly but require high energy input. This process is known as downcycling: turning a high-quality product into something lower in quality. So, while recycling helps, it is not a permanent solution.

### The Path Ahead

We must first know what can be recycled. Recycling starts with awareness. Most of us don’t know what can and what can’t be recycled. This leads to wishcycling: tossing everything in the bin hoping it helps, but actually makes it worse. Recycling is important but we must think about what is more sustainable. So, to be better is to be sustainable:

1. **Reduce** - Less consumption. Think before buying.
2. **Reuse** - Choose glass over plastic. Refill instead of repurchasing.
3. **Rethink** - Support zero-waste ideas: composting, biodegradable materials.

### The Emissions We Don’t See

In Nepal, most of our waste ends up in landfills and that’s where things get worse. When organic waste like food and paper rots in landfills, it releases methane, a greenhouse gas 80 times more powerful than carbon dioxide in the short term. This invisible gas rises from places like Sisdole or Okharpauwa, quietly warming our skies. It’s not just the visible trash; it’s the silent poison.

### National Measures

Nepal has some strong policies:
- Solid Waste Management Act (2011) - requires segregation of waste at the source.
- Local Government Operation Act (2017) - gives municipalities power to manage waste systems.
- Notice published in Nepal Gazette bans production, import, distribution and use of plastic bags thinner than 40 microns.

But laws alone are not enough. Implementation is weak and public awareness alone is not effective. Everything starts with awareness. Yet, most households still throw everything into one bin. So, real change starts at home. We can’t recycle our way out of this crisis. But we can learn what is recyclable, reduce what we consume, and talk to others about it.

The Earth doesn't need us to be perfect. She just needs us to be present, aware, and honest.`,
      author: "Anisha Tamang",
      date: "January 5, 2026",
      category: "Climate Awareness",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1770&auto=format&fit=crop",
      published: true,
      createdAt: new Date("2026-01-05").toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  papers: [],
  members: [],
  projects: [
    {
      id: "biruwa-batika-christmas",
      title: "Biruwa Batika: Sustainable Christmas Market",
      date: "December 25, 2024",
      venue: "Thamel, Kathmandu",
      participants: 27,
      sessionLedBy: "Biruwa Team",
      collaboration: "27 Sustainable Vendors",
      description: "Biruwa's first-ever Sustainable Christmas Market in Thamel, a heartwarming gathering for all who care about the planet, featuring 27 eco-conscious vendors.",
      detailedContent: {
        content: "On Christmas Day 2025, amidst the vibrant and bustling streets of Thamel, Biruwa hosted its first-ever Sustainable Christmas Market, a heartwarming gathering for all who care about the planet. With 27 passionate vendors in attendance, ranging from sustainable product businesses to green construction companies, the event brought sustainability to life in an engaging and celebratory atmosphere.\n\nThe market was not just a space for commerce, it was a lively hub of ideas, values, and community spirit. Eco-conscious brands showcased low-impact goods, while attendees explored innovative solutions and connected with fellow changemakers. Every booth echoed a shared purpose: to contribute to a cleaner, greener, and more conscious Nepal.\n\nBiruwa, as the proud organizer with a focus on climate justice and governance, also hosted a vibrant and interactive stall. The highlight was a 1.5-hour speed consultation session, where participants could pre-register for 10-minute personalized guidance slots. These rapid yet insightful sessions gave attendees a chance to receive tailored advice on sustainability practices, and advocacy, from the Biruwa team. Alongside this, the stall featured Guff Garam badges, available for purchase.\n\nBut more than anything, this event was about community. A space where conversations turned into collaborations, where mindful celebration met meaningful action, and where the holiday spirit was reimagined through a lens of sustainability and shared responsibility."
      },
      images: [
        "https://github.com/sanil18/biruwa/blob/main/assets/group.jpeg?raw=true",
        "https://github.com/sanil18/biruwa/blob/main/assets/chris.JPG?raw=true"
      ],
      icon: "shopping-bag",
      color: "red",
      published: true,
      category: "event",
      createdAt: new Date("2025-12-25").toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "law-order-climate",
      title: "Law and Order: Climate Edition",
      date: "November 10, 2024",
      venue: "Nepal Law Campus",
      participants: 20,
      sessionLedBy: "Biruwa Team",
      collaboration: "Nepal Law Campus",
      description: "An immersive dialogue session designed to explore the intersection of climate justice, governance, and the law through role-playing and collaborative problem-solving.",
      detailedContent: {
        content: "Biruwa hosted \"Law and Order: Climate Edition,\" an immersive dialogue session on November 10, 2024 designed to explore the intersection of climate justice, governance, and the law. Held with a circle of 20 thoughtful participants including law students from Nepal Law Campus, faculty members, local community leaders, and climate experts, the session was a rich blend of experiential learning, honest conversation, and collaborative problem-solving.\n\nParticipants were invited to sit in a circle, setting the tone for open and inclusive dialogue. They were then given role cards outlining fictional yet relatable personas with distinct climate-related challenges and responsibilities, representing government officials, grassroots leaders, youth advocates, legal experts, and media representatives. This setup invited each participant to step into someone else's shoes and view the climate crisis through a multifaceted lens. The session emphasized collective dialogue rather than debate, encouraging mutual understanding over conflict.\n\nThe heart of the session was the dialogue itself, which unfolded in three phases. In the first, participants reflected individually on how climate change had impacted their communities and discussed the role of fairness, equity, and government responsibility in climate action. In the second phase, small groups based on stakeholder roles tackled the question of what climate solutions or legal reforms could best serve their communities. With Biruwa facilitators moderating, groups surfaced key challenges and proposed reforms ranging from more inclusive environmental policymaking to strengthening the accountability of existing legal frameworks. Finally, in a full-circle open dialogue, participants built on these ideas, identifying urgent legal reforms and imagining how different sectors from community leaders to lawmakers could work together to ensure more just and effective climate governance.\n\nThe session closed with a reflective check-out, where each participant identified a tangible action their role could take to advance climate justice. \"Law and Order: Climate Edition\" was more than a simulation, it was a space to reimagine power, responsibility, and solutions in the face of the climate crisis."
      },
      images: [
        "https://github.com/sanil18/biruwa/blob/main/assets/law-order.JPG?raw=true",
        "https://github.com/sanil18/biruwa/blob/main/assets/law-order-group.JPG?raw=true"
      ],
      icon: "scale",
      color: "blue",
      published: true,
      category: "workshop",
      createdAt: new Date("2024-11-10").toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "breathing-spaces",
      title: "Breathing Spaces: A Discourse on Urban Green Spaces",
      date: "August 10, 2024",
      venue: "Frameboxx Nepal",
      participants: 12,
      sessionLedBy: "Babita Tamang, core team member of Biruwa",
      collaboration: "",
      description: "A meaningful dialogue that brought together 12 participants at Frameboxx Nepal to reflect on the current state and future of open green spaces in urban settings like Kathmandu.",
      detailedContent: {
        content: "On August 10, 2024, Biruwa organized \"Breathing Spaces: A Discourse on Urban Green Spaces\", a meaningful dialogue that brought together 12 participants at Frameboxx Nepal to reflect on the current state and future of open green spaces in urban settings like Kathmandu. The session was led by Babita Tamang, a core team member of Biruwa, and conducted in an open-discussion format where every participant contributed thoughtfully throughout the three interconnected phases of the program.\n\nThe session began with introductions and issue identification, where participants shared their personal experiences and community-level observations regarding the growing lack of accessible, green public spaces. As the discourse progressed, the participants were divided into three groups, each representing a different stakeholder: Local Community, Community Leaders, and City Planners. Through role-play and group discussions, each team presented key issues, challenges, and potential solutions from their respective perspectives.\n\nThe Local Community group highlighted problems such as unplanned urbanization, poor rainwater management, lack of refuge areas during disasters, encroachment of culturally significant public spaces, unmanaged waste dumping, and the overshadowing impact of corporate buildings on surrounding heritage sites and homes. The Community Leaders group emphasized the importance of inclusive urban planning, revisiting traditional architectural practices like pati, pauwa, hiti, and falcha, as well as the need for better enforcement of Environmental Impact Assessments and multi-layered accountability in urban development. The City Planners group brought forth innovative solutions such as multipurpose land use for shrinking urban spaces, creation of artificial water sponges to recharge groundwater, use of underutilized public spaces like army barracks and school grounds, and offering tax incentives to promote green building practices such as requiring 30% green space in private development.\n\nIn the concluding segment, participants reflected on the richness of the dialogue and the importance of seeing the same issue through different lenses. The shared learning experience reinforced the need for more open conversations, better urban governance, and community-driven approaches to reimagine and protect urban green spaces. The session underscored the value of respectful dialogue, collective imagination, and the power of diverse voices coming together to envision a more sustainable and inclusive urban future."
      },
      images: [
        "https://github.com/sanil18/biruwa/blob/main/assets/breathing.JPG?raw=true",
        "https://github.com/sanil18/biruwa/blob/main/assets/breathinggroup.JPG?raw=true"
      ],
      icon: "users",
      color: "emerald",
      published: true,
      category: "workshop",
      createdAt: new Date("2024-08-10").toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "trash-talk-garima",
      title: "Trash Talk with Garima",
      date: "August 1, 2024",
      venue: "Association of Youth Organizations Nepal (AYON)",
      participants: 10,
      sessionLedBy: "Garima Bista, core team member of Biruwa",
      collaboration: "Association of Youth Organizations Nepal (AYON)",
      description: "A lively and hands-on workshop that invited youth to break free from conventional ideas about waste and embrace the powerful possibilities of the circular economy.",
      detailedContent: {
        content: "On August 1, 2024, Biruwa, in collaboration with the Association of Youth Organizations Nepal (AYON), hosted Trash Talk with Garima, a lively and hands-on workshop that invited youth to break free from conventional ideas about waste and embrace the powerful possibilities of the circular economy. Led by Garima Bista, a core team member of Biruwa and an ardent advocate for sustainability, the session brought together 10 enthusiastic participants.\n\nGarima began the session by breaking down the fundamentals of the circular economy, challenging the misconception that it is an overly technical or economic concept. Instead, she emphasized its roots in rethinking how we use resources, reduce waste, and regenerate ecosystems. To ground these ideas in reality, participants were handed plastic wrappers and invited to brainstorm and demonstrate innovative, sustainable ways to reuse them. This tangible exercise sparked curiosity and laid the foundation for thinking beyond the familiar 3 R's: Reduce, Reuse, Recycle and toward the broader framework of the 12 R's, including Refuse, Rethink, Repair, and Regenerate.\n\nThe workshop seamlessly moved into a group discussion, where participants reflected on how circular economy principles could be integrated into their everyday routines. The conversation highlighted the potential to make sustainability a lifestyle trend, especially among Gen Z, by weaving it into pop culture, digital content, and grassroots community efforts. Participants exchanged ideas on using social media and collective action to make environmental responsibility more accessible, engaging, and fun.\n\nTo deepen their understanding, attendees participated in role-playing scenarios based on real-world waste management challenges. Each participant stepped into the shoes of a policymaker, business owner, or community member, applying the 12 R's to propose actionable solutions. These interactive moments sparked critical thinking, encouraged collaborative problem-solving, and illuminated the interconnectedness of individual choices and systemic change.\n\nThe session wrapped up with a reflection circle where participants shared their insights and feedback. Many admitted they had previously viewed the circular economy as abstract and inaccessible, but the workshop transformed their perspectives showing that the shift toward sustainability can start with simple, personal actions. They appreciated the session's immersive approach and expressed feeling empowered to apply what they had learned in their own lives.\n\nTrash Talk with Garima wasn't just a talk, it was a shift in mindset. By breaking down complex ideas into approachable concepts and activities, the session inspired participants to become change agents in their communities. With a deeper understanding of circular economy principles and a toolkit of creative strategies, attendees left feeling equipped and energized to help shape a more sustainable and resilient future."
      },
      images: [
        "https://github.com/sanil18/biruwa/blob/main/assets/garima-trash-talk.jpg?raw=true",
        "https://github.com/sanil18/biruwa/blob/main/assets/trash-talk-group.jpg?raw=true"
      ],
      icon: "refresh-cw",
      color: "green",
      published: true,
      category: "workshop",
      createdAt: new Date("2024-08-01").toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "eco-equity",
      title: "Eco Equity: Right to Environment and Climate Justice",
      date: "July 15, 2024",
      venue: "Virtual Session",
      participants: 18,
      sessionLedBy: "Biruwa’s core team and Ms. Prakriti Koirala",
      collaboration: "Lal Sabuj Society",
      description: "A virtual session designed to deepen the understanding of environmental rights and justice-based approaches to climate action.",
      detailedContent: {
        content: "On July 15, 2024, Biruwa, in collaboration with Lal Sabuj Society, hosted Eco Equity: Right to Environment and Climate Justice, a virtual session designed to deepen the understanding of environmental rights and justice-based approaches to climate action. The session was led by Biruwa’s core team and featured Ms. Prakriti Koirala, an environmental activist and the Director of Clim Adapt, as the resource person.\n\nThe event engaged 18 participants in a powerful 90-minute discussion that explored the inequities of climate change impacts and the importance of justice in responding to the crisis. Ms. Koirala opened the session with a thought-provoking question \"Is everyone proportionately affected by climate change?\" inviting participants to reflect on the unequal burdens faced by different communities. Her presentation traced the roots of climate and environmental justice, explaining how marginalized groups are often the most vulnerable to environmental degradation, despite contributing the least to the problem. She also underscored the critical role that young people play in shaping a just and inclusive climate future.\n\nThe latter half of the event featured an interactive Q&A session, where participants engaged in dialogue with the speaker on a range of topics, from sustainable fashion and net-zero commitments to the accountability of local governments. To close the session, participants shared feedback through a form circulated by Biruwa. The responses highlighted how the session helped demystify complex climate issues and inspired participants to think more critically about justice-oriented approaches to environmental activism. The event not only enriched the participants’ understanding but also reaffirmed the importance of consistent, inclusive, and informed dialogues in tackling the climate crisis.\n\nEco Equity demonstrated that accessible, youth-led conversations can be a powerful catalyst for change. It was a reminder that awareness is the first step toward action and that collective learning can sow the seeds of justice for generations to come."
      },
      images: [
        "https://github.com/sanil18/biruwa/blob/main/assets/eco-equity%20(1).jpg?raw=true",
        "https://github.com/sanil18/biruwa/blob/main/assets/Eco%20Equity%202.jpg?raw=true"
      ],
      icon: "scale",
      color: "sky",
      published: true,
      category: "workshop",
      createdAt: new Date("2024-07-15").toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
}

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  author: string
  date: string
  category: string
  imageUrl?: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface ResearchPaper {
  id: string
  title: string
  description: string
  date: string
  type: string
  color: string
  imageUrl?: string
  pdfUrl?: string
  pages?: number
  category: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  title: string
  description: string
  date: string
  venue?: string
  participants?: number
  sessionLedBy?: string
  collaboration?: string
  images?: string[]
  detailedContent?: {
    content?: string
    introduction?: string
    rolePlay?: {
      localCommunity?: {
        title: string
        issues: string[]
      }
      communityLeaders?: {
        title: string
        recommendations: string[]
      }
      cityPlanners?: {
        title: string
        implementationPlans: string[]
      }
    }
    conclusion?: string
  }
  icon?: string
  color?: string
  imageUrl?: string
  published: boolean
  category: string
  createdAt: string
  updatedAt: string
}

// Generic database functions
export function readData<T>(filename: string): T[] {
  return storage[filename] || []
}

export function writeData<T>(filename: string, data: T[]): boolean {
  try {
    storage[filename] = data
    return true
  } catch (error) {
    console.error(`Failed to write ${filename}:`, error)
    return false
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Specific data functions
export const blogDb = {
  getAll: (): BlogPost[] => readData<BlogPost>("blogs"),
  getById: (id: string): BlogPost | undefined => {
    const blogs = readData<BlogPost>("blogs")
    return blogs.find((blog) => blog.id === id)
  },
  create: (blog: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost | null => {
    try {
      const blogs = readData<BlogPost>("blogs")
      const newBlog: BlogPost = {
        ...blog,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      blogs.push(newBlog)
      const success = writeData("blogs", blogs)
      return success ? newBlog : null
    } catch (error) {
      console.error("Failed to create blog:", error)
      return null
    }
  },
  update: (id: string, updates: Partial<BlogPost>): BlogPost | null => {
    try {
      const blogs = readData<BlogPost>("blogs")
      const index = blogs.findIndex((blog) => blog.id === id)
      if (index === -1) return null

      blogs[index] = { ...blogs[index], ...updates, updatedAt: new Date().toISOString() }
      const success = writeData("blogs", blogs)
      return success ? blogs[index] : null
    } catch (error) {
      console.error("Failed to update blog:", error)
      return null
    }
  },
  delete: (id: string): boolean => {
    try {
      const blogs = readData<BlogPost>("blogs")
      const filteredBlogs = blogs.filter((blog) => blog.id !== id)
      if (filteredBlogs.length === blogs.length) return false
      return writeData("blogs", filteredBlogs)
    } catch (error) {
      console.error("Failed to delete blog:", error)
      return false
    }
  },
}

export const paperDb = {
  getAll: (): ResearchPaper[] => readData<ResearchPaper>("papers"),
  getById: (id: string): ResearchPaper | undefined => {
    const papers = readData<ResearchPaper>("papers")
    return papers.find((paper) => paper.id === id)
  },
  create: (paper: Omit<ResearchPaper, "id" | "createdAt" | "updatedAt">): ResearchPaper | null => {
    try {
      const papers = readData<ResearchPaper>("papers")
      const newPaper: ResearchPaper = {
        ...paper,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      papers.push(newPaper)
      const success = writeData("papers", papers)
      return success ? newPaper : null
    } catch (error) {
      console.error("Failed to create paper:", error)
      return null
    }
  },
  update: (id: string, updates: Partial<ResearchPaper>): ResearchPaper | null => {
    try {
      const papers = readData<ResearchPaper>("papers")
      const index = papers.findIndex((paper) => paper.id === id)
      if (index === -1) return null

      papers[index] = { ...papers[index], ...updates, updatedAt: new Date().toISOString() }
      const success = writeData("papers", papers)
      return success ? papers[index] : null
    } catch (error) {
      console.error("Failed to update paper:", error)
      return null
    }
  },
  delete: (id: string): boolean => {
    try {
      const papers = readData<ResearchPaper>("papers")
      const filteredPapers = papers.filter((paper) => paper.id !== id)
      if (filteredPapers.length === papers.length) return false
      return writeData("papers", filteredPapers)
    } catch (error) {
      console.error("Failed to delete paper:", error)
      return false
    }
  },
}

export const memberDb = {
  getAll: (): any[] => readData<any>("members"),
  getById: (id: string): any | undefined => {
    const members = readData<any>("members")
    return members.find((member) => member.id === id)
  },
  create: (member: any): any | null => {
    try {
      const members = readData<any>("members")
      const newMember: any = {
        ...member,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      members.push(newMember)
      const success = writeData("members", members)
      return success ? newMember : null
    } catch (error) {
      console.error("Failed to create member:", error)
      return null
    }
  },
  update: (id: string, updates: any): any | null => {
    try {
      const members = readData<any>("members")
      const index = members.findIndex((member) => member.id === id)
      if (index === -1) return null

      members[index] = { ...members[index], ...updates, updatedAt: new Date().toISOString() }
      const success = writeData("members", members)
      return success ? members[index] : null
    } catch (error) {
      console.error("Failed to update member:", error)
      return null
    }
  },
  delete: (id: string): boolean => {
    try {
      const members = readData<any>("members")
      const filteredMembers = members.filter((member) => member.id !== id)
      if (filteredMembers.length === members.length) return false
      return writeData("members", filteredMembers)
    } catch (error) {
      console.error("Failed to delete member:", error)
      return false
    }
  },
}

export const projectDb = {
  getAll: (): Project[] => readData<Project>("projects"),
  getById: (id: string): Project | undefined => {
    const projects = readData<Project>("projects")
    return projects.find((project) => project.id === id)
  },
  create: (project: Omit<Project, "id" | "createdAt" | "updatedAt">): Project | null => {
    try {
      const projects = readData<Project>("projects")
      const newProject: Project = {
        ...project,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      projects.push(newProject)
      const success = writeData("projects", projects)
      return success ? newProject : null
    } catch (error) {
      console.error("Failed to create project:", error)
      return null
    }
  },
  update: (id: string, updates: Partial<Project>): Project | null => {
    try {
      const projects = readData<Project>("projects")
      const index = projects.findIndex((project) => project.id === id)
      if (index === -1) return null

      projects[index] = { ...projects[index], ...updates, updatedAt: new Date().toISOString() }
      const success = writeData("projects", projects)
      return success ? projects[index] : null
    } catch (error) {
      console.error("Failed to update project:", error)
      return null
    }
  },
  delete: (id: string): boolean => {
    try {
      const projects = readData<Project>("projects")
      const filteredProjects = projects.filter((project) => project.id !== id)
      if (filteredProjects.length === projects.length) return false
      return writeData("projects", filteredProjects)
    } catch (error) {
      console.error("Failed to delete project:", error)
      return false
    }
  },
}

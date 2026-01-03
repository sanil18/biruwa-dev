// In-memory storage for local development
const storage: Record<string, any[]> = {
  blogs: [],
  papers: [],
  members: [],
  projects: [],
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
  getAll: (): any[] => readData<any>("projects"),
  getById: (id: string): any | undefined => {
    const projects = readData<any>("projects")
    return projects.find((project) => project.id === id)
  },
  create: (project: any): any | null => {
    try {
      const projects = readData<any>("projects")
      const newProject: any = {
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
  update: (id: string, updates: any): any | null => {
    try {
      const projects = readData<any>("projects")
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
      const projects = readData<any>("projects")
      const filteredProjects = projects.filter((project) => project.id !== id)
      if (filteredProjects.length === projects.length) return false
      return writeData("projects", filteredProjects)
    } catch (error) {
      console.error("Failed to delete project:", error)
      return false
    }
  },
}

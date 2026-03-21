// Simplified DataLoader for API routes
// Imports data files directly without path aliases

import projectsData from '../src/data/projects.json'
import experienceData from '../src/data/experience.json'
import skillsData from '../src/data/skills.json'

type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: string
  year: number
  metrics?: {
    performance?: string
    users?: string
    impact?: string
  }
  challenges?: string[]
  solutions?: string[]
}

type Experience = {
  id: string
  title: string
  company: string
  period: string
  startDate: string | Date
  endDate?: string | Date
  description: string
  achievements?: string[]
  technologies?: string[]
  isCurrentRole?: boolean
  location?: string
}

type Skill = {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'ai' | 'tools' | 'soft'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
  relatedProjects?: string[]
}

export class DataLoader {
  static getProjects(): Project[] {
    return projectsData as Project[]
  }

  static getFeaturedProjects(): Project[] {
    return this.getProjects().filter((project) => project.featured)
  }

  static getProjectById(id: string): Project | undefined {
    return this.getProjects().find((project) => project.id === id)
  }

  static getProjectsByCategory(category: string): Project[] {
    return this.getProjects().filter((project) => project.category === category)
  }

  static getProjectCategories(): string[] {
    const categories = new Set(this.getProjects().map((project) => project.category))
    return Array.from(categories)
  }

  static getExperience(): Experience[] {
    return experienceData as Experience[]
  }

  static getCurrentRole(): Experience | undefined {
    return this.getExperience().find((exp) => exp.isCurrentRole)
  }

  static getExperienceSorted(): Experience[] {
    return [...this.getExperience()].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime()
      const dateB = new Date(b.startDate).getTime()
      return dateB - dateA
    })
  }

  static getAllSkills(): Skill[] {
    const skillsTyped = skillsData as {
      frontend: Skill[]
      backend: Skill[]
      ai: Skill[]
      tools: Skill[]
      soft: Skill[]
    }
    // AI / ML first so APIs and the recommender surface engineering focus before web-only tags
    return [
      ...skillsTyped.ai,
      ...skillsTyped.frontend,
      ...skillsTyped.backend,
      ...skillsTyped.tools,
      ...skillsTyped.soft
    ]
  }

  static getSkillsByCategory(
    category: 'frontend' | 'backend' | 'ai' | 'tools' | 'soft'
  ): Skill[] {
    const skillsTyped = skillsData as {
      frontend: Skill[]
      backend: Skill[]
      ai: Skill[]
      tools: Skill[]
      soft: Skill[]
    }
    return skillsTyped[category] || []
  }

  static getSkillCategories(): Array<'frontend' | 'backend' | 'ai' | 'tools' | 'soft'> {
    return ['frontend', 'backend', 'ai', 'tools', 'soft']
  }

  static getExpertSkills(): Skill[] {
    return this.getAllSkills().filter((skill) => skill.proficiency === 'expert')
  }

  static searchSkills(query: string): Skill[] {
    const lowerQuery = query.toLowerCase()
    return this.getAllSkills().filter((skill) =>
      skill.name.toLowerCase().includes(lowerQuery)
    )
  }

  static getStats() {
    return {
      totalProjects: this.getProjects().length,
      featuredProjects: this.getFeaturedProjects().length,
      yearsOfExperience: new Date().getFullYear() - 2021,
      totalSkills: this.getAllSkills().length,
      expertSkills: this.getExpertSkills().length,
      categories: this.getProjectCategories().length
    }
  }
}

export default DataLoader

import type { Project, Experience, Skill, Testimonial } from '@/types';

// Import data files
import projectsData from '@/data/projects.json';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';

// Type for skills data structure
type SkillsDataType = {
  frontend: Skill[];
  backend: Skill[];
  ai: Skill[];
  tools: Skill[];
  soft: Skill[];
};

export class DataLoader {
  /**
   * Get all projects
   */
  static getProjects(): Project[] {
    return projectsData as Project[];
  }

  /**
   * Get featured projects only
   */
  static getFeaturedProjects(): Project[] {
    return this.getProjects().filter(project => project.featured);
  }

  /**
   * Get project by ID
   */
  static getProjectById(id: string): Project | undefined {
    return this.getProjects().find(project => project.id === id);
  }

  /**
   * Get projects by category
   */
  static getProjectsByCategory(category: string): Project[] {
    return this.getProjects().filter(project => project.category === category);
  }

  /**
   * Get all unique project categories
   */
  static getProjectCategories(): string[] {
    const categories = new Set(this.getProjects().map(project => project.category));
    return Array.from(categories);
  }

  /**
   * Get all experience entries
   */
  static getExperience(): Experience[] {
    return experienceData as Experience[];
  }

  /**
   * Get current role
   */
  static getCurrentRole(): Experience | undefined {
    return this.getExperience().find(exp => exp.isCurrentRole);
  }

  /**
   * Get experience sorted by date (newest first)
   */
  static getExperienceSorted(): Experience[] {
    return [...this.getExperience()].sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
  }

  /**
   * Get all skills
   */
  static getAllSkills(): Skill[] {
    const skillsTyped = skillsData as SkillsDataType;
    return [
      ...skillsTyped.frontend,
      ...skillsTyped.backend,
      ...skillsTyped.ai,
      ...skillsTyped.tools,
      ...skillsTyped.soft
    ];
  }

  /**
   * Get skills by category
   */
  static getSkillsByCategory(category: 'frontend' | 'backend' | 'ai' | 'tools' | 'soft'): Skill[] {
    const skillsTyped = skillsData as SkillsDataType;
    return skillsTyped[category] || [];
  }

  /**
   * Get all skill categories
   */
  static getSkillCategories(): Array<'frontend' | 'backend' | 'ai' | 'tools' | 'soft'> {
    return ['frontend', 'backend', 'ai', 'tools', 'soft'];
  }

  /**
   * Get expert level skills
   */
  static getExpertSkills(): Skill[] {
    return this.getAllSkills().filter(skill => skill.proficiency === 'expert');
  }

  /**
   * Search skills by name
   */
  static searchSkills(query: string): Skill[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllSkills().filter(skill => 
      skill.name.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get testimonials (can be imported from file if available)
   */
  static getTestimonials(): Testimonial[] {
    // For now, return hardcoded testimonials - can be moved to JSON later
    return [
      {
        id: "testimonial-1",
        name: "Sarah Johnson",
        title: "CTO",
        company: "Tech Innovations Inc.",
        quote: "Gbenga is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
        avatar: "/sarah.png",
        relationship: "Former Manager",
        featured: true
      },
      {
        id: "testimonial-2",
        name: "Michael Chen",
        title: "Product Manager",
        company: "Digital Solutions Ltd.",
        quote: "Working with Gbenga was a pleasure. He not only delivered the project on time but also suggested improvements that enhanced the overall user experience.",
        avatar: "/Michael.png",
        relationship: "Colleague",
        featured: true
      },
      {
        id: "testimonial-3",
        name: "Joseph James",
        title: "Lead Designer",
        company: "WebTech Startup",
        quote: "Gbenga's technical expertise and collaborative approach made our project a success. He's not just a developer but a true problem solver.",
        avatar: "/Joseph.png",
        relationship: "Former Colleague",
        featured: true
      }
    ];
  }

  /**
   * Get stats summary
   */
  static getStats() {
    return {
      totalProjects: this.getProjects().length,
      featuredProjects: this.getFeaturedProjects().length,
      yearsOfExperience: new Date().getFullYear() - 2021,
      totalSkills: this.getAllSkills().length,
      expertSkills: this.getExpertSkills().length,
      categories: this.getProjectCategories().length
    };
  }

  /**
   * Validate data integrity
   */
  static validateData(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate projects
    this.getProjects().forEach(project => {
      if (!project.id) errors.push(`Project missing id`);
      if (!project.title) errors.push(`Project ${project.id} missing title`);
      if (!project.description) errors.push(`Project ${project.id} missing description`);
      if (!project.technologies || project.technologies.length === 0) {
        errors.push(`Project ${project.id} missing technologies`);
      }
    });

    // Validate experience
    this.getExperience().forEach(exp => {
      if (!exp.id) errors.push(`Experience entry missing id`);
      if (!exp.title) errors.push(`Experience ${exp.id} missing title`);
      if (!exp.company) errors.push(`Experience ${exp.id} missing company`);
      if (!exp.period) errors.push(`Experience ${exp.id} missing period`);
    });

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

export default DataLoader;

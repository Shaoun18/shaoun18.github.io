export interface Experience { role: string; company: string; url: string; period: string; location: string; tags: string[]; points: string[] }
export interface Education { degree: string; school: string; url: string; period: string; score: string; badge: string; points: string[] }
export interface Project { title: string; stack: string; desc: string; img: string; live: string | null; code: string | null; badge?: string; banner?: boolean }
export interface SkillGroup { group: string; items: { name: string; icon: string }[] }
export interface Interest { text: string; icon: string }

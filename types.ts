
export interface SEOTool {
  name: string;
  description?: string;
  icon?: string;
  link?: string;
}

export interface ToolCategory {
  title: string;
  tools: SEOTool[];
}

export interface FeaturedCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}


import { ToolCategory, FeaturedCard } from './types';

export const FEATURED_CARDS: FeaturedCard[] = [
  {
    title: "Site Audit & Moz",
    description: "Full technical health checks, domain authority analysis, and Moz metrics integration.",
    icon: "🏗️",
    color: "bg-orange-gradient"
  },
  {
    title: "Semantic SEO & Ahrefs",
    description: "Entity-based optimization, backlink profile analysis, and rank tracking with Ahrefs data.",
    icon: "🕸️",
    color: "bg-orange-gradient"
  },
  {
    title: "Competitor Analysis",
    description: "Deep dive into Semrush competitive insights, keyword gaps, and market positioning.",
    icon: "🔭",
    color: "bg-orange-gradient"
  },
  {
    title: "Content & AI Center",
    description: "Generate high-quality entities, unique N-Grams, and optimized articles using NLP.",
    icon: "✍️",
    color: "bg-orange-gradient"
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    title: "Technical SEO",
    tools: [
      { name: "EEAT Audit" },
      { name: "Robots.txt Analyzer" },
      { name: "Crawl Optimization" },
      { name: "Speed Optimization" },
      { name: "GSC Audit" },
      { name: "Bing Webmaster" },
      { name: "Screaming Frog" },
      { name: "Backlinks Audit" }
    ]
  },
  {
    title: "On Page SEO",
    tools: [
      { name: "On Page Audit" },
      { name: "Internal Links Checker" },
      { name: "Sitemap Generator" },
      { name: "Robots.txt" },
      { name: "In-Page Links" },
      { name: "Page Indexing" },
      { name: "HTML Errors" },
      { name: "Title Generator" },
      { name: "Meta Description" },
      { name: "Topical Authority" },
      { name: "E-E-A-T" },
      { name: "NLP" }
    ]
  },
  {
    title: "Off-Page SEO",
    tools: [
      { name: "AI Backlink Generator" },
      { name: "Backlink Directory" },
      { name: "CSV Generator" },
      { name: "Expired Domain Finder" },
      { name: "Backlink Cleaner" },
      { name: "Guest Posts Marketplace" },
      { name: "Backlink Checker" },
      { name: "Backlink Maker" },
      { name: "Website Link Count Checker" },
      { name: "Website Broken Link Checker" },
      { name: "Reciprocal Link Checker" },
      { name: "Website Link Analyzer Tool" }
    ]
  },
  {
    title: "Keyword Research",
    tools: [
      { name: "Keyword Position" },
      { name: "Keywords Density Checker" },
      { name: "Keyword Research Tool" },
      { name: "Keyword Competition Tool" },
      { name: "Long Tail Keyword Suggestion Tool" },
      { name: "Keyword Overview Tool" },
      { name: "Keyword Difficulty Checker" },
      { name: "Suggest Keywords" },
      { name: "SERP Checker" },
      { name: "Semantic SEO" },
      { name: "Encyclopedia" },
      { name: "Topical Map" },
      { name: "Resources" }
    ]
  },
  {
    title: "Local SEO",
    tools: [
      { name: "Image Geo Tagger" },
      { name: "Localo" },
      { name: "MonsterInsights" },
      { name: "BrightLocal" },
      { name: "Scheme Generator" },
      { name: "Review Link Generator" },
      { name: "TrackRight" },
      { name: "GrowthBar" },
      { name: "GeoRanker" },
      { name: "BiQ" },
      { name: "WhiteSpark" }
    ]
  },
  {
    title: "Content Creation",
    tools: [
      { name: "Content Writer" },
      { name: "Outline Creator" },
      { name: "Entities Extractor" },
      { name: "Entities Generator" },
      { name: "N-Grams Extractor" },
      { name: "NLP Extractor" },
      { name: "Grammar Generator" },
      { name: "Unique N-Grams" },
      { name: "Skip Gram Words" }
    ]
  },
  {
    title: "Content Optimization",
    tools: [
      { name: "ChatGPT Watermark Remover" },
      { name: "AI Essay Writer" },
      { name: "AI Writer" },
      { name: "AI Text Generator" },
      { name: "Title Generator" },
      { name: "Paragraph Generator" },
      { name: "Essay Title Generator" },
      { name: "Plot Generator" },
      { name: "Thesis Statement Generator" },
      { name: "AI Story Generator" },
      { name: "AI Humanizer" },
      { name: "AI Email Writer" }
    ]
  },
  {
    title: "GEO SEO",
    tools: [
      { name: "LLMs.txt Generator" },
      { name: "AI Model Index Checker" },
      { name: "AI Model Compatibility" }
    ]
  },
  {
    title: "Website Management Tools",
    tools: [
      { name: "Website SEO Score Checker" },
      { name: "Google Pagerank Checker" },
      { name: "Online Ping Website Tool" },
      { name: "Page Speed Test" },
      { name: "Website Page Size Checker" },
      { name: "Website Page Snooper" },
      { name: "Website Hit Counter" },
      { name: "XML Sitemap Generator" },
      { name: "Adsense Calculator" },
      { name: "Open Graph Checker" },
      { name: "Open Graph Generator" },
      { name: "Twitter Card Generator" },
      { name: "Mobile Friendly Test" },
      { name: "Video Downloader" },
      { name: "Facebook Video Downloader" },
      { name: "Instagram Video Downloader" },
      { name: "Robots.txt Generator" },
      { name: "URL Shortener" },
      { name: "Website Checker" },
      { name: "URL Opener" }
    ]
  },
  {
    title: "Website Tracking Tools",
    tools: [
      { name: "Link Tracker" },
      { name: "Check Server Status" },
      { name: "Alexa Rank Comparison" },
      { name: "Page Comparison" },
      { name: "Spider Simulator" },
      { name: "Google Cache Checker" },
      { name: "Mozrank Checker" },
      { name: "Page Authority Checker" },
      { name: "Google Index Checker" },
      { name: "Alexa Rank Checker" },
      { name: "Redirect Checker" },
      { name: "Cloaking Checker" },
      { name: "Find Facebook ID" },
      { name: "GEO IP Locator" },
      { name: "What Is My Browser" }
    ]
  }
];

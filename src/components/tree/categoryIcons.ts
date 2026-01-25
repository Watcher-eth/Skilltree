import { SkillSubcategory } from "@/lib/categories";

/* ───────────────── ICONS ───────────────── */

// animated


// fallback (regular lucide)
import {
  Brain,
  Code,
  Database,
  Server,
  Monitor,
  Cloud,
  Cpu,
  BookOpen,
  GraduationCap,
  Palette,
  Camera,
  Microscope,
  Dna,
  Beaker,
  Telescope,
  ScrollText,
  PenTool,
  Scale,
  CreditCard,
  ShoppingCart,
  Utensils,
  Leaf,
  Wand,
  Package,
  Megaphone,
} from "lucide-react";
import { LayersIcon } from "../ui/layers"
import { ActivityIcon } from "../ui/activity"
import { TerminalIcon } from "../ui/terminal"
import { BlocksIcon } from "../ui/blocks"
import { AtomIcon } from "../ui/atom"
import { FileTextIcon } from "../ui/file-text"
import { ShieldCheckIcon } from "../ui/shield-check"
import { BoxesIcon } from "../ui/boxes"
import { GitBranchIcon } from "../ui/git-branch"
import { HeartIcon } from "../ui/heart"
import { SparklesIcon } from "../ui/sparkles"
import { GaugeIcon } from "../ui/gauge"
import { AirplaneIcon } from "../ui/airplane"
import { EarthIcon } from "../ui/earth"
import { ClapIcon } from "../ui/clap"
import { ChartLineIcon } from "../ui/chart-line"
import { BadgeAlertIcon } from "../ui/badge-alert"
import { FileCheckIcon } from "../ui/file-check"
import { BotMessageSquareIcon } from "../ui/bot-message-square"
import { DollarSignIcon } from "../ui/dollar-sign"
import { CloudUploadIcon } from "../ui/cloud-upload"
import { BookTextIcon } from "../ui/book-text"
import { RocketIcon } from "../ui/rocket"
import { FlaskIcon } from "../ui/flask"
import { HardDriveUploadIcon } from "../ui/hard-drive-upload"
import {WifiIcon} from "../ui/wifi"
import { WrenchIcon } from "../ui/wrench"
import { SkillGroup } from "./skills"

/* ───────────────── MAP ───────────────── */

export const SUBCATEGORY_ANIMATED_ICONS: Record<
  SkillSubcategory,
  React.ElementType
> = {
  /* ───── Tools ───── */
  "Productivity & Integration": LayersIcon,
  "Automation Tools": ActivityIcon,
  Debugging: FileCheckIcon,
  "System Administration": Server,
  "IDE Plugins": Code,
  "CLI Tools": TerminalIcon,
  "Domain & DNS Tools": EarthIcon,

  /* ───── Development ───── */
  "CMS & Platforms": LayersIcon,
  "Architecture Patterns": Cpu,
  "Full Stack": LayersIcon,
  Frontend: Monitor,
  Scripting: TerminalIcon,
  "Game Development": SparklesIcon,
  Mobile: AirplaneIcon,
  Backend: Server,
  "Package & Distribution": Package,
  "E-commerce": ShoppingCart,
  "Framework Internals": Code,

  /* ───── Data & AI ───── */
  "LLM & AI": BotMessageSquareIcon,
  "Data Analysis": GaugeIcon,
  "Data Engineering": Database,
  "Machine Learning": Brain,

  /* ───── Business ───── */
  "Project Management": ActivityIcon,
  "Sales & Marketing": Megaphone,
  "Finance & Investment": CreditCard,
  "Health & Fitness": HeartIcon,
  "Business Apps": LayersIcon,
  "Real Estate & Legal": Scale,
  Payment: DollarSignIcon,

  /* ───── DevOps ───── */
  "CI/CD": ActivityIcon,
  "Git Workflows": GitBranchIcon,
  Cloud: CloudUploadIcon,
  Containers: BoxesIcon,
  Monitoring: GaugeIcon,

  /* ───── Testing & Security ───── */
  Testing: BadgeAlertIcon,
  "Code Quality": ShieldCheckIcon,
  Security: ShieldCheckIcon,

  /* ───── Documentation ───── */
  "Knowledge Base": BookTextIcon,
  "Technical Docs": ScrollText,
  Education: GraduationCap,

  /* ───── Content & Media ───── */
  "Content Creation": PenTool,
  Documents: FileTextIcon,
  Design: Palette,
  Media: ClapIcon,

  /* ───── Research ───── */
  Academic: FlaskIcon,
  "Scientific Computing": AtomIcon,
  "Computational Chemistry": Beaker,
  Bioinformatics: Dna,
  "Lab Tools": Microscope,
  "Astronomy & Physics": RocketIcon,

  /* ───── Databases ───── */
  "SQL Databases": HardDriveUploadIcon,
  "Database Tools": GaugeIcon,
  "NoSQL Databases": Database,

  
  /* ───── Lifestyle ───── */
  "Divination & Mysticism": Wand,
  "Literature & Writing": PenTool,
  "Philosophy & Ethics": BookOpen,
  "Wellness & Health": Leaf,
  "Arts & Crafts": Palette,
  "Culinary Arts": Utensils,

  /* ───── Blockchain ───── */
  "Web3 Tools": BlocksIcon,
  "Smart Contracts": Code,
  DeFi: ChartLineIcon,
};


export const GROUP_ANIMATED_ICONS: Record<SkillGroup, React.ElementType> = {
    Tools: WrenchIcon,
    Development: LayersIcon,
    "Data & AI": BotMessageSquareIcon,
    Business: DollarSignIcon,
    DevOps: CloudUploadIcon,
    "Testing & Security": ShieldCheckIcon,
    Documentation: BookTextIcon,
    "Content & Media": ClapIcon,
    Research: FlaskIcon,
    Databases: HardDriveUploadIcon,
    Lifestyle: HeartIcon,
    Blockchain: BlocksIcon,
  };
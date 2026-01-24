"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { LeftMenu } from "../tree/menu"

type Props = {
  onAddSkill?: any;
};

export function SkillTreeSidebar({ onAddSkill }: Props) {
  return (
    <Sidebar
      side="left"
      variant="sidebar"
      collapsible="icon"
      className="bg-white/40 backdrop-blur"
    >
   

      <SidebarContent className="p-0 bg-white/40 backdrop-blur">
        <LeftMenu onAddSkill={onAddSkill ?? (() => {})} />
      </SidebarContent>

      {/* Enables click-to-collapse rail */}
      <SidebarRail />
    </Sidebar>
  );
}
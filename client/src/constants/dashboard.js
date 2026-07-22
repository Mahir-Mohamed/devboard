import {
  FolderKanban,
  ListTodo,
  CircleCheckBig,
  Users,
} from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Projects",
    value: 12,
    icon: FolderKanban,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "Tasks",
    value: 48,
    icon: ListTodo,
    color: "text-orange-500",
  },
  {
    id: 3,
    title: "Completed",
    value: 36,
    icon: CircleCheckBig,
    color: "text-green-600",
  },
  {
    id: 4,
    title: "Team",
    value: 8,
    icon: Users,
    color: "text-purple-600",
  },
];
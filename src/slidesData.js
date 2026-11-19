import rawSlides from './slidesContent.json';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Clock,
  Wallet,
  TrendingUp,
  Scale,
  ShieldAlert,
  Plane,
  FileText,
  CheckSquare,
  UserCheck,
  BarChart3,
  CalendarCheck,
  History,
  Sliders,
  CheckCircle2,
  FileSpreadsheet,
  AlertCircle,
  FileClock,
  Briefcase,
  UserPlus,
  Building2,
  HelpCircle,
  Coins,
  ShieldCheck,
  Calendar,
  ShoppingCart,
  Truck,
  Layers,
  Boxes,
  Wrench,
  ClipboardList,
  Package,
} from 'lucide-react';

const ICON_MAP = {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Clock,
  Wallet,
  TrendingUp,
  Scale,
  ShieldAlert,
  Plane,
  FileText,
  CheckSquare,
  UserCheck,
  BarChart3,
  CalendarCheck,
  History,
  Sliders,
  CheckCircle2,
  FileSpreadsheet,
  AlertCircle,
  FileClock,
  Briefcase,
  UserPlus,
  Building2,
  HelpCircle,
  Coins,
  ShieldCheck,
  Calendar,
  ShoppingCart,
  Truck,
  Layers,
  Boxes,
  Wrench,
  ClipboardList,
  Package,
};

export const SLIDES_DATA = rawSlides.map((slide) => {
  const item = { ...slide };

  if (item.moduleIcon && typeof item.moduleIcon === 'string') {
    item.moduleIcon = ICON_MAP[item.moduleIcon] || FileText;
  }

  if (item.cards) {
    item.cards = item.cards.map((c) => ({
      ...c,
      icon: typeof c.icon === 'string' ? (ICON_MAP[c.icon] || FileText) : c.icon,
    }));
  }

  if (item.submodules) {
    item.submodules = item.submodules.map((sm) => ({
      ...sm,
      icon: typeof sm.icon === 'string' ? (ICON_MAP[sm.icon] || FileText) : sm.icon,
    }));
  }

  if (item.categories) {
    item.categories = item.categories.map((cat) => ({
      ...cat,
      icon: typeof cat.icon === 'string' ? (ICON_MAP[cat.icon] || FileText) : cat.icon,
    }));
  }

  if (item.ecosystems) {
    item.ecosystems = item.ecosystems.map((eco) => ({
      ...eco,
      icon: typeof eco.icon === 'string' ? (ICON_MAP[eco.icon] || Users) : eco.icon,
    }));
  }

  return item;
});

export const MODULE_NAMES = SLIDES_DATA
  .filter((s) => s.type === 'module' || s.type === 'material')
  .map((s) => s.sectionName);

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "الرئيسية", path: "/" },
  {
    label: "الطب عن بعد",
    path: "/telemedecine",
    subItems: [
      { label: "نظرة عامة", path: "/telemedecine", description: "الخدمات الطبية عن بعد" },
      { label: "التفاصيل", path: "/telemedecine/details", description: "معلومات مفصلة عن الخدمات الصحية" },
    ],
  },
  {
    label: "التعليم",
    path: "/education",
    subItems: [
      { label: "نظرة عامة", path: "/education", description: "خدمات التعليم عن بعد" },
      { label: "التفاصيل", path: "/education/details", description: "معلومات مفصلة عن خدمات التعليم" },
    ],
  },
  {
    label: "الاقتصاد",
    path: "/economic-development",
    subItems: [
      { label: "نظرة عامة", path: "/economic-development", description: "خدمات التنمية الاقتصادية" },
      { label: "التفاصيل", path: "/economic-development/details", description: "معلومات مفصلة عن التنمية الاقتصادية" },
    ],
  },
  {
    label: "الماء",
    path: "/water-management",
    subItems: [
      { label: "نظرة عامة", path: "/water-management", description: "حلول إدارة المياه" },
      { label: "التفاصيل", path: "/water-management/details", description: "معلومات مفصلة عن إدارة المياه" },
    ],
  },
  {
    label: "المشاركة المدنية",
    path: "/civic-engagement",
    subItems: [
      { label: "نظرة عامة", path: "/civic-engagement", description: "خدمات المشاركة المدنية" },
      { label: "التفاصيل", path: "/civic-engagement/details", description: "معلومات مفصلة عن المشاركة المدنية" },
    ],
  },
];

const MainNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <NavigationMenu dir="rtl" className="max-w-full w-full justify-end">
      <NavigationMenuList className="gap-2">
        {NAV_ITEMS.map((item) =>
          item.subItems ? (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuTrigger
                className={isActive(item.path) ? "bg-accent" : ""}
                aria-expanded={isActive(item.path)}
              >
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.path}>
                      <Link to={subItem.path}>
                        <NavigationMenuLink
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive(subItem.path) && "bg-accent"
                          )}
                        >
                          <div className="text-sm font-medium">{subItem.label}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.path}>
              <Link to={item.path}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive(item.path) && location.pathname !== "/home/details" && "bg-accent"
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavigation;

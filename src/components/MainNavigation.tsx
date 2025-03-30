
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
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

const MainNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <NavigationMenu dir="rtl" className="max-w-full w-full justify-end">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(),
                isActive('/') && location.pathname !== '/home/details' && "bg-accent"
              )}
            >
              الرئيسية
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className={isActive('/telemedecine') ? "bg-accent" : ""}>
            الطب عن بعد
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
              <li>
                <Link to="/telemedecine">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/telemedecine') && location.pathname !== '/telemedecine/details' && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">نظرة عامة</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">الخدمات الطبية عن بعد</p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/telemedecine/details">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/telemedecine/details') && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">التفاصيل</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">معلومات مفصلة عن الخدمات الصحية</p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className={isActive('/education') ? "bg-accent" : ""}>
            التعليم
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
              <li>
                <Link to="/education">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/education') && location.pathname !== '/education/details' && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">نظرة عامة</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">خدمات التعليم عن بعد</p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/education/details">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/education/details') && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">التفاصيل</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">معلومات مفصلة عن خدمات التعليم</p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className={isActive('/economic-development') ? "bg-accent" : ""}>
            الاقتصاد
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
              <li>
                <Link to="/economic-development">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/economic-development') && location.pathname !== '/economic-development/details' && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">نظرة عامة</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">خدمات التنمية الاقتصادية</p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/economic-development/details">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/economic-development/details') && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">التفاصيل</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">معلومات مفصلة عن التنمية الاقتصادية</p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className={isActive('/water-management') ? "bg-accent" : ""}>
            الماء
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
              <li>
                <Link to="/water-management">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/water-management') && location.pathname !== '/water-management/details' && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">نظرة عامة</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">حلول إدارة المياه</p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/water-management/details">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/water-management/details') && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">التفاصيل</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">معلومات مفصلة عن إدارة المياه</p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className={isActive('/civic-engagement') ? "bg-accent" : ""}>
            المشاركة المدنية
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
              <li>
                <Link to="/civic-engagement">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/civic-engagement') && location.pathname !== '/civic-engagement/details' && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">نظرة عامة</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">خدمات المشاركة المدنية</p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/civic-engagement/details">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/civic-engagement/details') && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium">التفاصيل</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">معلومات مفصلة عن المشاركة المدنية</p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavigation;

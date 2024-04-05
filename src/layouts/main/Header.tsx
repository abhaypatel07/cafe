import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useRouterManager } from "@/services/RouterManager";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const routerManager = useRouterManager();
  const isCurrentPage = (path: string) => router.pathname === path;
  const isCurrentSubPage = (
    componentsLink: { title: string; href: string }[],
  ) => componentsLink.some((x) => x.href === router.pathname);
  const myCoursesLinks: { title: string; href: string }[] = [
    {
      title: "My Course",
      href: routerManager.MY_COURSE_PATH,
    },
    {
      title: "Past Courses",
      href: routerManager.PAST_COURSES_PATH,
    },
  ];
  return (
    <header className="flex items-center justify-between p-4 bg-primary">
      <div>
        <Link href={routerManager.HOME_PAGE_PATH} className="cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={250} height={150} />
        </Link>
      </div>

      <NavigationMenu className="flex items-center hidden md:flex space-x-4">
        <NavigationMenuItem>
          <Link
            href={routerManager.HOME_PAGE_PATH}
            className={`cursor-pointer ${isCurrentPage(routerManager.HOME_PAGE_PATH) || isCurrentPage("/") ? "font-bold" : ""}`}
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary hover:bg-primary">
            <div
              className={`cursor-pointer ${isCurrentSubPage(myCoursesLinks) || isCurrentPage("/past-courses") ? "font-bold" : ""}`}
            >
              My Courses
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="text-black">
            <ul className="grid  gap-3 p-4  lg:w-[200px] text-black">
              {myCoursesLinks.map((component) => (
                <Link
                  key={component.href}
                  href={component.href}
                  className={`cursor-pointer ${isCurrentPage(component.href) ? "font-bold" : ""} text-black`}
                >
                  {component.title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="/masterclasses"
            className={`cursor-pointer ${isCurrentPage("/masterclasses") ? "font-bold" : ""}`}
          >
            Masterclasses
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={routerManager.NEED_HELP_PAGE_PATH}
            className={`cursor-pointer ${isCurrentPage(routerManager.NEED_HELP_PAGE_PATH) ? "font-bold" : ""}`}
          >
            Help
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>

      <div className="flex items-center space-x-2">
        <Link href="/messages" passHref>
          <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
        </Link>
        <Link href="/notifications" passHref>
          <BellIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
        </Link>
        <Link href={routerManager.USER_PROFILE_PAGE_PATH} passHref>
          {isAuthenticated && user?.avatar ? (
            <Image
              src={user.avatar}
              alt={user?.name ?? "User Avatar"}
              width={28}
              height={28}
              className="rounded-full"
            />
          ) : (
            <UserIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
          )}
        </Link>
        <button onClick={logout}>Log out</button>
      </div>
    </header>
  );
};

export default Header;

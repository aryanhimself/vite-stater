import { CircleUser, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "../icons/logo";
import AddIcon from "../icons/add-icon";
import NotificationButton from "../common/notification-button";

const items = [
  {
    name: "My dashboard",
    href: "/dashboard",
    id: 1,
  },
  {
    name: "My Orders",
    href: "/orders",
    id: 2,
  },
  {
    name: "My Solutions",
    href: "/solutions",
    id: 3,
  },
  {
    name: "Platform",
    href: "/platform",
    id: 4,
  },
  {
    name: "Resources",
    href: "/resources",
    id: 5,
  },
  {
    name: "Company",
    href: "/company",
    id: 6,
  },
];

const NavBar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center border gap-4 border-b bg-background px-4 md:px-8 py-4 mb-3">
      <nav className="hidden flex-1 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
        <Link
          to="#"
          className="p-2 flex items-center gap-2 text-lg  md:text-base"
        >
          <Logo />
        </Link>

        {items.map((item) => (
          <Link
            to={item.href}
            key={item.id}
            className=" p-2 transition-colors text-foreground hover:text-accent-foreground"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Logo />
            </Link>
            {items.map((item) => (
              <Link
                to={item.href}
                key={item.id}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex  items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <Button variant="secondary" size="icon" className="rounded-full">
          <AddIcon className="h-5 w-5" />
        </Button>
        <NotificationButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default NavBar;

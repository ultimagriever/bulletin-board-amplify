import { cn } from '@/lib/utils.ts';
import type { NavigationLink } from '@/types';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink, Outlet } from 'react-router';

const navigationLinks: NavigationLink[] = [
  {
    to: '/',
    label: 'Board index',
  },
  {
    to: '/topics/unanswered',
    label: 'Unanswered Topics',
  },
  {
    to: '/topics/active',
    label: 'Active Topics',
  },
  {
    to: '/faq',
    label: 'FAQ',
  },
];

const userLinks: NavigationLink[] = [
  {
    to: '/profile',
    label: 'Your profile',
  },
  {
    to: '/settings',
    label: 'Settings',
  },
];

function MobileMenuButton() {
  return (
    <div className="-mr-2 flex md:hidden">
      <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-teal-500">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <Bars3Icon
          aria-hidden="true"
          className="block size-6 group-data-open:hidden"
        />
        <XMarkIcon
          aria-hidden="true"
          className="hidden size-6 group-data-open:block"
        />
      </DisclosureButton>
    </div>
  );
}

function ProfileDropdown() {
  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <button
          type="button"
          className="relative rounded-full p-1 text-zinc-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-teal-500"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" className="size-6" />
        </button>

        <Menu as="div" className="relative ml-3">
          <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              alt="username"
              src="https://picsum.photos/200"
              className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-zinc-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
          >
            {userLinks.map((link: NavigationLink, index: number) => (
              <MenuItem key={index}>
                <Link
                  to={link.to}
                  className="block px-4 py-2 text-sm text-zinc-700 data-focus:bg-zinc-100 data-focus:outline-hidden dark:text-zinc-300 dark:data-focus:bg-white/5"
                >
                  {link.label}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

function AppNavbar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <DesktopNavigation />
        <ProfileDropdown />
        <MobileMenuButton />
      </div>
    </div>
  );
}

function DesktopNavigation() {
  return (
    <div className="flex items-center">
      <div className="shrink-0">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=teal&shade=500"
          className="size-8"
        />
      </div>

      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigationLinks.map((link: NavigationLink, index: number) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-950/50'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavigation() {
  return (
    <DisclosurePanel className="md:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        {navigationLinks.map((link: NavigationLink, index: number) => (
          <NavLink
            to={link.to}
            key={index}
            className={({ isActive }) =>
              cn(
                isActive
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="border-t border-white/10 pt-4 pb-3">
        <div className="flex items-center px-5">
          <div className="shrink-0">
            <img
              alt="username"
              src="https://picsum.photos/200"
              className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">Tom Cook</div>
            <div className="text-sm font-medium text-zinc-400">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto shrink-0 rounded-full p-1 text-zinc-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-teal-500"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="mt-3 space-y-1 px-2">
          {userLinks.map((link: NavigationLink, index: number) => (
            <DisclosureButton
              key={index}
              as={NavLink}
              to={link.to}
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </DisclosureButton>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  );
}

function AppBreadcrumb() {
  return (
    <header className="relative bg-white shadow-sm dark:bg-zinc-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:inset-y-0 dark:after:bottom-0 dark:after:border-y dark:after:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-lg/6 font-semibold text-zinc-900 dark:text-white">
          Dashboard
        </h1>
      </div>
    </header>
  );
}

export function AppLayout() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-zinc-800 dark:bg-zinc-800/50">
        <AppNavbar />
        <MobileNavigation />
      </Disclosure>

      <AppBreadcrumb />

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

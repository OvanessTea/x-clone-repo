import { PAGES } from "@/config/pages.config";

export interface INavbarItem {
    href: string;
    title: string;
}

export const NAVBAR: INavbarItem[] = [
    {
        href: PAGES.HOME,
        title: 'Home'
    },
    {
        href: PAGES.EXPLORE,
        title: 'Explore'
    },
    {
        href: PAGES.PROFILE_FAKE,
        title: 'Profile'
    },
]
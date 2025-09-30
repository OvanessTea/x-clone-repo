import Link from "next/link";
import type { INavbarItem } from "./navbar.data";

interface Props {
    navbarItem: INavbarItem;
    isActive: boolean;
}

export function NavbarItem({navbarItem, isActive}: Props) {
    return <Link className={isActive ? "text-white" : "text-white/80"} href={navbarItem.href}>{navbarItem.title}</Link>
}

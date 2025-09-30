'use client'
import { usePathname } from "next/navigation";
import { NAVBAR } from "./navbar.data";
import { NavbarItem } from "./NavbarItem";
import { match } from "path-to-regexp";

export function Navbar() {
    const pathname = usePathname();
    
    return <nav className="flex gap-6">
            {NAVBAR.map(item =>
                <NavbarItem
                    key={item.title}
                    navbarItem={item}
                    isActive={!!match(item.href)(pathname)}
                />
            )}
        </nav>
}

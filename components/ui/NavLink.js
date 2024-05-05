"use client"

import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";


const NavLink = ({ children, activeClassName, href, exact, data, ...props }) => {
    const path = usePathname();
    const searchParams = useSearchParams()
    const catagory = searchParams.get('catagory')

    const active = (exact ? path === href : path.startsWith(href)) || (catagory === data);
    const classes = cn(props.className, active && activeClassName);

    if (classes) {
        props.className = classes;
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;
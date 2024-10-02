"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link"; 
import { Button } from "./ui/button";
import { LogOut } from "lucide-react"; 

export const NavbarRoutes = () => {
    const pathname = usePathname();

    const isAdminPage = pathname?.startsWith("/admin");
    const isEmployeePage = pathname?.includes("/Chapter");

    return (
        <div className="flex gap-x-2 ml-auto">
            {isAdminPage || isEmployeePage ? (
                <Link href="/">
                <Button size="sm" variant="ghost">
                    <LogOut className="h-4 w-4 mr-2" />
                    Exit
                </Button></Link>
            ) : (
                <Link href="/admin/courses">
                    <Button size="sm" variant="ghost">
                        Admin mode
                    </Button>
                </Link>
            )}
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

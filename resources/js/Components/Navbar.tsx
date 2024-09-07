import { FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { CircleUser, Menu, Package2, Search, ShoppingCart } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Product } from "@/types";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">MuatMuat</span>
                        </Link>
                        <Link
                            href={route("products.index")}
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            Tabel Produk
                        </Link>
                        <Link
                            href="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            Tabel Pokemon
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1"></div>
        </header>
    );
};

export default Navbar;

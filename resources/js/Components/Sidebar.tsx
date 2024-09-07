import { Link } from "@inertiajs/react";
import { Package2, ShoppingCart } from "lucide-react";
import { FC } from "react";
import { Badge } from "./ui/badge";
import { Product } from "@/types";
import { DrawingPinIcon } from "@radix-ui/react-icons";

const Sidebar: FC<{}> = ({}) => {
    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                >
                    <Package2 className="h-6 w-6" />
                    <span className="">MuatMuat</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <Link
                        href={route("products.index")}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Tabel Produk
                    </Link>
                    <Link
                        href={route("pokemon.index")}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <DrawingPinIcon className="h-4 w-4" />
                        Tabel Pokemon
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

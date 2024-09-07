import { Link } from "@inertiajs/react";
import { Package2, ShoppingCart } from "lucide-react";
import { FC } from "react";
import { Badge } from "./ui/badge";
import { Product } from "@/types";
import { DrawingPinIcon } from "@radix-ui/react-icons";

const Sidebar: FC<{}> = ({}) => {
    return (
        <div className="flex flex-col h-full max-h-screen gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                >
                    <img
                        src="/favicon.ico"
                        alt="Favicon muatmuat"
                        className="w-6 h-6"
                    />
                    <span className="">MuatMuat</span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <Link
                        href={route("products.index")}
                        className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Tabel Produk
                    </Link>
                    <Link
                        href={route("pokemon.index")}
                        className="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
                    >
                        <DrawingPinIcon className="w-4 h-4" />
                        Tabel Pokemon
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

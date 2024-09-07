import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Button } from "@/Components/ui/button";
import { Product } from "@/types";
import { FC, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import RowTable from "./RowTable";
import { Plus, Save, Search } from "lucide-react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { router, useForm, usePage } from "@inertiajs/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import iziToast from "izitoast";

interface ProductProps {
    products: Product[];
}

const ProductPage: FC<ProductProps> = ({ products }) => {
    const [openForm, setOpenForm] = useState(false);
    const [pencarian, setPencarian] = useState("");
    const { data, setData, get, post, errors } = useForm({
        nama: "",
        harga: 0,
        stok: 0,
    });

    const { flash } = usePage<{
        flash: { success: string; error: string };
    }>().props;
    if (flash && flash.success) {
        iziToast.success({
            title: "OK",
            message: flash.success,
            position: "topCenter",
            timeout: 1500,
        });

        flash.success = "";
    }

    var newProducts: Product[] = products.filter((product) =>
        product.nama.toLowerCase().includes(pencarian.toLowerCase())
    );

    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <Sidebar />
                </div>
                <div className="flex flex-col">
                    <Navbar />
                    <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <Tabs defaultValue="all">
                            <div className="w-full gap-2 my-4 md:flex md:justify-between">
                                {/* Dialog Untuk Tambah Produk */}
                                <Dialog
                                    open={openForm}
                                    onOpenChange={setOpenForm}
                                >
                                    <DialogTrigger asChild>
                                        <Button variant="secondary">
                                            <Plus size={16} className="mr-2" />
                                            Tambah Produk
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[725px]">
                                        <DialogHeader>
                                            <DialogTitle>
                                                Tambah Produk
                                            </DialogTitle>
                                            <DialogDescription>
                                                Tambahkan produk dan perhatikan
                                                masukan dengan seksama.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="items-center w-full">
                                                <Label htmlFor="name">
                                                    Nama:
                                                </Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Masukkan Nama Produk . ."
                                                    value={data.nama}
                                                    onChange={(e) =>
                                                        setData(
                                                            "nama",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.nama && (
                                                    <div className="mt-2 text-sm text-red-500">
                                                        {errors.nama}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="items-center w-full">
                                                <Label htmlFor="harga">
                                                    Stok:
                                                </Label>
                                                <Input
                                                    id="harga"
                                                    type="number"
                                                    placeholder="Masukkan Stok . ."
                                                    value={data.stok}
                                                    onChange={(e) =>
                                                        setData(
                                                            "stok",
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                />
                                                {errors.stok && (
                                                    <div className="mt-2 text-sm text-red-500">
                                                        {errors.stok}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="items-center w-full">
                                                <Label htmlFor="stok">
                                                    Harga:
                                                </Label>
                                                <Input
                                                    id="stok"
                                                    type="number"
                                                    placeholder="Masukkan Harga . ."
                                                    value={data.harga}
                                                    onChange={(e) =>
                                                        setData(
                                                            "harga",
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                />
                                                {errors.harga && (
                                                    <div className="mt-2 text-sm text-red-500">
                                                        {errors.harga}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button
                                                type="submit"
                                                onClick={() => {
                                                    post(
                                                        route("products.store"),
                                                        {
                                                            preserveScroll:
                                                                true,
                                                            onSuccess: () => {
                                                                setOpenForm(
                                                                    false
                                                                );
                                                            },
                                                        }
                                                    );
                                                }}
                                            >
                                                <Save
                                                    size={16}
                                                    className="mr-2"
                                                />
                                                Save changes
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                                {/* Cari Produk */}
                                <form className="flex gap-2">
                                    <div className="relative w-full">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            value={pencarian}
                                            onChange={(e) =>
                                                setPencarian(e.target.value)
                                            }
                                            type="search"
                                            placeholder="Search products..."
                                            className="w-full pl-8 shadow-none appearance-none bg-background"
                                        />
                                    </div>
                                </form>
                            </div>
                            <TabsContent value="all">
                                <Card x-chunk="dashboard-06-chunk-0">
                                    <CardHeader className="flex flex-row justify-between">
                                        <div>
                                            <CardTitle>Tabel Produk</CardTitle>
                                            <CardDescription>
                                                Manage your Produk and view
                                                their sales performance.
                                            </CardDescription>
                                        </div>
                                        <div>
                                            <Select
                                                onValueChange={(value) => {
                                                    router.get(
                                                        route("products.index"),
                                                        { sort: value },
                                                        { preserveScroll: true }
                                                    );
                                                }}
                                            >
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Urutkan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="sort-by-stok-desc">
                                                        Sort by Stok (Terbanyak)
                                                    </SelectItem>
                                                    <SelectItem value="sort-by-stok-asc">
                                                        Sort by Stok (Sedikit)
                                                    </SelectItem>
                                                    <SelectItem value="sort-by-harga-desc">
                                                        Sort by Harga (Termahal)
                                                    </SelectItem>
                                                    <SelectItem value="sort-by-harga-asc">
                                                        Sort by Harga (Termurah)
                                                    </SelectItem>
                                                    <SelectItem value="sort-by-nama-asc">
                                                        Sort by Nama (A-Z)
                                                    </SelectItem>
                                                    <SelectItem value="sort-by-nama-desc">
                                                        Sort by Nama (Z-A)
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-max">
                                                        Name
                                                    </TableHead>
                                                    <TableHead>Stok</TableHead>
                                                    <TableHead>Harga</TableHead>
                                                    <TableHead>
                                                        Actions
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {newProducts.map((product) => (
                                                    <RowTable
                                                        product={product}
                                                    />
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
            </div>
        </>
    );
};

export default ProductPage;

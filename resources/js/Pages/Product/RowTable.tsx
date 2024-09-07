import { Product } from "@/types";
import { FC, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Link, useForm } from "@inertiajs/react";
import { TableCell, TableRow } from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";
import { Pencil, Save, Trash } from "lucide-react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

interface RowTableProps {
    product: Product;
}

const RowTable: FC<RowTableProps> = ({ product }) => {
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const {
        data,
        setData,
        put: putProduct,
        delete: deleteProduct,
        errors,
    } = useForm({
        nama: product.nama,
        harga: product.harga,
        stok: product.stok,
    });

    const currencyFormatter = new Intl.NumberFormat("id", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    });

    return (
        <TableRow key={product.id}>
            <TableCell className="font-medium">{product.nama}</TableCell>
            <TableCell>{product.stok}</TableCell>
            <TableCell>{currencyFormatter.format(product.harga)}</TableCell>
            <TableCell className="flex gap-2">
                {/* Dialog untuk Edit Produk */}
                <Dialog open={openForm} onOpenChange={setOpenForm}>
                    <DialogTrigger asChild>
                        <Button size={"sm"} variant="default">
                            <Pencil size={16} className="mr-2" /> Edit
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[725px]">
                        <DialogHeader>
                            <DialogTitle>Edit Produk</DialogTitle>
                            <DialogDescription>
                                Edit produk dan perhatikan masukan dengan
                                seksama.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="items-center w-full">
                                <Label htmlFor="name">Nama:</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Masukkan Nama Produk . ."
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                />
                                {errors.nama && (
                                    <div className="mt-2 text-sm text-red-500">
                                        {errors.nama}
                                    </div>
                                )}
                            </div>
                            <div className="items-center w-full">
                                <Label htmlFor="harga">Stok:</Label>
                                <Input
                                    id="harga"
                                    type="number"
                                    placeholder="Masukkan Stok . ."
                                    value={data.stok}
                                    onChange={(e) =>
                                        setData(
                                            "stok",
                                            parseInt(e.target.value)
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
                                <Label htmlFor="stok">Harga:</Label>
                                <Input
                                    id="stok"
                                    type="number"
                                    placeholder="Masukkan Harga . ."
                                    value={data.harga}
                                    onChange={(e) =>
                                        setData(
                                            "harga",
                                            parseInt(e.target.value)
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
                                    putProduct(
                                        route("products.update", product.id),
                                        {
                                            preserveScroll: true,
                                            onSuccess: () => {
                                                setOpenForm(false);
                                            },
                                        }
                                    );
                                }}
                            >
                                <Save size={16} className="mr-2" />
                                Save changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Dialog untuk Hapus Produk */}
                <Dialog open={openDelete} onOpenChange={setOpenDelete}>
                    <DialogTrigger asChild>
                        <Button size={"sm"} variant="destructive">
                            <Trash size={16} className="mr-2" />
                            Hapus
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Hapus</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            Anda yakin ingin menghapus {product.nama} ?
                        </div>
                        <DialogFooter>
                            <Button
                                className="border-slate-500"
                                variant={"outline"}
                                onClick={() => {
                                    setOpenDelete(false);
                                }}
                            >
                                Batal
                            </Button>
                            <Button
                                onClick={() => {
                                    deleteProduct(
                                        route("products.destroy", product.id),
                                        {
                                            preserveScroll: true,
                                            onSuccess: () => {
                                                setOpenDelete(false);
                                            },
                                        }
                                    );
                                }}
                                className="bg-red-500 hover:bg-red-700"
                                type="submit"
                            >
                                Hapus
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </TableCell>
        </TableRow>
    );
};

export default RowTable;

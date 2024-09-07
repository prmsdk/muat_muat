import { TableCell, TableRow } from "@/Components/ui/table";
import { Pokemon } from "@/types";
import { FC, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { DoorClosed, Info } from "lucide-react";
import axios from "axios";

interface RowTableProps {
    poke: Pokemon;
}

const RowTable: FC<RowTableProps> = ({ poke }) => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <TableRow key={poke.name}>
            <TableCell>{poke.name}</TableCell>
            {/* <TableCell>
                <Dialog open={openForm} onOpenChange={setOpenForm}>
                    <DialogTrigger asChild>
                        <Button variant="default">
                            <Info size={16} className="mr-2" /> Detail
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[725px]">
                        <DialogHeader>
                            <DialogTitle>Detail Pokemon</DialogTitle>
                            <DialogDescription>
                                Detail Pokemon
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-12 gap-4 py-4">
                            <h2 className="col-span-3 text-right">Ability:</h2>
                            <h3 className="col-span-9 text-left">
                                {poke.abilities
                                    ? poke.abilities.ability.name
                                    : ""}
                            </h3>
                            <h2 className="col-span-3 text-right">Spesies:</h2>
                            <h3 className="col-span-9 text-left">
                                {poke.species ? poke.species.name : ""}
                            </h3>
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                onClick={() => {
                                    setOpenForm(false);
                                }}
                            >
                                <DoorClosed size={16} className="mr-2" />
                                Tutup
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </TableCell> */}
        </TableRow>
    );
};

export default RowTable;

import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { Button } from "@/Components/ui/button";
import { Pokemon, Product } from "@/types";
import { FC, useEffect, useState } from "react";
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
import axios from "axios";
import RowTable from "./RowTable";

interface PokemonProps {}

const PokemonPage: FC<PokemonProps> = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [pencarian, setPencarian] = useState("");

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
            .then((resposse) => {
                if (resposse.data) {
                    setPokemons(resposse.data.results);
                }
            });
    }, []);

    var newPokemons: Pokemon[] =
        pokemons && pokemons.length > 0
            ? pokemons.filter((poke) =>
                  poke.name.toLowerCase().includes(pencarian.toLowerCase())
              )
            : [];

    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <Sidebar />
                </div>
                <div className="flex flex-col">
                    <Navbar />
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <Tabs defaultValue="all">
                            <div className="md:flex md:justify-between w-full my-4">
                                {/* Pencarian Pokemon */}
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
                                            className="w-full appearance-none bg-background pl-8 shadow-none"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full my-4">
                                <TabsContent value="all">
                                    <Card x-chunk="dashboard-06-chunk-0">
                                        <CardHeader className="flex flex-row justify-between">
                                            <div>
                                                <CardTitle>
                                                    Tabel Pokemon
                                                </CardTitle>
                                                <CardDescription>
                                                    Daftar nama pokemon dari
                                                    https://pokeapi.co/api/v2/pokemon?limit=50&offset=0.
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <Table className="w-full">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-max">
                                                            Name
                                                        </TableHead>
                                                        {/* <TableHead>
                                                            Url
                                                        </TableHead> */}
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {newPokemons.map(
                                                        (poke, index) => (
                                                            <RowTable
                                                                key={
                                                                    poke +
                                                                    " " +
                                                                    index
                                                                }
                                                                poke={poke}
                                                            />
                                                        )
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </main>
                </div>
            </div>
        </>
    );
};

export default PokemonPage;

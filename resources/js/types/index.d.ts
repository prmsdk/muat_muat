import Product from '../Pages/Product/Index';
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface Product{
    id: number;
    nama: string;
    harga: number;
    stok: number;
}

export interface Pokemon{
    name: string;
    url: string;
    abilities?: {
        ability: PokemonAbility;
        is_hidden: boolean;
        slot: number;
    };
    species?: PokemonSpecies;
}

export interface PokemonAbility{
    name: string;
    url: string;
}

export interface PokemonSpecies{
    name: string;
    url: string;
}

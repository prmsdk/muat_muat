<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 25; $i++) {
            Product::create([
                'nama' => fake()->name() . "-" . $i,
                'stok' => rand(10, 100),
                'harga' => rand(5000, 100000),
            ]);
        }
    }
}

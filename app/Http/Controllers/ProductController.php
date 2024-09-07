<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::select('*');

        if ($request->get('sort')) {
            $sort = $request->get('sort');

            switch ($sort) {
                case 'sort-by-stok-desc':
                    $products->orderBy('stok', 'desc');
                    break;

                case 'sort-by-stok-asc':
                    $products->orderBy('stok', 'asc');
                    break;

                case 'sort-by-harga-desc':
                    $products->orderBy('harga', 'desc');
                    break;

                case 'sort-by-harga-asc':
                    $products->orderBy('harga', 'asc');
                    break;

                case 'sort-by-nama-desc':
                    $products->orderBy('nama', 'desc');
                    break;

                case 'sort-by-nama-asc':
                    $products->orderBy('nama', 'asc');
                    break;

                default:
                    $products->orderBy('nama', 'asc');
                    break;
            }
        }

        return Inertia::render('Product/Index', [
            'products' => $products->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string|min:3|max:255|unique:products,nama',
            'harga' => 'required|numeric|min:1',
            'stok' => 'required|numeric|min:1',
        ]);

        Product::create($data);

        return redirect()->back()->with('success', 'Berhasil menambahkan produk!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'nama' => 'required|string|min:3|max:255|unique:products,nama,' . $product->id . ',id',
            'harga' => 'required|numeric|min:1',
            'stok' => 'required|numeric|min:1',
        ]);

        $product->update($data);

        return redirect()->back()->with('success', 'Berhasil memperbarui produk!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->back()->with('success', 'Berhasil menghapus produk!');
    }
}

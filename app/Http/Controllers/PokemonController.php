<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PokemonController extends Controller
{
    public function index()
    {
        return Inertia::render('Pokemon/Index', []);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UsersController extends Controller
{
    //
    public function index()
    {
        return User::all();
    }
    public function show(Product $product)
    {
        return $product;
    }
    public function store(Request $request)
    {
        $product = User::create($request->all());
        return response()->json($product, 201);
    }
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return response()->json($product, 200);
    }
    public function delete(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}

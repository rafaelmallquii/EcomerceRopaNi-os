<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'category_id' => \App\Models\Category::factory(),
            'name' => $this->faker->name,
            'slug' => $this->faker->slug,
            'price' => $this->faker->numberBetween(-10000, 10000)
        ];
    }

    public function configure(): ProductFactory
    {
        return $this->afterCreating(function (\App\Models\Product $product) {

            // faker api product image
            $product->images()->createMany([
                [
                    'url' => 'https://picsum.photos/seed/picsum/200/300',
                ],
                [
                    'url' => 'https://picsum.photos/seed/picsum/200/300',
                ],
                [
                    'url' => 'https://picsum.photos/seed/picsum/200/300',
                ],
            ]);
        });
    }
}

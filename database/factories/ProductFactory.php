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

            'category_id' => function() {
                return \App\Models\Category::all()->random();
            },
            'name' => $this->faker->name,
            'description' => $this->faker->sentence,
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
                    'url' => $this->faker->imageUrl(640, 480, 'animals', true)
                ],
                [
                    'url' => $this->faker->imageUrl(640, 480, 'animals', true)
                ],
                [
                    'url' => $this->faker->imageUrl(640, 480, 'animals', true)
                ],
            ]);
        });
    }
}

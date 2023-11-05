<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'url' => $this->faker->imageUrl(),
            'imageable_id' => \App\Models\Product::factory(),
            'imageable_type' => 'App\Models\Product'
        ];
    }
}

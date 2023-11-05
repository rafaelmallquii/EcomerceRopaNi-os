<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;

class CreateProductCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-product-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        
        // sasasas sscarping 
        // new Date

        $date = new \DateTime();

        $this->info($date->format('Y-m-d H:i:s'));

        Product::create([
            'category_id' => 1,
            'name' => 'Mi nuevo producto'. $date->format('Y-m-d H:i:s'),
            'slug' => 'product-'. $date->format('Y-m-d H:i:s'),
            'price' => 1000
        ]);
    }
}

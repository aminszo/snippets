<?php

/**
 * Assign all WooCommerce products from a specific category to a given user.
 * Useful for programmatically changing product ownership in bulk.
 *
 * tags: wordpress, woocommerce, product, user, bulk-update, php
 * source: copied - original source unknown
 */

require_once "../wp-load.php";

function assign_category_products_to_user($user_id, $category_slug)
{
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => $category_slug,
            ),
        ),
    );

    $products = get_posts($args);

    echo count($products) . "</br>";
    foreach ($products as $product) {
        wp_update_post(array(
            'ID'          => $product->ID,
            'post_author' => $user_id,
        ));
    }
}

assign_category_products_to_user(your_user_id, 'your-category-slug');

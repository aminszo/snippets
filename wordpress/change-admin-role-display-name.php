<?php

/**
 * Changes the display name of the "Administrator" role to a custom label (e.g., "manager").
 * Only affects the label shown in the admin UI, not the role slug or capabilities.
 *
 * Notes:
 * - This does NOT change the role slug (`administrator`) — it remains the same.
 * - This affects only the display: WordPress uses the role slug internally for permission checks.
 * - Add to your theme's `functions.php` file or a custom plugin.
 *
 * tags: wordpress, roles, admin-ui, customization, php
 * source: ChatGPT
 */

add_action('init', function () {
    global $wp_roles;
    if (!isset($wp_roles)) {
        $wp_roles = wp_roles();
    }

    // Change the display name for the 'administrator' role
    if ($wp_roles->is_role('administrator')) {
        $wp_roles->roles['administrator']['name'] = 'manager'; // new name
        $wp_roles->role_names['administrator'] = 'manager';
    }
});

<?php

/**
 * The following snippet must added to the source WordPress site
 * The snippet will generate /wp-content/static-global-styles.css file on each
 * load on the Dasboard screen
 */

add_action('load-index.php', function() {
  file_put_contents(
    WP_CONTENT_DIR . '/static-global-styles.css',
    wp_get_global_stylesheet()
  );
});

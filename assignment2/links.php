<?php
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/WP20/assignment2/index.php',
        'Links' => '/WP20/assignment2/links.php',
        'News' => '/WP20/assignment2/news.php',
        'Future' => '/WP20/assignment2/future.php',
    )
);
include __DIR__ . '/tpl/head.php';
$body = "
        <div class='col-md-12'>
            <h1>Welcome to my site!</h1>
            <h2>This is the page for links!</h2>
        </div>";
include __DIR__ . '/tpl/body-start.php';
include __DIR__ . '/tpl/body-end.php';
include __DIR__ . '/tpl/footer.php';
?>

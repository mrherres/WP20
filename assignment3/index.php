<?php
    $page_title = 'Webprogramming Assignment 3';
    $navigation = Array(
        'active' => 'News',
        'items' => Array(
            'News' => '/WP20/assignment3/index.php',
            'Add news item' => '/WP20/assignment3/news_add.php',
            'Leap Year' => '/WP20/assignment3/leapyear.php',
        )
    );
    include __DIR__ . '/tpl/head.php';
    include __DIR__ . '/tpl/body_start.php';
    ?>
<script type="application/javascript" src="scripts/main.js"></script>

<div class="pd-40">
    <div class="row">
        <div class="col-md-12" id="news_container">
        </div>
    </div>
</div>
<?php
include __DIR__ . "/tpl/body_end.php";
?>

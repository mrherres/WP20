<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP20/assignment3/index.php',
        'Add news item' => '/WP20/assignment3/news_add.php',
        'Leap Year' => '/WP20/assignment3/leapyear.php',
        'Simple Form' => '/WP20/assignment3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<?php
    if (isset($_GET["name"]) && isset($_GET["place"])){
        if($_GET["name"] != "" && ($_GET["place"] != "")){
            echo "<h1>Welcome " . $_GET["name"] . "!</h1>";
            if($_GET["place"] === "Amsterdam" || $_GET["place"] === "amsterdam"){
                echo "<p>You're from the capital of the Netherlands!</p>";
            }
            else {
                echo "<p>You're from " . $_GET["place"] . "!</p>";
            }
    }
}
?>
    <form name="myForm" id="form" action="simple_form.php" method="GET" novalidate>
        <label for="name">Name</label>
        <input class="form-control" type="text" id="name" name="name" placeholder="Jan Jansen" required>
        <label for="place">Place</label>
        <input class="form-control" type="text" id="place" name="place" placeholder="Drenthe">
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
<?php
include __DIR__ . '/tpl/body_end.php';
?>
<?php
if (isset($_POST['submit'])){
    $json_file = file_get_contents("../data/articles.json");
    $articles = json_decode($json_file, true);

    foreach($articles as $key => $value){
        if ($value['id'] == $_POST['article_id']){
            $article_key = $key;
        }
    }

    $articles[$article_key] = [
        'id' => $_POST['article_id'],
        'date' => time(),
        'title' => $_POST['title'],
        'article' => $_POST['article']
    ];
    $json_file = fopen('../data/articles.json', 'w');
    fwrite($json_file, json_encode($articles));
    fclose($json_file);

    header("Location: ../");
    die();
}
?>

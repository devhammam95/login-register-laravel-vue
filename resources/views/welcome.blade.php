<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>Laravel</title>
        <!-- Fonts -->
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    </head>

    <body>
    <div id="app">
        <home></home>
    </div>
    <script  type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

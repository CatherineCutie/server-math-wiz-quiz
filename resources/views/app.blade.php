<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="icon" href="{{ asset('assets/imgs/logo/Untitled.png') }}" type="image/x-icon"/>


        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="CathSandyServer" />
        <meta property="og:description" content="Website own by Cath and Sandy." />
        <meta property="og:image" content="{{ asset('assets/imgs/logo/Untitled.png') }}" />
        <meta property="og:url" content="{{ url()->current() }}" />
        <meta property="og:type" content="website" />

        <!-- Twitter Card Meta Tags (Optional) -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="CathSandyServer">
        <meta name="twitter:description" content="Website own by Cath and Sandy.">
        <meta name="twitter:image" content="{{ asset('assets/imgs/logo/Untitled.png') }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

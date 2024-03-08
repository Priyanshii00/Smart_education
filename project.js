<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Education</title>
    <style>
        /* Your existing CSS styles go here */
    </style>
</head>
<body>

    <header>
        <h1>Smart Education Hub</h1>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <button onclick="toggleDayNightMode()">Toggle Mode</button>
    </nav>

    <main>
        <section id="home">
            <h2>Welcome to Smart Education Hub</h2>
            <p>Empowering minds through smart learning solutions.</p>
        </section>

        <!-- Other sections go here -->

    </main>

    <footer>
        <p>&copy; 2024 Smart Education Hub. All rights reserved.</p>
    </footer>

    <script>
        // JavaScript code for day/night mode toggle
        function toggleDayNightMode() {
            const body = document.body;
            body.classList.toggle("night-mode");
        }
    </script>

</body>
</html>

## Technical Test – Primasdika Yunia Putra

### 1. Link Git Penugasan

• Repository: https://github.com/prmsdk/muat_muat

### 2. Dokumentasi Langkah Instalasi/Deployment

Langkah-Langkah Instalasi (jalankan pada terminal/command prompt):

-   Instal Laravel & React Requirement
-   Clone Repository
    `git clone https://github.com/prmsdk/muat_muat`
    `cd [NAMA_PROYEK]`
-   Instal Dependensi
    `composer install`
    `npm install`
-   Konfigurasi Env
    `cp .env.example .env`
    Tambahkan pada .env:
    ```env:
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3600
    DB_DATABASE=your_database
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```
-   Generate App Key
    `php artisan key:generate`
-   Migrasi Database
    `php artisan migrate`
-   Migrasi Database
    `php artisan db:seed --class=ProductSeeder`
-   Jalankan Server
    `php artisan serve`
    `npm run dev`
-   Kunjungi
    `http://localhost:8000`

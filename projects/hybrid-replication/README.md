# Hybrid Bidirectional Replication (SymmetricDS + Docker + Oracle + MySQL)

Ringkasan

- Implementasi contoh arsitektur replikasi hybrid bidirectional antara Oracle dan MySQL menggunakan SymmetricDS sebagai engine sinkronisasi, dikemas dengan Docker Compose.

Isi Folder

- `docker-compose.yml` : men-setup container `mysql`, `oracle`, dan `symmetricds`.
- `conf/` : direktori konfigurasi SymmetricDS (disarankan untuk menambahkan `symmetric.properties` dan file engine di sini).

Catatan penting

- Image Oracle (`gvenzl/oracle-xe`) digunakan untuk kemudahan pengujian. Untuk produksi, gunakan image Oracle resmi sesuai lisensi.
- SymmetricDS memerlukan konfigurasi engine (node group, engine id, router/trigger, channel). Contoh konfigurasi tidak disertakan di sini; gunakan dokumentasi resmi SymmetricDS untuk men-setup `engines` dan `symmetric.properties`.

Menjalankan (contoh)

1. Copy atau buat folder `conf/` di dalam folder ini, lalu tambahkan konfigurasi SymmetricDS (lihat dokumentasi).
2. Jalankan:

```bash
docker compose up -d
```

3. Akses log container SymmetricDS untuk melihat status:

```bash
docker logs -f symmetricds
```

Referensi

- SymmetricDS: https://www.symmetricds.org

# React Demo — Batu Kertas Gunting

Aplikasi permainan Batu Kertas Gunting sederhana yang dibangun menggunakan **React**, **TypeScript**, **Vite**, dan **Tailwind CSS**.

## Prasyarat

Pastikan kamu sudah menginstal:

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- npm (sudah termasuk bersama Node.js)

## Cara Menjalankan Aplikasi

### 1. Clone repositori

```bash
git clone https://github.com/Maru-Yasa/study-jam-unesa
cd study-jam-unesa
```

### 2. Install dependensi

```bash
npm install
```

### 3. Jalankan mode pengembangan

```bash
npm run dev
```

Buka browser dan akses `http://localhost:5173`.

## Perintah Lainnya

| Perintah | Keterangan |
|---|---|
| `npm run dev` | Menjalankan server pengembangan lokal |
| `npm run build` | Membuat build produksi |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Cara Mengikuti Challenge

### 1. Clone repositori

```bash
git clone https://github.com/Maru-Yasa/study-jam-unesa
cd study-jam-unesa
```

### 2. Pindah ke branch challenge

```bash
git checkout challenge
```

### 3. Install dependensi

```bash
npm install
```

### 4. Jalankan aplikasi

```bash
npm run dev
```

---

### Apa yang perlu kamu kerjakan?

Pada branch `challenge`, kode sudah dikosongkan. Tugasmu adalah melengkapinya:

#### `src/components/`

- [ ] Buat **`Box.tsx`**
  - [ ] Terima props: `emoji: string`, `player: "player" | "bot"`
  - [ ] Tampilkan ikon `👤` jika `player`, `🤖` jika `bot`
  - [ ] Tampilkan `emoji` di dalam kotak

- [ ] Buat **`BoxButton.tsx`**
  - [ ] Terima props: `emoji: string`, `onClick: () => void`
  - [ ] Render sebagai tombol yang menampilkan `emoji`

#### `src/App.tsx`

- [ ] Gunakan **`useState`** untuk:
  - [ ] `playerSelection` — pilihan pemain, nilai awal `"❓"`
  - [ ] `botSelection` — pilihan bot, nilai awal `"❓"`

- [ ] Gunakan **`useCallback`** untuk fungsi `handleBoxButtonClick`:
  - [ ] Simpan pilihan pemain ke `playerSelection`
  - [ ] Acak pilihan bot dari `["✌️", "✊", "✋"]` dan simpan ke `botSelection`

- [ ] Gunakan **`useMemo`** untuk menghitung hasil permainan:
  - [ ] Jika belum memilih → tampilkan `"Pilih Dulu"`
  - [ ] Jika seri → tampilkan `"🤝 Draw!"`
  - [ ] Jika menang → tampilkan `"🎉 You Win!"`
  - [ ] Jika kalah → tampilkan `"😔 You Lose!"`

  Aturan kemenangan:
  | Pilihan | Mengalahkan |
  |---|---|
  | ✊ Batu | ✌️ Gunting |
  | ✌️ Gunting | ✋ Kertas |
  | ✋ Kertas | ✊ Batu |
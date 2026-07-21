### **Node + Express + TypeScript (Stable Dev Setup)**

> Works with `nodemon`, `ts-node`, MongoDB, Socket.io, JWT
> No loaders, no ESM headaches

---

## 0️⃣ Folder Structure (simple & scalable)

```
backend/
├── src/
│   ├── index.ts
│   ├── app.ts
│   └── config/
│       └── db.ts
├── .env
├── package.json
├── tsconfig.json
└── nodemon.json
```

---

## 1️⃣ Initialize project

```bash
mkdir backend && cd backend
npm init -y
```

---

## 2️⃣ Install runtime dependencies

```bash
npm install express cors dotenv mongoose socket.io jsonwebtoken
```

---

## 3️⃣ Install dev + types (ONLY what’s needed)

```bash
npm install -D typescript ts-node nodemon @types/node @types/express @types/cors @types/jsonwebtoken
```

❌ Don’t install unnecessary type packages unless needed.

---

## 4️⃣ Create `tsconfig.json` (🔥 IMPORTANT)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

✅ This avoids **90% of TS + Node errors**

---

## 5️⃣ Create `nodemon.json`

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/index.ts"
}
```

---

## 6️⃣ Update `package.json`

```json
{
  "name": "backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

❌ DO NOT add `"type": "module"`

---

## 7️⃣ `src/app.ts`

```ts
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

export default app;
```

---

## 8️⃣ `src/index.ts`

```ts
import http from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

---

## 9️⃣ `.env`

```
PORT=3000
MONGO_URI=
JWT_SECRET=
```

---

## 🔟 Run the server

```bash
npm run dev
```

You should see:

```
🚀 Server running on port 3000
```

---

## ❌ What CAUSED your earlier failure (remember this)

❌ Running these together:

* `"type": "module"`
* `"module": "nodenext"`
* `nodemon index.ts`

➡ Node **cannot execute `.ts` without a loader**

---

## ✅ Golden Rules (remember forever)

✔ Use **CommonJS in dev**
✔ Let **ts-node handle TypeScript**
✔ Let **nodemon restart**
❌ Don’t mix ESM unless absolutely needed
❌ Don’t use `nodenext` unless you know why

---

## 🚀 Production Flow (clean)

```bash
npm run build
npm start
```


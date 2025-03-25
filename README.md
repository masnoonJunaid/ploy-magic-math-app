This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



# Magic Math API (Next.js 13+ App Router)

## Overview

This project implements a **Magic Math** calculator using **Next.js 13+ App Router** and exposes it as an API endpoint. The API computes a sequence based on the following recursive formula:

```
magic_math(0) = 0
magic_math(1) = 1
magic_math(n) = magic_math(n-1) + magic_math(n-2) + n  (for n > 1)
```

The API is designed using **Next.js 13+ App Router**, utilizing the `next/server` module for optimized request handling.

## Benefits of Using Next.js App Router

- **File-Based Routing:** API routes are organized in the `/app/api/` directory, which reduces boilerplate code and improves organization.
- **Edge-Optimized APIs:** Next.js 13+ App Router APIs can run at the **edge** for improved performance and reduced latency.
- **Simplified API Handling:** Uses `NextRequest` and `NextResponse` for efficient and type-safe request and response management.
- **Serverless or Hybrid Support:** Can be deployed as serverless functions or run on a traditional Node.js backend, offering flexibility in deployment options.

## API Endpoint

The application exposes a REST endpoint that can be called to calculate the Magic Math sequence.

**Endpoint:** `GET /api/magic_math?n={number}`

**Example:**
```bash
curl -X GET "http://localhost:3000/api/magic_math?n=5"
```

**Note:** If port 3000 is busy, try using port 3001 instead.


## File Structure
```
magic-math-app/
    │── src/
     │── app/
        │   ├── api/
        │   │   ├── magic_math/
        │   │   │   ├── route.ts  # API logic
        │   ├── page.tsx          # UI Component
        ├── components/
            ├── magic_ui.tsx
│── package.json
│── next.config.js
│── tsconfig.json
│── README.md             # Documentation
```

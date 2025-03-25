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



# Magic Math API (Next.js App Router)

## Overview

This project implements a **Magic Math** calculator using **Next.js App Router** and exposes it as an API endpoint. The API computes a sequence based on the formula:

where:  
- **magic_math(0) = 0**  
- **magic_math(1) = 1**  

The API is designed using **Next.js App Router**, utilizing the `next/server` module for optimized request handling.

## Benefits of Using Next.js App Router

- **File-Based Routing:** API routes are organized in the `/app/api/` directory, reducing boilerplate.
- **Edge-Optimized APIs:** Next.js App Router APIs can run at the **edge** for improved performance.
- **Simplified API Handling:** Uses `NextRequest` and `NextResponse` for efficient request management.
- **Serverless or Hybrid Support:** Can be deployed as serverless functions or run on a Node.js backend.


## File Structure
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

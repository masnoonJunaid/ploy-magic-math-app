import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const n = searchParams.get("n");
    const N = parseInt(n || "0", 10);

    if (isNaN(N) || N < 0) {
        return NextResponse.json({ error: "Please enter a valid non-negative integer" }, { status: 400 });
    }

    function magicMathMemoized(N: number, memo: Record<number, number> = {}): number {
        if (N in memo) return memo[N];
        if (N === 0) return 0;
        if (N === 1) return 1;

        memo[N] = magicMathMemoized(N - 1, memo) + magicMathMemoized(N - 2, memo) + N;
        return memo[N];
    }

    return NextResponse.json({ result: magicMathMemoized(N) });
}

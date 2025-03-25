import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const n = searchParams.get("n");
    const N = parseInt(n || "0", 10);

    if (isNaN(N) || N < 0) {
        return NextResponse.json({ error: "Please enter a valid non-negative integer" }, { status: 400 });
    }

    function magicMath(N: number): number {
        if (N === 0) return 0;
        if (N === 1) return 1;
        return magicMath(N - 1) + magicMath(N - 2) + N;
    }

    return NextResponse.json({ result: magicMath(N) });
}

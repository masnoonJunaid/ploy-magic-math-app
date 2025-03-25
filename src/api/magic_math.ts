import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { n } = req.query;
    const N = parseInt(Array.isArray(n) ? n[0] : n || '0', 10);

    if (isNaN(N) || N < 0) {
        return res.status(400).json({ error: "Please enter a valid non-negative integer" });
    }

    function magicMath(N: number): number {
        if (N === 0) return 0;
        if (N === 1) return 1;
        return magicMath(N - 1) + magicMath(N - 2) + N;
    }

    res.status(200).json({ result: magicMath(N) });
}

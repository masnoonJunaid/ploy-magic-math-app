"use client"
import { useState } from "react";



export default function MagicMath() {
    const [n, setN] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const calculateMagicMath = async () => {
        if (!n) {
            setError("Please enter a number");
            return;
        }

        try {
            const response = await fetch(`/api/magic_math?n=${n}`);
            const data = await response.json();

            if (response.ok) {
                setResult(data.result);
                setError("");
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Magic Math Calculator</h1>
            <input
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
                placeholder="Enter N"
                style={{ padding: "10px", marginRight: "10px" }}
            />
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={calculateMagicMath} style={{ padding: "10px" }}>
                Calculate
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
}

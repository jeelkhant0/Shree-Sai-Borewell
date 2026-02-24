'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Global Error:', error);
    }, [error]);

    return (
        <html>
            <body className="bg-slate-900 text-white flex flex-col items-center justify-center min-h-screen p-4">
                <div className="max-w-md w-full bg-slate-800 p-8 rounded-lg shadow-xl border border-red-500/20">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Application Warning</h2>
                    <p className="text-slate-300 mb-6">Something went wrong!</p>
                    <div className="bg-black/50 p-4 rounded mb-6 text-sm font-mono overflow-auto max-h-48 text-red-300">
                        {error.message || 'Unknown error'}
                        {error.digest && <div className="mt-2 text-xs text-slate-500">Digest: {error.digest}</div>}
                    </div>
                    <button
                        onClick={() => reset()}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}

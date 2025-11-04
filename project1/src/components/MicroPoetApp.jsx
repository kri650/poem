import React, { useState, useCallback } from 'react';
import usePoemGenerator from '../components/usePoemGenerator'; 

const MicroPoetApp = () => {
    // Hooks used: useState (2), useCallback (1), usePoemGenerator (1) = 4 hooks total

    // State Hooks for User Input
    const [moodInput, setMoodInput] = useState('peaceful'); // Safe default
    const [keywordInput, setKeywordInput] = useState('cloud');   // Safe default

    // Custom Hook: Get state and function from the logic layer
    const { poem, isLoading, error, generatePoem } = usePoemGenerator();

    // Callback Hook: Optimized handler for the submit button
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        // Trigger the logic in the custom hook
        generatePoem(moodInput, keywordInput);
    }, [moodInput, keywordInput, generatePoem]);

    // --- UI and Rendering (Using classNames from index.css) ---
    return (
        <div className="app-container">
            <h1 className="app-header">The Mood-Based Micro-Poet</h1>
            <p className="app-subtitle">A small project using React Hooks + Gemini AI</p>

            <form onSubmit={handleSubmit} className="form-group">
                <div className="input-row">
                    <label>Mood:</label>
                    <input
                        type="text"
                        value={moodInput}
                        onChange={(e) => setMoodInput(e.target.value)}
                        required
                    />
                </div>

                <div className="input-row">
                    <label>Keyword:</label>
                    <input
                        type="text"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={isLoading} className="generate-button">
                    {isLoading ? 'Crafting Verse...' : 'Create Poem'}
                </button>
            </form>

            <div className="output-area">
                {/* --- Display Loading/Error/Placeholder --- */}
                {isLoading && <p className="status-message loading">AI is crafting the perfect lines...</p>}
                {error && <p className="status-message error">Error: {error}</p>}
                
                {/* --- Display Poem --- */}
                {poem && (
                    <div className="poem-container">
                        {/* <pre> preserves the line breaks from the AI output */}
                        <pre className="poem-text">{poem}</pre>
                    </div>
                )}
                {!poem && !isLoading && !error && (
                    <p className="status-message placeholder">Enter your mood and keyword to begin!</p>
                )}
            </div>
        </div>
    );
};

export default MicroPoetApp;
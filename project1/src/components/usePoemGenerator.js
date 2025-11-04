import { useState, useCallback } from 'react';

// --- 1. The Actual API Endpoint (The URL) ---
const GEMINI_API_ENDPOINT = 
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

// --- 2. The API Key (Stored Securely via Environment Variable) ---
// Note: This must match the variable in your .env file
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 


const usePoemGenerator = () => {
  const [poem, setPoem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generatePoem = useCallback(async (mood, keyword) => {
    if (!mood || !keyword) {
      setError("Please provide both a mood and a keyword.");
      return;
    }

    if (!GEMINI_API_KEY) {
      setError("API Key not found. Please ensure VITE_GEMINI_API_KEY is set in your .env file.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPoem(''); 

    // Define the full prompt that guides the AI's output
    const fullPrompt = 
        `Write a impressive-deep(less than 10 lines) poem about the keyword: "${keyword}" in a ${mood} tone.`

    // The structure required by the Gemini REST API
    const requestBody = {
      contents: [{
        parts: [{ text: fullPrompt }]
      }],
      generationConfig: {
        temperature: 0.8, 
        // INCREASED TOKEN LIMIT to prevent abrupt stopping
        maxOutputTokens: 10000 
      }
    };

    try {
      const response = await fetch(GEMINI_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY, 
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      
      // Check for non-OK HTTP status or zero candidates (Safety Block)
      if (!response.ok || !result.candidates || result.candidates.length === 0) {
        const errorMessage = result.error?.message || 
                             'AI generation failed. Check prompt safety or API key.';
        throw new Error(errorMessage);
      }

      // --- CRITICAL FIX FOR "CANNOT READ PROPERTIES OF UNDEFINED" ---
      const candidate = result.candidates[0];
      const parts = candidate.content?.parts; // Safely check if content.parts exists

      if (parts && parts.length > 0 && parts[0].text) {
          // If the text exists, extract it
          const generatedText = parts[0].text.trim();
          setPoem(generatedText);
      } else {
          // If content is missing, report the failure reason
          throw new Error(`Generation failed: Model returned no readable text (Reason: ${candidate.finishReason}).`);
      }
      
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message || 'An unexpected error occurred during generation.');
    } finally {
      setIsLoading(false);
    }
  }, []); 

  return { poem, isLoading, error, generatePoem };
};

export default usePoemGenerator;
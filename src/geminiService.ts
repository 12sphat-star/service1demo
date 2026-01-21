interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

/**
 * Get AI chat response from Gemini API
 * Configure your Gemini API key in the environment variables
 * VITE_GEMINI_API_KEY=your_key_here
 */
export const getAIChatResponse = async (
  userMessage: string,
  conversationHistory: Message[],
  businessType: string,
  city: string
): Promise<string> => {
  try {
    // This is a placeholder implementation
    // Replace with actual Gemini API integration
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      return `I'm the AI assistant for ${businessType} services in ${city}. Please configure the Gemini API key to enable full functionality.`;
    }

    // Format conversation for Gemini API
    const formattedHistory = conversationHistory.map(msg => ({
      role: msg.role,
      parts: msg.parts
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            ...formattedHistory,
            {
              role: 'user',
              parts: [{ text: userMessage }]
            }
          ],
          systemInstruction: {
            parts: [{
              text: `You are a helpful AI assistant for a ${businessType} business in ${city}. You help customers with service inquiries, repair estimates, and general questions about the business. Be friendly, professional, and concise.`
            }]
          },
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        })
      }
    );

    if (!response.ok) {
      throw new Error('Failed to get response from Gemini API');
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    return "I couldn't process that request. Please try again.";

  } catch (error) {
    console.error('Error getting AI response:', error);
    return `I'm here to help with ${businessType} services in ${city}, but I encountered a temporary issue. Please try again.`;
  }
};

"use server"
import { generatePrompt } from "@/utils/propmptst";
import { GoogleGenAI } from "@google/genai";

interface RfProps {
    grade : string,
    subjectName : string,
    topicName : string,
    teaching_aids : string,
    classroomex : string,
    more : string,
    teachingmethods : string
}

const ai = new GoogleGenAI({apiKey : process.env.GEMINI_API_KEY})

export const rfGeminicall = async ({grade, subjectName, topicName, teaching_aids, classroomex, more, teachingmethods} : RfProps) => {
    try {
        const prompt = generatePrompt({subjectName, grade, topicName, teaching_aids, classroomex, more, teachingmethods})
        const res = await ai.models.generateContent({
            model : "gemini-2.0-flash",
            contents : `${prompt}`,
        })

        const text = res?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) throw new Error("No content received from Gemini");

        return { success: true, text }; 
        
    } catch (error) {
        throw new Error(`error while creating RF ${error}`)
        
    }
}
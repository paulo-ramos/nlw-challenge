import { useState } from "react";

import { CloseButtom } from "../CloseButom";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypesStep } from "./Steps/FeedBackTypesStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";

export const feedBackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    },
};

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null)
    const [feedBackSent, setFeedBackSent] = useState(false);
    
    function handleRestartFeedBack(){
        setFeedBackType(null);
    }
    
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
        {feedBackSent ? (
            <FeedBackTypesStep onFeedBackTypeChanged={setFeedBackType} />
            ):(
                <>
                {!feedBackType ? (
                    <FeedBackTypesStep onFeedBackTypeChanged={setFeedBackType} />
                    ) : (
                        <FeedBackContentStep 
                            feedBackType={feedBackType} 
                            onFeedBackRestartRequested={handleRestartFeedBack}
                            onFeedBackSent={()=>setFeedBackSent(true)}
                        />
                    )
                }
                </>
            )
        }
        <footer className="text-xs text-neutral-400 ">
            Feito com ♥ por <a className="underline underline-offset-2" href="https://google.com.br">Paulo Ramos</a>
        </footer>
        </div>
    )
}
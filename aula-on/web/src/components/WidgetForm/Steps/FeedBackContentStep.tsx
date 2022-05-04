import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedBackTypes } from ".."
import { CloseButtom } from "../../CloseButom"
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedBackContentStepProps{
    feedBackType: FeedBackType;
    onFeedBackRestartRequested: () => void;
    onFeedBackSent: () => void;
}

export function FeedBackContentStep({
    feedBackType,
    onFeedBackRestartRequested,
    onFeedBackSent }: FeedBackContentStepProps){

    const[screenShot, setScreenShot] = useState<string | null>(null);
    const[comment, setComment] = useState('');

    const feedBackTypeInfo = feedBackTypes[feedBackType];

    function handleSubmitFeedback(event:FormEvent){
        event.preventDefault();
        console.log({
            screenShot,
            comment
        })

        onFeedBackSent();

    }

    return(
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedBackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                    <span className="text-xl leading-6 flex items-center gap-2">
                        <img src={ feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6 "/>
                        {feedBackTypeInfo.title}
                    </span>

                    <CloseButtom></CloseButtom>
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenShotButton 
                        screenShot={screenShot}
                        onScreenShotTook={setScreenShot}
                    />

                    <button
                        type="submit"
                        disabled={comment.length==0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}
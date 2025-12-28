import { reviewPullRequest } from '@/module/ai/actions';
import {NextResponse,NextRequest} from 'next/server'

export async function POST(req:NextRequest){
    try{
        const event=req.headers.get("x-github-event");
        console.log(`Received Github event:${event}`)

        if(event==="ping"){
            return NextResponse.json({message:"Pong"},{status:200})
        }

        let body;
        try {
            body = await req.json();
        } catch (parseError) {
            console.error("Failed to parse JSON body:", parseError);
            return NextResponse.json({message:"Invalid JSON"},{status:400})
        }

        if(event==="pull_request"){
            const action=body.action
            const repo=body.repository?.full_name;
            const prNumber=body.number;

            if(!repo || !prNumber) {
                console.error("Missing repo or prNumber in webhook payload");
                return NextResponse.json({message:"Invalid PR payload"},{status:400})
            }

            const [owner,repoName]=repo.split("/")

            console.log(`Processing PR event: action=${action}, repo=${repo}, prNumber=${prNumber}`)

            if(action==="opened" || action==="synchronize"){
                try {
                    await reviewPullRequest(owner,repoName,prNumber)
                    console.log(`Review queued for ${repo} #${prNumber}`)
                } catch (reviewError) {
                    console.error(`Review failed for ${repo} #${prNumber}:`, reviewError)
                }
            }
        }

        return NextResponse.json({message:"Event Processed"},{status:200})    
    } catch(error){
        console.error("Error processing webhook:",error);
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}
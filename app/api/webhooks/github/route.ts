import { reviewPullRequest } from '@/module/ai/actions';
import {NextResponse,NextRequest} from 'next/server'

export async function POST(req:NextRequest){
    try{
          // Check if there's a body before parsing
        const contentLength = req.headers.get('content-length');

        if (!contentLength || contentLength === '0') {
            return NextResponse.json({message:"No body provided"},{status:400})
        }
        const body =await req.json();
        const event=req.headers.get("x-github-event");
        console.log(`Received Github event:${event}`)

        if(event==="ping"){
            return NextResponse.json({message:"Pong"},{status:200})
        }
        if(event==="pull_request"){
            const action=body.action
            const repo=body.repository.full_name;
            const prNumber=body.number;

            const [owner,repoName]=repo.split("/")

            if(action==="opened" || action==="synchronized"){
                reviewPullRequest(owner,repoName,prNumber)
                .then(()=>console.log(`Review completed for ${repo} #${prNumber}`))
                .catch((error)=>console.log(`Review failed for ${repo} #${prNumber}:`,error))
            }
        }

        return NextResponse.json({message:"Event Processes"},{status:200})
    }catch(error){
        console.error("Error processing webhook:",error);
     return NextResponse.json({message:"Internal Server Error"},{status:500})

    }
}
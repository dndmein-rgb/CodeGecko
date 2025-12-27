"use server"

import { inngest } from "@/inngest/client";
import prisma from "@/lib/db"
import { getPullRequestdiff } from "@/module/github/lib/github";

export async function reviewPullRequest(
    owner:string,
    repo:string,
    prNumber:number
) {
    try {
        
    
    const repository=await prisma.repository.findFirst({
        where:{
            owner,
            name:repo
        },include:{
            user:{
                include:{
                    accounts:{
                        where:{
                            providerId:"github"
                        }
                    }
                }
            }
        }
    })
    if(!repository){
        throw new Error(`Repository ${owner}/${repo} not found in database.Please connect the repository.`)
    }

    const githubAccount=repository.user.accounts[0];
    if(!githubAccount?.accessToken){
        throw new Error("No github access token found for the repository owner")
    }
    const token =githubAccount.accessToken;

    const {title}=await getPullRequestdiff(token,owner,repo,prNumber);
    await inngest.send({
        name:"pr.review.requested",
        data:{
            owner,
            repo,
            prNumber,
            userId:repository.user.id
        }
    })
    return {success:true,message:"Review Queued"}
    } catch (error) {
        try {
           const repository=await prisma.repository.findFirst({
            where:{
                owner,name:repo
            }
           }) 
           if(repository){
            await prisma.review.create({
                data:{
                    repositoryId:repository.id,
                    prNumber,
                    prTitle:"Failed to fetch PR",
                    prUrl:`https://github.com/${owner}/${repo}/${prNumber}`,
                    review:`Error :${error instanceof Error?error.message:"Unknown Error"}`,
                    status:"failed"
                }
            })
           }

        } catch (dberror) {
            console.error("failed to save error in database:",dberror)        }
        return {success: false, message: error instanceof Error ? error.message : "Unknown Error"}
    }}
